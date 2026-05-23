import { Link, useLocation } from 'wouter';
import { Gamepad2, Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const TEST_LINKS = [
  { href: '/joystick-test', label: 'Joystick Test' },
  { href: '/stick-drift-test', label: 'Stick Drift Test' },
  { href: '/ps5-controller-test', label: 'PS5 DualSense Test' },
  { href: '/ps4-controller-test', label: 'PS4 DualShock 4 Test' },
  { href: '/xbox-controller-test', label: 'Xbox Controller Test' },
  { href: '/switch-pro-controller-test', label: 'Switch Pro Test' },
  { href: '/generic-usb-controller-test', label: 'Generic USB Test' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [testsOpen, setTestsOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const handleTesterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    setTestsOpen(false);
    if (location === '/') {
      document.getElementById('tester')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setLocation('/');
      setTimeout(() => {
        document.getElementById('tester')?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full glass-panel border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
          <Gamepad2 className="w-8 h-8" />
          <span className="font-sans font-bold text-xl tracking-tight text-foreground neon-text-primary whitespace-nowrap">
            Gamepad Tester
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Tests Dropdown */}
          <div className="relative">
            <button
              onClick={() => setTestsOpen(!testsOpen)}
              onBlur={() => setTimeout(() => setTestsOpen(false), 150)}
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Tests <ChevronDown className={`w-4 h-4 transition-transform ${testsOpen ? 'rotate-180' : ''}`} />
            </button>
            {testsOpen && (
              <div className="absolute top-full right-0 mt-2 w-52 z-[200] glass-panel border border-white/10 rounded-xl overflow-hidden shadow-xl bg-background/95 backdrop-blur-md">
                {TEST_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setTestsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="#tester"
            onClick={handleTesterClick}
            data-testid="button-launch-tester"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium shadow-[0_0_15px_rgba(153,51,255,0.5)] hover:shadow-[0_0_25px_rgba(153,51,255,0.8)] transition-all cursor-pointer"
          >
            Test Controller
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          data-testid="button-mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 p-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-1 pb-1">
            <p className="px-2 py-1 text-xs font-bold text-muted-foreground/50 uppercase tracking-wider">Tests</p>
            {TEST_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-white/5"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="#tester"
              onClick={handleTesterClick}
              className="block w-full text-center px-4 py-2 bg-primary text-primary-foreground rounded-md font-medium shadow-[0_0_15px_rgba(153,51,255,0.5)] cursor-pointer"
            >
              Test Controller
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
