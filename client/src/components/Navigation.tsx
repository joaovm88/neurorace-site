import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import mascoteLogo from "@assets/Gemini_Generated_Image_a20m34a20m34a20m (1)_1762029850291.png";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "O Projeto" },
    { href: "/ranking", label: "Ranking" },
    { href: "/equipe", label: "Equipe" },
    { href: "/dashboard", label: "Meu Dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-20 items-center justify-between px-4 md:px-12">
        <Link href="/">
          <div className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer" data-testid="link-home">
            <img src={mascoteLogo} alt="NeuroRace Mascote" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-primary">NEURO</span>
              <span className="text-accent">RACE</span>
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <a
                  className={`text-sm font-medium transition-colors hover:text-foreground ${
                    location === item.href ? "text-foreground" : "text-muted-foreground"
                  }`}
                  data-testid={`link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {item.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <Button
              asChild
              className="bg-primary hover:opacity-90 text-primary-foreground"
              size="sm"
            >
              <a
                href="https://www.fiap.com.br/next/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-vote"
              >
                VOTE NO NEXT!
              </a>
            </Button>
          </li>
        </ul>

        <MobileMenu navItems={navItems} />
      </div>
    </nav>
  );
}
