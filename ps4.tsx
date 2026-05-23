import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { title: "DualShock 4 Detection", desc: "Instantly recognize and test all inputs on your original PlayStation 4 controller." },
  { title: "Touchpad Button", desc: "Verify that the clickable touchpad mechanism registers correctly as a standard button." },
  { title: "Analog Stick Drift", desc: "Check your DualShock 4 thumbsticks for wear and tear, dead zones, and drift." },
  { title: "Bluetooth & USB", desc: "Full testing functionality whether you are hardwired via micro-USB or paired wirelessly." }
];

const TROUBLESHOOTING = [
  { title: "Not working wirelessly?", desc: "Ensure your PC has Bluetooth enabled, hold Share + PS button to pair, then test again." },
  { title: "Controller ignored?", desc: "Press the PS button or any face button to initialize the gamepad in your browser." },
  { title: "Light bar not lighting?", desc: "The light bar status depends on your OS and connection method, but inputs will still register." }
];

const FAQ = [
  { q: "Can I use my PS4 controller on PC to play games?", a: "Yes, many modern PC games support the DualShock 4 natively, while others may require software like DS4Windows." },
  { q: "How do I fix stick drift on my PS4 controller?", a: "Cleaning the analog stick modules with compressed air or isopropyl alcohol can help, but severe drift may require hardware replacement." },
  { q: "Is the touchpad fully functional?", a: "This tool tests the click function of the touchpad. Complex swipe gestures are generally not supported natively by the browser Gamepad API." },
  { q: "Why is the latency high?", a: "Bluetooth interference can cause latency. Try using a micro-USB cable for the lowest possible latency." }
];

const OTHER_CONTROLLERS = [
  { name: "PS5 DualSense", path: "/ps5-controller-test" },
  { name: "Xbox Controller", path: "/xbox-controller-test" },
  { name: "Switch Pro Controller", path: "/switch-pro-controller-test" },
  { name: "Generic USB", path: "/generic-usb-controller-test" }
];

export default function PS4Page() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="PS4 DualShock 4 Controller Test Online | Gamepad Tester"
        description="Test your PS4 DualShock 4 controller online. Verify buttons, analog sticks, triggers, and touchpad button in real time."
      />
      <Navbar />

      <main>
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(99,102,241,0.15),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                  <Gamepad2 className="w-8 h-8 text-indigo-500" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                PS4 DualShock 4 Controller Test
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Check the health of your PlayStation 4 gamepad instantly.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="tester" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-indigo-400">
                Connect your DualShock 4 via micro-USB or Bluetooth and press any button.
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
            <div className="prose prose-invert prose-indigo max-w-none">
              <p>
                The PS4 DualShock 4 Controller Test allows you to evaluate the performance and functionality of your PlayStation 4 gamepad without installing additional software. By reading the direct input data provided by your browser, this diagnostic tool can identify hardware faults, dead zones, and worn-out buttons.
              </p>
              <p>
                To begin testing, connect your controller to your PC or Mac using a micro-USB cable or establish a Bluetooth pairing. Once connected, interact with the analog sticks, shoulder buttons, and D-pad. The visualizer will reflect your actions instantly. This is extremely helpful for verifying if a second-hand controller is fully functional before you commit to using it in a competitive environment.
              </p>
              <p>
                One of the most common issues with aging DualShock 4 controllers is analog stick drift. By observing the stick visualizer on this page, you can see if the crosshair registers movement when the analog sticks are untouched. Additionally, you can verify the sensitivity and range of the L2 and R2 analog triggers.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">DualShock 4 Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 rounded-xl border-indigo-500/10">
                  <h3 className="text-lg font-bold text-indigo-400 mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Troubleshooting Your PS4 Controller</h2>
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
                <Link key={i} href={c.path} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors border-white/5 hover:border-indigo-500/30 group">
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-indigo-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="text-indigo-400 hover:underline text-sm font-medium">Return to Homepage</Link>
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
