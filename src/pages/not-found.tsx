import { Link } from "wouter";
import { Gamepad2 } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden">
      <SEOHead title="404 - Controller Disconnected" description="Page not found." />
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-destructive/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-8 glass-panel p-12 rounded-3xl border-destructive/20">
        <div className="relative">
          <Gamepad2 className="w-32 h-32 text-destructive mx-auto opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-mono font-bold text-4xl text-destructive neon-text-primary">
            404
          </div>
        </div>
        
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Controller Disconnected</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            The page you are looking for has lost connection. Check your URL or return to the main menu.
          </p>
        </div>

        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:scale-105 transition-all shadow-[0_0_15px_rgba(153,51,255,0.4)]"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
