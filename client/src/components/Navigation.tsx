import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { Star } from "lucide-react";
import mascoteLogo from "@assets/Imagem do WhatsApp de 2025-11-02 à(s) 17.16.27_6e9798b3_1762114903400.jpg";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/ranking", label: "Ranking" },
    { href: "/equipe", label: "Equipe" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-20 items-center justify-between px-4 md:px-12">
        <Link href="/">
          <div className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer" data-testid="link-home">
            <img src={mascoteLogo} alt="NeuroRace Mascote" className="w-10 h-10 md:w-12 md:h-12" style={{mixBlendMode: 'screen'}} />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-primary">NEURO</span>
              <span style={{color: 'hsl(45 100% 52%)'}}>RACE</span>
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-4 lg:gap-6">
          <li>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-base"
              size="lg"
            >
              <a
                href="https://www.fiap.com.br/next/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-vote-primary"
                className="flex items-center gap-2"
              >
                <Star className="w-4 h-4 fill-current" />
                VOTE NO NEXT!
              </a>
            </Button>
          </li>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <span
                  className={`text-sm font-medium transition-colors hover:text-foreground cursor-pointer ${
                    location === item.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu navItems={navItems} />
      </div>
    </nav>
  );
}
