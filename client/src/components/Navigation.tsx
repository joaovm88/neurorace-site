import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import mascoteLogo from "@assets/Gemini_Generated_Image_a20m34a20m34a20m (1)_1762029850291.png";

export function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/premiacao", label: "Premiação" },
    { href: "/publique", label: "Publique sua Experiência" },
    { href: "/", label: "O Projeto" },
    { href: "/ranking", label: "Ranking" },
    { href: "/equipe", label: "Equipe" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="flex h-20 items-center justify-between px-4 md:px-12">
        <Link href="/">
          <div className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer" data-testid="link-home">
            <img src={mascoteLogo} alt="NeuroRace Mascote" className="w-10 h-10 md:w-12 md:h-12" />
            <span className="text-xl md:text-2xl font-bold">
              <span className="text-primary">NEURO</span>
              <span style={{color: 'hsl(45 100% 52%)'}}>RACE</span>
            </span>
          </div>
        </Link>

        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Button
              asChild
              className="bg-primary hover:opacity-90 text-primary-foreground font-bold"
              size="default"
            >
              <a
                href="https://www.fiap.com.br/next/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-vote-primary"
              >
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
