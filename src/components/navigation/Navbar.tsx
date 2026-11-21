import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, Moon, Sun, Waves } from 'lucide-react';
import { PROFILE } from '@/src/data/profile';
import { useTheme } from '@/src/components/theme-provider';
import { Button } from '@/src/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/src/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/src/components/ui/tooltip';
import { EASE_SETTLE } from '@/src/lib/motion';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
  showBackground: boolean;
  onToggleBackground: () => void;
}

export function Navbar({ activeSection, showBackground, onToggleBackground }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 h-16 w-full border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="font-display text-base font-bold tracking-tight text-foreground whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm"
        >
          {PROFILE.brandWordmark}
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 lg:gap-7">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-sm ${
                  isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    transition={{ duration: 0.2, ease: EASE_SETTLE }}
                    className="absolute inset-x-0 -bottom-[21px] h-[2px] bg-accent-brand"
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={onToggleBackground}
                aria-label="ASCII background"
                aria-pressed={showBackground}
                className="size-11 rounded-lg aria-pressed:text-accent-brand"
              >
                <Waves className="h-4 w-4" aria-hidden="true" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{showBackground ? 'Hide ASCII background' : 'Show ASCII background'}</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="size-11 rounded-lg"
              >
                {theme === 'dark' ? (
                  <Sun className="h-4 w-4 text-foreground" />
                ) : (
                  <Moon className="h-4 w-4 text-foreground" />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              {theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            </TooltipContent>
          </Tooltip>

          <div className="lg:hidden">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  aria-label="Open navigation menu"
                  className="size-11 rounded-lg"
                >
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent aria-describedby={undefined}>
                <SheetTitle className="font-display text-lg">{PROFILE.brandWordmark}</SheetTitle>
                <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-1">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className={`flex min-h-[44px] items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-secondary text-foreground font-semibold'
                            : 'text-muted-foreground hover:bg-secondary/60 hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </a>
                    );
                  })}
                </nav>
                <div className="mt-auto pt-6 border-t border-border">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={toggleTheme}
                    className="w-full justify-start gap-2.5"
                  >
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
