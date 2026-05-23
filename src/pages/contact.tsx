import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead 
        title="Contact Us"
        description="Get in touch with the Gamepad Tester team for support, business inquiries, or feedback."
      />
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in <span className="text-primary neon-text-primary">Touch</span></h1>
            <p className="text-lg text-muted-foreground">Have a question or feedback? We'd love to hear from you.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-panel p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Subject</label>
                  <Input placeholder="How can we help?" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea placeholder="Your message here..." className="min-h-[150px] bg-background/50 border-white/10 focus-visible:ring-primary" />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12 mt-4 shadow-[0_0_15px_rgba(153,51,255,0.4)]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-panel p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">Email Support</h4>
                      <p className="text-sm">support@nexusgamepad.com</p>
                      <p className="text-sm">We aim to respond within 24 hours.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-muted-foreground">
                    <MessageSquare className="w-6 h-6 text-accent mt-1" />
                    <div>
                      <h4 className="text-foreground font-bold mb-1">Business Inquiries</h4>
                      <p className="text-sm">partnerships@nexusgamepad.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AdSense Placeholder */}
              <div className="w-full h-[250px] border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-muted-foreground/30 text-sm font-mono">
                Advertisement Space
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
