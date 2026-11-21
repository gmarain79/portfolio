import { ArrowUp } from 'lucide-react';
import { PROFILE } from '@/src/data/profile';
import { NAV_ITEMS } from '@/src/components/navigation/Navbar';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-secondary/20 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="space-y-1">
          <div className="font-display text-sm font-semibold text-foreground">
            {PROFILE.brandWordmark}
          </div>
          <p className="text-xs text-muted-foreground">
            {PROFILE.roleTitle} · Python, FastAPI, Django & ERPNext
          </p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 self-start sm:self-auto text-xs font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
