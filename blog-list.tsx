import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BookOpen } from "lucide-react";

export const BLOG_POSTS: {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  date: string;
  readTime: string;
}[] = [];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Gaming Controller Blog & Guides"
        description="Expert guides on gamepad troubleshooting, hardware reviews, fixing stick drift, and optimizing your controller performance."
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Controller <span className="text-primary neon-text-primary">Intel</span></h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Troubleshooting guides, hardware reviews, and technical deep-dives into gamepad technology.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center py-24 text-center max-w-md mx-auto">
          <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
            <BookOpen className="w-9 h-9 text-primary/60" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-3">Posts Coming Soon</h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We are working on guides, reviews, and deep-dives into gamepad technology. Check back soon.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
