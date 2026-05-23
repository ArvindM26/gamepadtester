import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Gamepad2, Move, Activity, Crosshair, FileSliders as Sliders, ArrowRight, Shield } from "lucide-react";

const FEATURES = [
  { icon: Move, title: "Live Axis Visualization", desc: "Watch both analog stick axes move in real time as you tilt the joystick — X and Y values displayed with precision." },
  { icon: Crosshair, title: "Center-Point Accuracy", desc: "See exactly where the stick rests at neutral. Any offset from center at rest may indicate hardware wear." },
  { icon: Sliders, title: "Analog Sensitivity Range", desc: "Full 0–100% range is tracked for each axis, letting you identify whether the stick reaches its full extent." },
  { icon: Activity, title: "Deadzone Awareness", desc: "Observe the zone around center where movement is not registered — useful for understanding input lag in fast-paced games." },
  { icon: Gamepad2, title: "Both Sticks Simultaneously", desc: "Test left and right joysticks at the same time side by side — no switching needed." },
  { icon: Shield, title: "No Data Collected", desc: "All joystick readings are processed locally in your browser. Nothing is ever sent to a server." },
];

const FAQS = [
  { q: "How do I test my joystick online?", a: "Connect your controller via USB or Bluetooth, then press any button to wake it up. The tester will immediately start showing live joystick movement in the stick visualizers — move each stick to see the dot track your input." },
  { q: "Why is my joystick not responding in the tester?", a: "First, ensure your controller is connected and you have pressed a button to activate it. Some controllers require a button press before the browser registers them. Try a different USB port or unpair and re-pair Bluetooth if the issue persists." },
  { q: "How do I calibrate a joystick?", a: "Browser-based testing cannot perform hardware calibration. For Windows, use the built-in Game Controller calibration tool (search 'Set up USB game controllers' in Start). For PlayStation controllers, the DualSense and DualShock have a reset button on the back." },
  { q: "What is a joystick deadzone?", a: "A deadzone is the small area around the center of an analog stick where movement is ignored by the game or driver. It prevents tiny unintentional inputs from affecting gameplay. Our tester shows raw hardware values so you can observe the deadzone behavior." },
  { q: "Can I test a flight joystick or HOTAS?", a: "Yes. Any HID-compatible joystick or HOTAS system that is recognized by your operating system will work with the browser Gamepad API. Axes and buttons will appear in the tester automatically." },
];

const TIPS = [
  { title: "Move the stick slowly from edge to edge", desc: "This helps verify the full travel range is being registered and no axis is clipping before reaching maximum." },
  { title: "Release both sticks and watch the visualizer", desc: "If either dot drifts away from center without input, your joystick may have hardware drift or calibration issues." },
  { title: "Try rotating the stick in a full circle", desc: "This reveals any axis imbalance — a perfect circle indicates healthy hardware, while oval shapes can suggest mechanical wear." },
  { title: "Check L3 and R3 click registration", desc: "Press down on each stick to verify the L3 and R3 button inputs are registering cleanly without false triggers." },
];

const RELATED = [
  { name: "Stick Drift Test", href: "/stick-drift-test" },
  { name: "PS5 DualSense Controller Test", href: "/ps5-controller-test" },
  { name: "Xbox Controller Test", href: "/xbox-controller-test" },
  { name: "Switch Pro Controller Test", href: "/switch-pro-controller-test" },
];

export default function JoystickTest() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEOHead
        title="Joystick Test Online — Live Analog Stick Tester | Gamepad Tester"
        description="Test your joystick or analog sticks online for free. Live axis visualization, deadzone detection, and sensitivity testing directly in your browser. No download needed."
      />
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(153,51,255,0.18),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <div className="w-16 h-16 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-6">
                <Move className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
                Joystick Test <span className="text-primary neon-text-primary">Online</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                Test analog stick movement, sensitivity, and deadzone behavior in real time — no install required.
              </p>
              <p className="text-sm text-primary/80 font-mono">
                Connect your controller and move the joysticks to begin.
              </p>
            </motion.div>
          </div>
        </section>

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
            <h2 className="text-2xl font-bold mb-6">Testing Your Joystick Online</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
              <p>Our joystick tester uses the browser's built-in Gamepad API to read raw analog input from your controller in real time. Whether you're testing a PS5 DualSense, Xbox Series controller, Nintendo Switch Pro Controller, or a PC flight joystick, the tester works universally with any HID-compatible device.</p>
              <p>The stick visualizers display live X and Y axis values for both analog sticks simultaneously. Watch the dot inside each circle move as you tilt the joystick — a healthy stick returns precisely to center when released, while hardware degradation causes the dot to drift or stop short of the edge.</p>
              <p>Analog sensitivity testing is especially useful for gamers who use custom sensitivity curves. You can verify that the stick reaches its full travel range (maximum axis value of 1.0 in each direction) and that the analog gradients are smooth from center to edge without sudden jumps.</p>
              <p>Deadzone information is visible by observing the area near center where small stick movements produce no visible change in the dot position. Different controllers implement deadzones differently — some at the hardware level, others at the driver level. Our tester shows the raw hardware values before any software deadzone is applied.</p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold mb-10 text-center">Joystick Testing Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.06 }} className="glass-panel p-6 rounded-xl hover:border-primary/40 transition-colors">
                  <f.icon className="w-8 h-8 text-primary mb-3" />
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
            <h2 className="text-2xl font-bold mb-8">Joystick Testing Tips</h2>
            <div className="space-y-4">
              {TIPS.map((t, i) => (
                <div key={i} className="glass-panel p-5 rounded-xl flex gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xs">{i + 1}</span>
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
                  <div className="glass-panel p-5 rounded-xl flex items-center justify-between hover:border-primary/40 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <Gamepad2 className="w-5 h-5 text-muted-foreground" />
                      <span className="font-medium text-sm">{c.name}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
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
