import { cn } from "@/lib/utils";

interface TriggerBarProps {
  value: number;
  label: string;
  className?: string;
}

export function TriggerBar({ value, label, className }: TriggerBarProps) {
  const percentage = Math.max(0, Math.min(100, value * 100));
  
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      <div className="relative w-8 h-32 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm overflow-hidden flex flex-col justify-end">
        <div 
          className={cn(
            "w-full bg-accent/80 transition-all duration-75",
            value > 0.05 ? "neon-glow-accent" : ""
          )}
          style={{ height: `${percentage}%` }}
        />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="font-bold text-sm uppercase">{label}</span>
        <span className="text-xs font-mono text-muted-foreground">{(value * 100).toFixed(0)}%</span>
      </div>
    </div>
  );
}
