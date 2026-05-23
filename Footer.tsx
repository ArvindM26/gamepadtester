import { Link } from 'wouter';
import { Gamepad2, Battery as Twitter, Route as Youtube, GitFork as Github } from 'lucide-react';
import { SiDiscord, SiReddit } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4">
              <Gamepad2 className="w-8 h-8" />
              <span className="font-sans font-bold text-xl tracking-tight text-foreground neon-text-primary">
                Gamepad Tester
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The premium, professional-grade online controller tester. Verify every input with absolute precision.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><SiDiscord className="w-5 h-5" /></a>
              <a href="#" className="hover:text-primary transition-colors"><SiReddit className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Tools</h3>
            <ul className="space-y-2">
              <li><Link href="/tester" className="text-muted-foreground hover:text-primary transition-colors text-sm">Gamepad Tester</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors text-sm">Disclaimer</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gamepad Tester. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Trademarks belong to their respective owners. Not affiliated with Sony, Microsoft, or Nintendo.
          </p>
        </div>
      </div>
    </footer>
  );
}
