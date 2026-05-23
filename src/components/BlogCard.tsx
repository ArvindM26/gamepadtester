import { Link } from "wouter";
import { Clock, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  className?: string;
}

export function BlogCard({ title, excerpt, slug, category, date, readTime, className }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className={cn("glass-panel group rounded-xl overflow-hidden flex flex-col h-full hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(153,51,255,0.15)] cursor-pointer", className)}>
        {/* Image Placeholder */}
        <div className="h-48 w-full bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/5 transition-opacity duration-300" />
        </div>
        
        <div className="p-6 flex flex-col flex-1">
          <div className="mb-4">
            <span className="text-xs font-bold text-accent uppercase tracking-wider bg-accent/10 px-2 py-1 rounded-md">
              {category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          
          <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
            {excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground font-mono mt-auto">
            <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
