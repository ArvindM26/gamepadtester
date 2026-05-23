import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

import Home from "./home";
import TesterPage from "./tester-page";
import BlogList from "./blog-list";
import BlogPost from "./blog-post";
import About from "./about";
import Contact from "./contact";
import PrivacyPolicy from "./privacy-policy";
import Terms from "./terms";
import Disclaimer from "./disclaimer";
import CookiePolicy from "./cookie-policy";
import NotFound from "./not-found";
import PS5Page from "./ps5";
import PS4Page from "./ps4";
import XboxPage from "./xbox";
import SwitchProPage from "./switch-pro";
import GenericUSBPage from "./generic-usb";
import JoystickTest from "./joystick-test";
import StickDriftTest from "./stick-drift-test";

const queryClient = new QueryClient();

// Dark mode setup
function DarkModeSetup() {
  useEffect(() => {
    document.documentElement.classList.add("dark");
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
      <DarkModeSetup />
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
