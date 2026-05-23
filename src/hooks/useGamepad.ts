import { useState, useEffect, useRef } from 'react';

export interface StandardGamepad {
  id: string;
  index: number;
  connected: boolean;
  timestamp: number;
  mapping: string;
  buttons: { pressed: boolean; value: number }[];
  axes: number[];
  vibrationActuator?: GamepadHapticActuator;
}

export function useGamepad() {
  const [gamepads, setGamepads] = useState<{ [index: number]: StandardGamepad }>({});
  const requestRef = useRef<number>();

  const pollGamepads = () => {
    const connectedGamepads = navigator.getGamepads();
    const parsedGamepads: { [index: number]: StandardGamepad } = {};

    let hasChanges = false;

    for (let i = 0; i < connectedGamepads.length; i++) {
      const gp = connectedGamepads[i];
      if (gp) {
        parsedGamepads[i] = {
          id: gp.id,
          index: gp.index,
          connected: gp.connected,
          timestamp: gp.timestamp,
          mapping: gp.mapping,
          buttons: gp.buttons.map((b) => ({ pressed: b.pressed, value: b.value })),
          axes: [...gp.axes],
          vibrationActuator: gp.vibrationActuator,
        };
        hasChanges = true; // Always update state if connected to ensure reactivity
      }
    }

    if (hasChanges) {
      setGamepads(parsedGamepads);
    }

    requestRef.current = requestAnimationFrame(pollGamepads);
  };

  useEffect(() => {
    const handleConnect = (e: GamepadEvent) => {
      console.log('Gamepad connected at index %d: %s.', e.gamepad.index, e.gamepad.id);
    };

    const handleDisconnect = (e: GamepadEvent) => {
      console.log('Gamepad disconnected from index %d: %s', e.gamepad.index, e.gamepad.id);
      setGamepads((prev) => {
        const next = { ...prev };
        delete next[e.gamepad.index];
        return next;
      });
    };

    window.addEventListener('gamepadconnected', handleConnect);
    window.addEventListener('gamepaddisconnected', handleDisconnect);

    requestRef.current = requestAnimationFrame(pollGamepads);

    return () => {
      window.removeEventListener('gamepadconnected', handleConnect);
      window.removeEventListener('gamepaddisconnected', handleDisconnect);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  return {
    gamepads: Object.values(gamepads),
  };
}
