import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { title: "Universal HID", desc: "Supports testing for almost any generic USB or Bluetooth controller using standard HID protocols." },
  { title: "All 32 Buttons", desc: "Capable of monitoring and displaying states for up to 32 distinct buttons on custom hardware." },
  { title: "Raw Axis Data", desc: "Provides numerical outputs for flight sticks, HOTAS setups, and non-standard analog interfaces." },
  { title: "Debug Mode", desc: "Toggle debug mode to view the raw JSON telemetry for obscure button mappings." }
];

const TROUBLESHOOTING = [
  { title: "Layout seems weird?", desc: "Generic controllers often lack 'Standard' mapping in browsers, meaning buttons may appear in unexpected spots." },
  { title: "Not detected at all?", desc: "Ensure your OS recognizes the device first. Some old controllers require legacy DirectInput drivers." },
  { title: "Axes acting as buttons?", desc: "Some cheap adapters map analog sticks to digital DPAD outputs. Check the raw debug data." }
];

const FAQ = [
  { q: "Does this work with arcade sticks and racing wheels?", a: "Yes. As long as the device registers as a USB game controller in your OS, the browser can likely read its inputs." },
  { q: "Why are my buttons numbered instead of lettered?", a: "Generic controllers don't always identify their layout (like Xbox or PlayStation). In these cases, the API falls back to raw button index numbers." },
  { q: "Can I test retro USB adapters?", a: "Yes, USB adapters for N64, GameCube, SNES, and other retro controllers usually work perfectly with this tool." },
  { q: "How do I fix mapped button issues?", a: "You cannot change the mapping through this website; you must reconfigure the controller via third-party software like Steam Input or X360ce." }
];

const OTHER_CONTROLLERS = [
  { name: "PS5 DualSense", path: "/ps5-controller-test" },
  { name: "PS4 DualShock 4", path: "/ps4-controller-test" },
  { name: "Xbox Controller", path: "/xbox-controller-test" },
  { name: "Switch Pro Controller", path: "/switch-pro-controller-test" }
];

export default function GenericUSBPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="USB Gamepad Tester Online | NexusGamepad"
        description="Test any generic USB or Bluetooth gamepad online. Check all buttons, axes, and analog inputs using the browser Gamepad API."
      />
      <Navbar />

      <main>
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(148,163,184,0.15),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-slate-500/10 flex items-center justify-center border border-slate-500/20">
                  <Gamepad2 className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                Generic USB Controller Test
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Test third-party, generic, and unbranded PC gamepads instantly.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="tester" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-slate-400">
                Plug in your USB or Bluetooth gamepad and press any button to begin.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <GamepadTester />
            </motion.div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="w-full max-w-4xl mx-auto h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-invert prose-slate max-w-none">
              <p>
                The Generic USB Controller Test is built to handle the wide variety of third-party gamepads, arcade sticks, flight yokes, and retro adapters available on the market. Unlike first-party controllers that have established standard mappings, generic controllers can report their inputs in wildly different configurations.
              </p>
              <p>
                By connecting your controller to your PC or mobile device, the browser's Gamepad API attempts to read the raw Human Interface Device (HID) data. Pressing a button initializes the connection. If the layout appears jumbled or buttons activate the wrong visual indicators, it simply means your controller lacks a "Standard" mapping profile.
              </p>
              <p>
                To fully understand what your generic hardware is transmitting, we highly recommend utilizing the "Debug Data" toggle in the testing interface. This provides a raw JSON feed of every axis and button index being polled, which is invaluable for configuring custom emulation software, emulator mappings, or joy-to-key applications.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Universal Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 rounded-xl border-slate-500/10">
                  <h3 className="text-lg font-bold text-slate-400 mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Troubleshooting Your Generic Gamepad</h2>
            <ul className="space-y-4">
              {TROUBLESHOOTING.map((t, i) => (
                <li key={i} className="flex flex-col md:flex-row gap-2">
                  <span className="font-bold text-foreground min-w-[200px]">{t.title}</span>
                  <span className="text-muted-foreground">{t.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-center mb-10">Frequently Asked Questions</h2>
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
                <div key={i} className="glass-panel p-6 rounded-xl border-white/5">
                  <h3 className="font-bold text-base mb-2">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Test Other Controllers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OTHER_CONTROLLERS.map((c, i) => (
                <Link key={i} href={c.path} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors border-white/5 hover:border-slate-500/30 group">
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-slate-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="text-slate-400 hover:underline text-sm font-medium">Return to Homepage</Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-8">
          <div className="w-full max-w-4xl mx-auto h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
