import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { useParams, Link } from "wouter";
import { Clock, Calendar, ArrowLeft } from "lucide-react";
import { BLOG_POSTS } from "@/pages/blog-list";

// Mock content generator for demonstration
const generateContent = (title: string) => `
  <h2>Introduction to ${title}</h2>
  <p>When it comes to competitive gaming, your controller is your most important tool. A slight delay in actuation, a minor deadzone issue, or an unresponsive trigger can be the difference between victory and defeat. This is why understanding your hardware is absolutely critical.</p>
  
  <p>In this guide, we will explore the key concepts behind modern gamepads and how you can optimize them for the best possible gaming experience. Whether you are playing fast-paced shooters or precise racing simulators, having reliable inputs is non-negotiable.</p>

  <h2>The Importance of Input Accuracy</h2>
  <p>Every time you press a button or move an analog stick, that physical action must be translated into a digital signal, transmitted to your device, processed by the game engine, and finally rendered on screen. This chain of events happens in milliseconds, but any disruption can cause noticeable input lag.</p>
  
  <h3>Stick Drift Explained</h3>
  <p>One of the most common issues gamers face is "stick drift". This occurs when the potentiometers inside the analog stick mechanism degrade over time, sending small movement signals even when the stick is resting in its neutral position. Using a tool like our Gamepad Tester can help you visualize this drift by observing the raw X and Y axis values when you aren't touching the controller.</p>

  <h2>Step-by-Step Diagnostics</h2>
  <p>If you suspect your controller isn't performing correctly, follow these steps:</p>
  <ul>
    <li>First, ensure your firmware is up to date via the manufacturer's official software.</li>
    <li>Connect the controller directly via USB rather than Bluetooth to rule out wireless interference.</li>
    <li>Use a dedicated testing tool to monitor the raw output of every single button and axis.</li>
    <li>Check the "deadzone" settings within your specific game to see if adjusting them mitigates minor hardware imperfections.</li>
  </ul>

  <h2>Conclusion</h2>
  <p>Maintaining your controller isn't just about keeping it clean; it's about understanding its digital health. By regularly testing your peripheral, you can identify degradation before it impacts your performance in a crucial match.</p>
`;

export default function BlogPost() {
  const params = useParams();
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link href="/blog" className="text-primary hover:underline">Return to Blog</Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title={post.title}
        description={post.excerpt}
      />
      <Navbar />

      {/* Hero Image Area */}
      <div className="w-full h-[40vh] min-h-[300px] bg-gradient-to-br from-primary/30 via-background to-accent/20 relative flex items-end pb-12 border-b border-white/10">
        <div className="absolute inset-0 bg-black/40" />
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6 font-mono text-sm uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </Link>
          <div className="max-w-4xl">
            <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-3 py-1 rounded-md mb-4 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-white/70 font-mono">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {post.readTime}</span>
              <span className="flex items-center gap-2">By Nexus Team</span>
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Article Content */}
          <article className="lg:col-span-8 prose prose-invert prose-lg max-w-none prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-foreground">
            <div dangerouslySetInnerHTML={{ __html: generateContent(post.title) }} />
            
            {/* AdSense In-Article */}
            <div className="w-full h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-sm font-mono my-12 not-prose">
              Advertisement Space
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="glass-panel p-6 rounded-xl sticky top-24">
              <h3 className="font-bold text-lg mb-4 border-b border-white/10 pb-2">Table of Contents</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Introduction</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">The Importance of Input Accuracy</a></li>
                <li className="pl-4"><a href="#" className="hover:text-primary transition-colors">Stick Drift Explained</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Step-by-Step Diagnostics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Conclusion</a></li>
              </ul>
            </div>

            {/* AdSense Sidebar */}
            <div className="w-full h-[250px] border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-muted-foreground/30 text-sm font-mono">
              Advertisement Space
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
