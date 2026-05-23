import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Gamepad2, TriangleAlert as AlertTriangle, Crosshair, Activity, CircleDot, ArrowRight, Wrench } from "lucide-react";

const FEATURES = [
  { icon: Crosshair, title: "Center-Point Monitor", desc: "The stick dot should sit exactly at center when released. Any deviation without input is the telltale sign of stick drift." },
  { icon: CircleDot, title: "Deadzone Visualization", desc: "Watch the raw hardware axis values to determine if unwanted movement falls within the normal deadzone or beyond it." },
  { icon: AlertTriangle, title: "Drift Warning Indicators", desc: "Both stick visualizers show real-time position — if either moves without you touching it, drift is present." },
  { icon: Activity, title: "Live Axis Values", desc: "Numeric X and Y axis values are shown in real time. Values consistently above 0.05 at rest are a strong drift indicator." },
  { icon: Wrench, title: "Troubleshooting Guidance", desc: "Understand whether your drift is mechanical (hardware) or driver-level to decide on the right repair approach." },
  { icon: Gamepad2, title: "Works with All Controllers", desc: "Detect drift on PS5, PS4, Xbox, Switch Pro, and any generic USB or Bluetooth gamepad in seconds." },
];

const FAQS = [
  { q: "What is stick drift?", a: "Stick drift is when an analog stick on a game controller registers movement or input without the player physically moving it. This causes characters or cameras in games to move on their own and is typically caused by worn potentiometers inside the joystick mechanism." },
  { q: "How do I test for controller stick drift?", a: "Connect your controller, press any button to activate it, then release both analog sticks completely. Watch the stick visualizer dots on this page — if either dot moves away from the exact center without you touching the stick, drift is confirmed." },
  { q: "Can stick drift be fixed?", a: "Mild drift can sometimes be resolved by cleaning the joystick mechanism with compressed air or contact cleaner. More severe cases require replacing the joystick module entirely. Some platforms offer drift repair programs — Sony has offered free DualShock 4 drift repairs in some regions." },
  { q: "Why does my analog stick move by itself?", a: "Self-movement without input is almost always stick drift. It is caused by the potentiometer (the resistive sensor inside the stick) wearing down over time and providing inaccurate readings. High-use controllers develop this issue faster, especially in games requiring heavy stick movement." },
  { q: "Is stick drift covered by warranty?", a: "Manufacturer warranties vary. Nintendo Switch Joy-Con drift has been the subject of widespread complaints and free repair programs. PS5 DualSense and Xbox controllers typically have a 1-year limited hardware warranty. Check your manufacturer's support page for current repair options." },
];

const TIPS = [
  { title: "Release both sticks completely and wait 5 seconds", desc: "Drift is most visible when the sticks are at rest. Watch the visualizer dots for any movement away from the exact center point." },
  { title: "Try gently pressing the stick base without tilting", desc: "Sometimes pressing down on the stick housing while watching the visualizer reveals drift caused by internal mechanical looseness." },
  { title: "Rotate the stick in slow circles then release", desc: "After a full circular motion, release the stick. Healthy hardware returns instantly to center — drifting hardware may linger off-axis." },
  { title: "Compare both sticks side by side", desc: "If only one stick shows drift, the issue is almost certainly hardware-specific to that stick's potentiometer rather than a driver or software problem." },
  { title: "Test on multiple browsers to rule out software", desc: "If drift appears in all browsers, it confirms the issue is hardware. If it only appears in one browser, the issue may be driver or calibration related." },
];

const RELATED = [
  { name: "Joystick Test", href: "/joystick-test" },
  { name: "PS5 DualSense Controller Test", href: "/ps5-controller-test" },
  { name: "PS4 DualShock 4 Test", href: "/ps4-controller-test" },
  { name: "Switch Pro Controller Test", href: "/switch-pro-controller-test" },
];

export default function StickDriftTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Stick Drift Test Online — Detect Controller Drift Instantly | NexusGamepad"
        description="Test your controller for stick drift online for free. Release both analog sticks and watch for unwanted movement in real time. Instant drift detection with no download needed."
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(239,68,68,0.12),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
                Stick Drift Test <span className="text-red-400">Online</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                Detect unwanted analog stick movement in real time. Release both sticks and watch for drift.
              </p>
              <p className="text-sm text-red-400/80 font-mono">
                Connect your controller, press any button, then release both sticks completely.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Drift Detection Callout */}
        <div className="container mx-auto px-4 mb-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="glass-panel border border-red-500/20 bg-red-500/5 rounded-xl p-4 flex items-start gap-3 max-w-5xl mx-auto">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-red-300 mb-1">How to detect drift</p>
              <p className="text-xs text-muted-foreground">Connect your controller and press any button to activate it. Then <strong className="text-foreground">let go of both analog sticks completely</strong>. If either dot in the stick visualizer moves away from the center point on its own — that is stick drift.</p>
            </div>
          </motion.div>
        </div>

        {/* Live Tester */}
        <section id="tester" className="container mx-auto px-4 pb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <GamepadTester />
          </motion.div>
        </section>

        {/* AdSense */}
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        {/* Intro Content */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-6">What Is Stick Drift and How to Detect It</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>Stick drift is one of the most common hardware failures in modern game controllers. It occurs when the potentiometers inside the analog stick mechanism wear down, causing the stick to report non-zero axis values even when physically at rest. The result: in-game characters or cameras that move on their own, ruining gameplay.</p>
              <p>Our browser-based stick drift test gives you an immediate, accurate reading of your controller's analog stick health. The tester reads raw hardware values directly from the Gamepad API — before any game or software applies its own deadzone correction. This makes it ideal for identifying drift that games might otherwise suppress.</p>
              <p>To use the tester: connect your controller, press any button to activate it, then gently release both analog sticks and keep your hands away. Watch the circular stick visualizers — a healthy stick returns to the exact center. If you see the dot sitting off-center or slowly drifting in any direction, drift is confirmed.</p>
              <p>Stick drift affects all controller brands. PlayStation DualShock 4 and DualSense controllers are frequently reported to develop drift. Nintendo Joy-Cons have faced widespread drift complaints. Xbox controllers are generally considered more durable but are not immune. Early identification helps you decide whether to clean, repair, or replace the controller before drift worsens.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-10 text-center">Drift Detection Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }} className="glass-panel p-6 rounded-xl hover:border-red-500/30 transition-colors">
                  <f.icon className="w-8 h-8 text-red-400 mb-3" />
                  <h3 className="font-bold mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Stick Drift Detection Guide</h2>
            <div className="space-y-4">
              {TIPS.map((t, i) => (
                <div key={i} className="glass-panel p-5 rounded-xl flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-sm mb-1">{t.title}</p>
                    <p className="text-muted-foreground text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }} />
            <div className="space-y-4">
              {FAQS.map((f, i) => (
                <div key={i} className="glass-panel p-6 rounded-xl">
                  <h3 className="font-bold text-sm mb-2">{f.q}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AdSense */}
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        {/* Related Pages */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Related Tests</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RELATED.map((c, i) => (
                <Link key={i} href={c.href}>
                  <div className="glass-panel p-5 rounded-xl flex items-center justify-between hover:border-red-500/30 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-sm">{c.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
