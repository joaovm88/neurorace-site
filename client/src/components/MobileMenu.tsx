import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface MobileMenuProps {
  navItems: Array<{ href: string; label: string }>;
}

export function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        data-testid="button-mobile-menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-20 left-0 right-0 bg-card border-b shadow-lg z-40">
          <ul className="flex flex-col p-4 space-y-3">
            <li>
              <Button
                asChild
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground font-bold shadow-lg"
                size="lg"
              >
                <a
                  href="https://www.fiap.com.br/next/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  data-testid="mobile-link-vote-primary"
                >
                  ⭐ VOTE NO NEXT!
                </a>
              </Button>
            </li>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-md text-sm font-medium transition-colors cursor-pointer ${
                      location === item.href
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted"
                    }`}
                    data-testid={`mobile-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.label}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
