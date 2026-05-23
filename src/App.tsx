import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

const queryClient = new QueryClient();

function DarkModeSetup() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return null;
}

function App({ children }: { children?: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DarkModeSetup />
        {children}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
