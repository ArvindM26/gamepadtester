import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function LegalPage({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead title={title} description={`${title} for NexusGamepad`} />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">{title}</h1>
        
        <div className="glass-panel p-8 md:p-12 rounded-2xl prose prose-invert prose-lg max-w-none text-muted-foreground prose-headings:text-foreground">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
