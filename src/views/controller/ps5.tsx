import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { title: "Adaptive Trigger Pressure", desc: "Monitor raw 0-100% actuation values for precise throttle and brake testing on your DualSense." },
  { title: "Haptic Feedback Status", desc: "Test the DualSense vibration actuator directly in the browser to ensure rumble works correctly." },
  { title: "DualSense Bluetooth", desc: "Seamless testing whether you are connected via a USB-C cable or wireless Bluetooth." },
  { title: "L3/R3 Stick Click", desc: "Verify that the analog stick clicks are registering correctly without ghost inputs." }
];

const TROUBLESHOOTING = [
  { title: "Not detected?", desc: "Make sure you press the PS button after connecting via Bluetooth to wake up the controller." },
  { title: "Triggers not responding?", desc: "Check if the browser has permission to access your gamepad inputs. Press any button to initialize." },
  { title: "Stick drift?", desc: "If the stick visualizer moves without input, your DualSense may have hardware drift." }
];

const FAQ = [
  { q: "Can I test my PS5 controller on a PC?", a: "Yes, you can test your PS5 DualSense controller on any PC using this browser-based tool. Connect via USB-C or Bluetooth." },
  { q: "How do I connect my PS5 controller?", a: "Plug it in using a USB-C cable, or hold the PS button and Create button to enter Bluetooth pairing mode and connect it in your OS settings." },
  { q: "Does this test adaptive triggers?", a: "It tests the raw analog input of the triggers. Full adaptive resistance relies on specific game support, but you can see the pressure values here." },
  { q: "Do I need to install drivers?", a: "No drivers or software are required. The tool uses the standard HTML5 Gamepad API built into your browser." }
];

const OTHER_CONTROLLERS = [
  { name: "PS4 DualShock 4", path: "/ps4-controller-test" },
  { name: "Xbox Controller", path: "/xbox-controller-test" },
  { name: "Switch Pro Controller", path: "/switch-pro-controller-test" },
  { name: "Generic USB", path: "/generic-usb-controller-test" }
];

export default function PS5Page() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="PS5 DualSense Controller Test Online | Gamepad Tester"
        description="Test your PS5 DualSense controller online for free. Check buttons, adaptive triggers, analog sticks, and haptic feedback instantly."
      />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(59,130,246,0.15),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                  <Gamepad2 className="w-8 h-8 text-blue-500" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                PS5 DualSense Controller Test
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Instantly check buttons, analog sticks, and triggers on your PlayStation 5 controller.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Live Tester */}
        <section id="tester" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-blue-400">
                Connect your DualSense via USB-C or Bluetooth and press any button.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <GamepadTester />
            </motion.div>
          </div>
        </section>

        {/* AdSense Slot */}
        <div className="container mx-auto px-4 py-8">
          <div className="w-full max-w-4xl mx-auto h-[90px] border-2 border-dashed border-white/10 rounded-lg flex items-center justify-center text-muted-foreground/30 text-xs font-mono">
            Advertisement Space (728×90)
          </div>
        </div>

        {/* Intro Content */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="prose prose-invert prose-blue max-w-none">
              <p>
                The PS5 DualSense Controller Test is a free online tool designed specifically to help you diagnose and verify the inputs of your PlayStation 5 gamepad. Whether you are experiencing stick drift, unresponsive buttons, or simply want to check if a second-hand controller is fully functional, this browser-based utility gives you real-time visual feedback on every single input.
              </p>
              <p>
                To get started, you can connect your DualSense controller to your PC, Mac, or mobile device using either a standard USB-C cable or a wireless Bluetooth connection. The tool uses the HTML5 Gamepad API, which means there are no sketchy drivers to install and no external software required. Just plug it in, press a button to wake it up, and watch the diagnostics come to life.
              </p>
              <p>
                Common issues like analog stick drift can be incredibly frustrating during competitive gameplay. By leaving the thumbsticks at their resting position and monitoring the crosshairs in our stick visualizer, you can easily identify hardware degradation before it ruins your match. It's also perfect for verifying the actuation curve of the L2 and R2 adaptive triggers.
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">DualSense Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 rounded-xl border-blue-500/10">
                  <h3 className="text-lg font-bold text-blue-400 mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Troubleshooting Your PS5 Controller</h2>
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

        {/* FAQ with Schema */}
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

        {/* Internal Links */}
        <section className="py-16 bg-black/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Test Other Controllers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {OTHER_CONTROLLERS.map((c, i) => (
                <Link key={i} href={c.path} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors border-white/5 hover:border-blue-500/30 group">
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-blue-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="text-blue-400 hover:underline text-sm font-medium">Return to Homepage</Link>
            </div>
          </div>
        </section>

        {/* AdSense Slot Bottom */}
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
