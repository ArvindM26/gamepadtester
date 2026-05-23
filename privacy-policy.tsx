import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title="Privacy Policy" description="NexusGamepad Privacy Policy." />
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
        <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
          <FileText className="w-9 h-9 text-primary/60" />
        </div>
        <h1 className="text-3xl font-bold mb-3">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm max-w-sm">This page is coming soon. Content will be added shortly.</p>
      </main>
      <Footer />
    </div>
  );
}
