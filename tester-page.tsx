import { useEffect } from "react";
import { useLocation } from "wouter";

export default function TesterPage() {
  const [, setLocation] = useLocation();

  useEffect(() => {
    setLocation("/");
    setTimeout(() => {
      document.getElementById("tester")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  }, [setLocation]);

  return null;
}
