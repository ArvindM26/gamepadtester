import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { title: "Nintendo HID Mode", desc: "Test the raw HID input data provided by the Switch Pro Controller to your PC." },
  { title: "Analog Stick Range", desc: "Verify the circular gate range and check for any stick drift issues on the thumbsticks." },
  { title: "Home/Capture Buttons", desc: "Ensure the system buttons are being registered correctly by your OS." },
  { title: "USB-C & Bluetooth", desc: "Confirm low-latency inputs whether you are using a wired or wireless connection." }
];

const TROUBLESHOOTING = [
  { title: "Buttons mapped incorrectly?", desc: "Nintendo uses a different layout (A/B and X/Y swapped) compared to the standard XInput mapping." },
  { title: "Controller not connecting?", desc: "Hold the sync button on top of the controller until the LEDs flash, then pair via Bluetooth." },
  { title: "Gyroscope not working?", desc: "The standard browser Gamepad API does not currently expose gyroscope/motion data." }
];

const FAQ = [
  { q: "Can I test my Switch Pro controller on PC?", a: "Yes, you can easily connect and test the Nintendo Switch Pro controller via Bluetooth or USB-C." },
  { q: "Why are A/B and X/Y swapped?", a: "The Gamepad API defaults to an Xbox-style layout. Nintendo physically swaps these buttons, so they may appear transposed in the tester." },
  { q: "Does this tool test motion controls (gyro)?", a: "No, browser standards for the Gamepad API do not natively support reading gyroscope or accelerometer data." },
  { q: "Can I test Joy-Cons here?", a: "Joy-Cons can be tested, but they usually register as two separate controllers and lack standard mappings unless combined via third-party software." }
];

const OTHER_CONTROLLERS = [
  { name: "PS5 DualSense", path: "/ps5-controller-test" },
  { name: "PS4 DualShock 4", path: "/ps4-controller-test" },
  { name: "Xbox Controller", path: "/xbox-controller-test" },
  { name: "Generic USB", path: "/generic-usb-controller-test" }
];

export default function SwitchProPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Nintendo Switch Pro Controller Test Online | Gamepad Tester"
        description="Test your Nintendo Switch Pro Controller online. Verify all buttons, analog sticks, and triggers in your browser instantly."
      />
      <Navbar />

      <main>
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(239,68,68,0.15),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <Gamepad2 className="w-8 h-8 text-red-500" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                Switch Pro Controller Test
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Accurate, browser-based diagnostics for your Nintendo gamepad.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="tester" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-red-400">
                Connect your Pro Controller via USB-C or Bluetooth and press any button.
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
            <div className="prose prose-invert prose-red max-w-none">
              <p>
                The Nintendo Switch Pro Controller Test is an intuitive online utility designed to help you verify the structural integrity and functionality of your Nintendo gamepad. Because the Pro Controller uses standard Bluetooth protocol, it's very easy to pair it with a PC, Mac, or mobile device to run thorough diagnostics.
              </p>
              <p>
                To get started, simply pair the controller to your device. Once connected, pressing any button will allow our testing interface to capture the raw input data. You can observe the exact behavior of the analog sticks, shoulder buttons, and digital triggers. Note that unlike Xbox or PlayStation controllers, the Switch Pro triggers are digital, not analog.
              </p>
              <p>
                Stick drift is a notoriously common issue with many modern controllers, including the Pro Controller. Utilizing the stick visualizer component of this page will help you identify minute phantom inputs or asymmetrical dead zones, allowing you to determine if the hardware needs cleaning or replacement.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Switch Pro Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 rounded-xl border-red-500/10">
                  <h3 className="text-lg font-bold text-red-400 mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Troubleshooting Your Pro Controller</h2>
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
                <Link key={i} href={c.path} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors border-white/5 hover:border-red-500/30 group">
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-red-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="text-red-400 hover:underline text-sm font-medium">Return to Homepage</Link>
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
