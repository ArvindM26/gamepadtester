import { useState } from 'react';
import { useGamepad, StandardGamepad } from '@/hooks/useGamepad';
import { ButtonVisualizer } from './ButtonVisualizer';
import { StickVisualizer } from './StickVisualizer';
import { TriggerBar } from './TriggerBar';
import { Gamepad2, Settings2, RefreshCw } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';

export function GamepadTester() {
  const { gamepads } = useGamepad();
  const [showDebug, setShowDebug] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("0");

  const activeGamepad = gamepads.find(g => g.index.toString() === activeTab) || gamepads[0];

  if (gamepads.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto min-h-[60vh] flex flex-col items-center justify-center p-8 glass-panel rounded-2xl border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          <div className="w-24 h-24 rounded-full bg-white/5 flex items-center justify-center animate-pulse border border-white/10">
            <Gamepad2 className="w-12 h-12 text-muted-foreground" />
          </div>
          
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">No Controller Detected</h2>
            <p className="text-muted-foreground max-w-md">
              Connect a controller via USB or Bluetooth, then press any button to wake it up.
            </p>
          </div>
          
          <div className="flex gap-2 items-center text-xs font-mono text-muted-foreground/60">
            <RefreshCw className="w-3 h-3 animate-spin-slow" />
            Listening for devices...
          </div>
        </div>
      </div>
    );
  }

  const handleVibrate = () => {
    if (activeGamepad?.vibrationActuator) {
      activeGamepad.vibrationActuator.playEffect("dual-rumble", {
        startDelay: 0,
        duration: 500,
        weakMagnitude: 1.0,
        strongMagnitude: 1.0,
      });
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto space-y-6">
      {/* Controls & Headers */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 glass-panel p-4 rounded-xl">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <div>
            <h2 className="font-bold text-lg text-foreground">{activeGamepad.id.split('(')[0] || 'Generic Controller'}</h2>
            <p className="text-xs text-muted-foreground font-mono">Index: {activeGamepad.index} | Mapping: {activeGamepad.mapping || 'standard'}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex items-center space-x-2">
            <Switch id="debug-mode" checked={showDebug} onCheckedChange={setShowDebug} />
            <Label htmlFor="debug-mode" className="text-sm cursor-pointer flex items-center gap-1">
              <Settings2 className="w-4 h-4" /> Debug Data
            </Label>
          </div>
          
          {activeGamepad.vibrationActuator && (
            <button 
              onClick={handleVibrate}
              className="text-xs bg-primary/20 text-primary px-3 py-1.5 rounded-md hover:bg-primary/30 transition-colors border border-primary/30"
            >
              Test Rumble
            </button>
          )}
        </div>
      </div>

      {gamepads.length > 1 && (
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="glass-panel bg-transparent border border-white/10">
            {gamepads.map((gp) => (
              <TabsTrigger key={gp.index} value={gp.index.toString()} className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">
                Controller {gp.index + 1}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      {/* Main Tester Visualizer */}
      <div className="glass-panel rounded-2xl p-8 relative overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          
          {/* Left Side: D-pad & L-Stick */}
          <div className="flex flex-col items-center gap-12">
            <div className="flex gap-4">
              <TriggerBar value={activeGamepad.buttons[6]?.value || 0} label="LT" />
              <ButtonVisualizer label="LB" pressed={activeGamepad.buttons[4]?.pressed || false} value={0} shape="pill" className="mt-8" />
            </div>

            {/* D-Pad */}
            <div className="grid grid-cols-3 grid-rows-3 gap-1 w-32 h-32 transform rotate-45">
              <div />
              <ButtonVisualizer label="UP" pressed={activeGamepad.buttons[12]?.pressed || false} value={0} shape="rect" className="-rotate-45" />
              <div />
              <ButtonVisualizer label="L" pressed={activeGamepad.buttons[14]?.pressed || false} value={0} shape="rect" className="-rotate-45" />
              <div className="bg-white/5 rounded-sm" />
              <ButtonVisualizer label="R" pressed={activeGamepad.buttons[15]?.pressed || false} value={0} shape="rect" className="-rotate-45" />
              <div />
              <ButtonVisualizer label="DN" pressed={activeGamepad.buttons[13]?.pressed || false} value={0} shape="rect" className="-rotate-45" />
              <div />
            </div>

            <StickVisualizer 
              x={activeGamepad.axes[0] || 0} 
              y={activeGamepad.axes[1] || 0} 
              label="L-Stick" 
              pressed={activeGamepad.buttons[10]?.pressed || false} 
            />
          </div>

          {/* Center: System buttons */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex gap-6">
              <ButtonVisualizer label="Select" pressed={activeGamepad.buttons[8]?.pressed || false} value={0} shape="pill" />
              <ButtonVisualizer label="Start" pressed={activeGamepad.buttons[9]?.pressed || false} value={0} shape="pill" />
            </div>
            <ButtonVisualizer label="Home" pressed={activeGamepad.buttons[16]?.pressed || false} value={0} shape="circle" className="mt-4" />
          </div>

          {/* Right Side: Face buttons & R-Stick */}
          <div className="flex flex-col items-center gap-12">
            <div className="flex gap-4">
              <ButtonVisualizer label="RB" pressed={activeGamepad.buttons[5]?.pressed || false} value={0} shape="pill" className="mt-8" />
              <TriggerBar value={activeGamepad.buttons[7]?.value || 0} label="RT" />
            </div>

            {/* Face Buttons */}
            <div className="grid grid-cols-3 grid-rows-3 gap-2 w-32 h-32 transform rotate-45">
              <div />
              <ButtonVisualizer label="Y" subLabel="△" pressed={activeGamepad.buttons[3]?.pressed || false} value={0} shape="circle" className="-rotate-45" />
              <div />
              <ButtonVisualizer label="X" subLabel="□" pressed={activeGamepad.buttons[2]?.pressed || false} value={0} shape="circle" className="-rotate-45" />
              <div />
              <ButtonVisualizer label="B" subLabel="○" pressed={activeGamepad.buttons[1]?.pressed || false} value={0} shape="circle" className="-rotate-45" />
              <div />
              <ButtonVisualizer label="A" subLabel="✕" pressed={activeGamepad.buttons[0]?.pressed || false} value={0} shape="circle" className="-rotate-45" />
              <div />
            </div>

            <StickVisualizer 
              x={activeGamepad.axes[2] || 0} 
              y={activeGamepad.axes[3] || 0} 
              label="R-Stick" 
              pressed={activeGamepad.buttons[11]?.pressed || false} 
            />
          </div>
          
        </div>
      </div>

      {/* Debug Panel */}
      {showDebug && (
        <Card className="glass-panel p-4 font-mono text-xs overflow-x-auto">
          <pre className="text-muted-foreground">
            {JSON.stringify({
              id: activeGamepad.id,
              axes: activeGamepad.axes.map(a => a.toFixed(4)),
              buttons: activeGamepad.buttons.map((b, i) => `${i}: ${b.pressed ? '1' : '0'} (${b.value.toFixed(2)})`)
            }, null, 2)}
          </pre>
        </Card>
      )}
    </div>
  );
}
