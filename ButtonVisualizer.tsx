import { cn } from "@/lib/utils";

interface ButtonVisualizerProps {
  label: string;
  subLabel?: string;
  pressed: boolean;
  value: number;
  className?: string;
  isAnalog?: boolean;
  shape?: 'circle' | 'rect' | 'pill';
}

export function ButtonVisualizer({
  label,
  subLabel,
  pressed,
  value,
  className,
  isAnalog,
  shape = 'circle'
}: ButtonVisualizerProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div
        className={cn(
          "relative flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-75",
          shape === 'circle' ? "rounded-full w-12 h-12" : shape === 'pill' ? "rounded-full w-16 h-8" : "rounded-md w-12 h-10",
          pressed ? "neon-glow-primary border-primary/50 text-white bg-primary/20 scale-95" : "text-muted-foreground"
        )}
      >
        <span className="font-bold text-sm z-10">{label}</span>
        
        {isAnalog && pressed && value > 0 && (
          <div 
            className="absolute bottom-0 left-0 w-full bg-primary/40 rounded-b-md transition-all duration-75"
            style={{ height: `${value * 100}%` }}
          />
        )}
      </div>
      {subLabel && (
        <span className="text-[10px] uppercase font-mono text-muted-foreground tracking-wider">{subLabel}</span>
      )}
    </div>
  );
}
