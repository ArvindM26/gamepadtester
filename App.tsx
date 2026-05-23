import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";

import Home from "@/pages/home";
import TesterPage from "@/pages/tester-page";
import BlogList from "@/pages/blog-list";
import BlogPost from "@/pages/blog-post";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/legal/privacy-policy";
import Terms from "@/pages/legal/terms";
import Disclaimer from "@/pages/legal/disclaimer";
import CookiePolicy from "@/pages/legal/cookie-policy";
import NotFound from "@/pages/not-found";
import PS5Page from "@/pages/controller/ps5";
import PS4Page from "@/pages/controller/ps4";
import XboxPage from "@/pages/controller/xbox";
import SwitchProPage from "@/pages/controller/switch-pro";
import GenericUSBPage from "@/pages/controller/generic-usb";
import JoystickTest from "@/pages/joystick-test";
import StickDriftTest from "@/pages/stick-drift-test";

const queryClient = new QueryClient();

// Add dark mode by default
function DarkModeSetup() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tester" component={TesterPage} />
      <Route path="/blog" component={BlogList} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/disclaimer" component={Disclaimer} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route path="/ps5-controller-test" component={PS5Page} />
      <Route path="/ps4-controller-test" component={PS4Page} />
      <Route path="/xbox-controller-test" component={XboxPage} />
      <Route path="/switch-pro-controller-test" component={SwitchProPage} />
      <Route path="/generic-usb-controller-test" component={GenericUSBPage} />
      <Route path="/joystick-test" component={JoystickTest} />
      <Route path="/stick-drift-test" component={StickDriftTest} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <DarkModeSetup />
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
