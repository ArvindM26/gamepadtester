import { cn } from "@/lib/utils";

interface StickVisualizerProps {
  x: number;
  y: number;
  label: string;
  pressed: boolean;
  className?: string;
}

export function StickVisualizer({ x, y, label, pressed, className }: StickVisualizerProps) {
  // Normalize -1 to 1 into 0 to 100% for positioning
  const dotX = ((x + 1) / 2) * 100;
  const dotY = ((y + 1) / 2) * 100;

  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      <div className={cn(
        "relative w-24 h-24 rounded-full border-2 bg-black/40 backdrop-blur-md overflow-hidden",
        pressed ? "border-primary/50 neon-glow-primary" : "border-white/10"
      )}>
        {/* Crosshairs */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -translate-y-1/2" />
        <div className="absolute left-1/2 top-0 w-[1px] h-full bg-white/5 -translate-x-1/2" />
        
        {/* The stick dot */}
        <div 
          className={cn(
            "absolute w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 transition-transform duration-75",
            pressed ? "bg-primary shadow-[0_0_10px_rgba(153,51,255,0.8)] scale-90" : "bg-white/40"
          )}
          style={{ 
            left: `${Math.max(0, Math.min(100, dotX))}%`, 
            top: `${Math.max(0, Math.min(100, dotY))}%` 
          }}
        />
      </div>
      
      <div className="flex flex-col items-center gap-1">
        <span className="font-bold text-sm uppercase tracking-wider">{label}</span>
        <div className="flex gap-2 text-xs font-mono text-muted-foreground">
          <span>X: {x.toFixed(2)}</span>
          <span>Y: {y.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
}
