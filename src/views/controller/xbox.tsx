import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { GamepadTester } from "@/components/tester/GamepadTester";
import { Gamepad2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const FEATURES = [
  { title: "Xbox Wireless Protocol", desc: "Test the responsiveness of your controller when using the Xbox Wireless Adapter for Windows." },
  { title: "Bumper/Trigger Testing", desc: "Ensure your LB/RB bumpers actuate cleanly and your LT/RT triggers offer a full range of motion." },
  { title: "Elite Paddle Mapping", desc: "Check if your Elite controller paddles are registering as distinct inputs or mirrored face buttons." },
  { title: "Guide Button", desc: "Verify functionality of the Xbox Guide button (note: sometimes intercepted by Game Bar or Steam)." }
];

const TROUBLESHOOTING = [
  { title: "Adapter not detected?", desc: "If using the Xbox Wireless Adapter, try pairing again or test with a USB cable first." },
  { title: "Guide button opening Game Bar?", desc: "Windows often reserves the Guide button. You may need to disable Game Bar to see the raw input." },
  { title: "Inputs sticking?", desc: "Check for debris around the analog sticks and test the dead zones thoroughly." }
];

const FAQ = [
  { q: "Which Xbox controllers are supported?", a: "This tool supports Xbox 360, Xbox One, Xbox Series X/S, and Xbox Elite controllers." },
  { q: "Does the vibration test work on Xbox controllers?", a: "Yes, standard rumble testing works perfectly via the Gamepad API on supported browsers." },
  { q: "Can I test my Xbox Elite paddles?", a: "If the paddles are mapped to standard buttons, they will light up those inputs. If mapped independently, support depends on your driver configuration." },
  { q: "Why is the Xbox button not showing up?", a: "Windows Game Bar or Steam often intercept the Xbox Guide button before the browser can register it." }
];

const OTHER_CONTROLLERS = [
  { name: "PS5 DualSense", path: "/ps5-controller-test" },
  { name: "PS4 DualShock 4", path: "/ps4-controller-test" },
  { name: "Switch Pro Controller", path: "/switch-pro-controller-test" },
  { name: "Generic USB", path: "/generic-usb-controller-test" }
];

export default function XboxPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Xbox Controller Test Online | Gamepad Tester"
        description="Test your Xbox Series X/S, Xbox One, or Elite controller online. Check bumpers, triggers, analog sticks, and the Guide button."
      />
      <Navbar />

      <main>
        <section className="relative pt-16 pb-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,197,94,0.15),transparent)] pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                  <Gamepad2 className="w-8 h-8 text-green-500" />
                </div>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-3">
                Xbox Controller Test
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
                Precision diagnostics for Xbox Series X/S, Xbox One, and Elite gamepads.
              </p>
            </motion.div>
          </div>
        </section>

        <section id="tester" className="py-8">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-green-400">
                Connect your Xbox controller via USB or Wireless Adapter and press any button.
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
            <div className="prose prose-invert prose-green max-w-none">
              <p>
                The Xbox Controller Test is designed to provide comprehensive diagnostic information for Microsoft's line of gamepads. Whether you are using a wired Xbox 360 controller, a Bluetooth-enabled Xbox One pad, or the latest Xbox Series X/S hardware, this tool offers an accurate representation of your hardware's input data.
              </p>
              <p>
                To evaluate your controller, simply connect it to your PC. Windows users benefit from native integration via XInput, which guarantees highly accurate readings for the triggers, bumpers, and analog sticks. Once connected, press any face button or move a thumbstick to let the browser recognize the device and begin streaming telemetry data.
              </p>
              <p>
                This utility is particularly effective for identifying stick drift on aging controllers or ensuring that the analog triggers (LT and RT) are providing the full 0-100% actuation range required for racing games. If you use an Elite controller, you can also test the mapping configuration of your rear paddles.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-2xl font-bold text-center mb-10">Xbox Diagnostics</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {FEATURES.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 rounded-xl border-green-500/10">
                  <h3 className="text-lg font-bold text-green-400 mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-black/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold mb-8">Troubleshooting Your Xbox Controller</h2>
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
                <Link key={i} href={c.path} className="glass-panel p-6 rounded-xl flex items-center justify-between hover:bg-white/5 transition-colors border-white/5 hover:border-green-500/30 group">
                  <span className="font-medium text-sm">{c.name}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-green-400 transition-colors" />
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link href="/" className="text-green-400 hover:underline text-sm font-medium">Return to Homepage</Link>
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
