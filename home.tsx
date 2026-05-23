import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, Zap, ShieldCheck, Activity, Target, Layers, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { icon: Target, title: "Stick Drift Detection", desc: "Pinpoint accuracy tracking for analog sticks to identify hardware degradation before it ruins your game." },
  { icon: Activity, title: "Analog Trigger Pressure", desc: "Monitor raw 0-100% actuation values for precise throttle and brake testing on every controller type." },
  { icon: Zap, title: "Sub-millisecond Polling", desc: "Hardware-level response times rendered directly in your browser via requestAnimationFrame." },
  { icon: ShieldCheck, title: "Privacy First", desc: "All testing runs locally in your browser. No data ever leaves your machine — nothing is transmitted." },
  { icon: Layers, title: "Multi-Device Support", desc: "Test up to four controllers simultaneously with seamless tab switching between devices." },
  { icon: Gamepad2, title: "Universal Compatibility", desc: "Works with PlayStation, Xbox, Nintendo Switch Pro, and generic PC controllers via USB or Bluetooth." },
];

const CONTROLLERS = [
  { name: "PS5 DualSense", badge: "Sony", color: "from-blue-600/20 to-indigo-600/10", border: "border-blue-500/20", href: "/ps5-controller-test" },
  { name: "PS4 DualShock 4", badge: "Sony", color: "from-blue-500/20 to-purple-600/10", border: "border-blue-400/20", href: "/ps4-controller-test" },
  { name: "Xbox Series Controller", badge: "Microsoft", color: "from-green-600/20 to-emerald-600/10", border: "border-green-500/20", href: "/xbox-controller-test" },
  { name: "Switch Pro Controller", badge: "Nintendo", color: "from-red-600/20 to-rose-600/10", border: "border-red-500/20", href: "/switch-pro-controller-test" },
  { name: "Generic USB Controller", badge: "Universal", color: "from-white/5 to-white/10", border: "border-white/10", href: "/generic-usb-controller-test" },
];

const FAQ = [
  { q: "Does this work without installing anything?", a: "Yes. The tester runs entirely in your browser using the built-in HTML5 Gamepad API. No plugins, drivers, or downloads needed." },
  { q: "Why isn't my controller being detected?", a: "Connect your controller first, then press any button to wake it up and grant browser access. Some controllers need a button press before the browser registers them." },
  { q: "Which browsers support the Gamepad API?", a: "Chrome, Edge, Firefox, and Opera all support the Gamepad API. Safari has limited support. We recommend Chrome or Edge for the best experience." },
  { q: "Can I test wireless Bluetooth controllers?", a: "Yes. Bluetooth controllers work the same as USB once paired to your computer. Simply connect via Bluetooth in your OS settings, then press a button." },
  { q: "Is my button data stored or sent anywhere?", a: "No. All input processing happens locally in your browser tab. Your controller data is never transmitted to any server." },
  { q: "How do I check for stick drift?", a: "Leave both analog sticks untouched. If the dot inside the stick visualizer moves away from center without any input, your controller may have stick drift." },
];

const HOW_TO = [
  { step: "1", title: "Connect Your Controller", desc: "Plug in via USB cable or pair via Bluetooth from your OS settings." },
  { step: "2", title: "Press Any Button", desc: "Wake up the controller so the browser can detect it — one button press is enough." },
  { step: "3", title: "Test Every Input", desc: "Press buttons, move sticks, squeeze triggers. Watch everything light up in real time." },
];

export default function Home() {
  const scrollToTester = () => {
    document.getElementById("tester")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Free Online Gamepad Tester — Test PS5, Xbox & PC Controllers Instantly"
        description="Test your PS5, Xbox, Switch, and PC controllers online for free. Real-time button, stick, and trigger visualization using the browser Gamepad API. No download needed."
      />
      <Navbar />

      <main>
        {/* Hero + Live Tester — above the fold */}
        <section
          id="tester"
          className="relative pt-16 pb-12 overflow-hidden"
          aria-label="Live Gamepad Tester"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(153,51,255,0.18),transparent)] pointer-events-none" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
                Test Every <span className="text-primary neon-text-primary">Input</span>.{" "}
                <span className="text-accent">Instantly</span>.
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Connect your controller and start testing — no download, no login, no waiting.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <GamepadTester />
            </motion.div>

            <div className="flex justify-center mt-10">
              <button
                onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
                aria-label="Scroll to features"
                className="flex flex-col items-center gap-1 text-muted-foreground/40 hover:text-muted-foreground transition-colors"
              >
                <span className="text-xs font-mono uppercase tracking-widest">Explore</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>
          </div>
        </section>

        {/* AdSense Slot */}
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        {/* Features */}
        <section id="features" className="py-24 bg-black/40">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Diagnostics</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to verify your peripheral is tournament-ready.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-panel p-6 rounded-xl hover:border-primary/50 transition-colors"
                >
                  <f.icon className="w-9 h-9 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Controllers */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Supported <span className="text-primary neon-text-primary">Controllers</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Full compatibility with all major gamepads — wired or wireless.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
              {CONTROLLERS.map((c, i) => (
                <Link key={i} href={c.href}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={`glass-panel p-6 rounded-xl border ${c.border} bg-gradient-to-br ${c.color} flex flex-col items-center gap-3 w-44 hover:scale-105 transition-transform cursor-pointer`}
                  >
                    <Gamepad2 className="w-10 h-10 text-foreground/60" />
                    <div className="text-center">
                      <p className="font-bold text-sm leading-tight">{c.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{c.badge}</p>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* All Diagnostic Tests */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                All <span className="text-accent">Diagnostic Tests</span>
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Dedicated testing pages for every controller type and common input issue.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { label: "Joystick Test", sub: "Analog stick movement & axes", href: "/joystick-test", accent: "border-primary/30 hover:border-primary/60" },
                { label: "Stick Drift Test", sub: "Detect unwanted stick movement", href: "/stick-drift-test", accent: "border-red-500/30 hover:border-red-500/60" },
                { label: "PS5 DualSense Test", sub: "Adaptive triggers & haptics", href: "/ps5-controller-test", accent: "border-blue-500/30 hover:border-blue-500/60" },
                { label: "PS4 DualShock 4 Test", sub: "Touchpad, sticks & triggers", href: "/ps4-controller-test", accent: "border-indigo-500/30 hover:border-indigo-500/60" },
                { label: "Xbox Controller Test", sub: "Bumpers, triggers & guide button", href: "/xbox-controller-test", accent: "border-green-500/30 hover:border-green-500/60" },
                { label: "Switch Pro Controller Test", sub: "Nintendo HID & stick range", href: "/switch-pro-controller-test", accent: "border-red-500/30 hover:border-red-500/60" },
                { label: "Generic USB Gamepad Test", sub: "Universal HID & raw axis data", href: "/generic-usb-controller-test", accent: "border-white/20 hover:border-white/40" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.05 }}>
                  <Link href={item.href}>
                    <div className={`glass-panel p-5 rounded-xl border ${item.accent} transition-colors cursor-pointer group flex items-center justify-between`}>
                      <div>
                        <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">{item.label}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.sub}</p>
                      </div>
                      <Gamepad2 className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary/60 transition-colors flex-shrink-0" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How To Use */}
        <section className="py-24 bg-black/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How to Use</h2>
              <p className="text-muted-foreground">Up and running in seconds — no setup required.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {HOW_TO.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-xl mb-5 shadow-[0_0_20px_rgba(153,51,255,0.25)]">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <button
                onClick={scrollToTester}
                data-testid="button-scroll-to-tester"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-base shadow-[0_0_20px_rgba(153,51,255,0.5)] hover:shadow-[0_0_35px_rgba(153,51,255,0.8)] hover:scale-105 transition-all"
              >
                <Gamepad2 className="w-5 h-5" />
                Test Your Controller Now
              </button>
            </div>
          </div>
        </section>

        {/* AdSense Slot */}
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        {/* FAQ */}
        <section className="py-24">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>

            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: FAQ.map((f) => ({
                    "@type": "Question",
                    name: f.q,
                    acceptedAnswer: { "@type": "Answer", text: f.a },
                  })),
                }),
              }}
            />

            <div className="space-y-4">
              {FAQ.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="glass-panel p-6 rounded-xl"
                >
                  <h3 className="font-bold text-base mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,51,255,0.12),transparent)]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to test your gear?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
              No downloads, no installations. Plug in and start testing in seconds.
            </p>
            <button
              onClick={scrollToTester}
              data-testid="button-cta-scroll"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-lg font-bold text-base hover:scale-105 transition-all"
            >
              Start Testing Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
