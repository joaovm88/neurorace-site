import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";

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
      <div className="flex h-16 items-center justify-between px-6 md:px-12">
        <Link href="/">
          <a className="text-xl font-bold bg-gradient-to-r from-[#bf46f3] to-[#4c66f4] bg-clip-text text-transparent hover:opacity-80 transition-opacity" data-testid="link-home">
            NeuroRace
          </a>
        </Link>

        <ul className="flex items-center gap-6">
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
            <a
              href="https://www.fiap.com.br/next/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-vote"
            >
              <Button
                className="bg-gradient-to-r from-[#bf46f3] to-[#4c66f4] hover:opacity-90"
                size="sm"
              >
                VOTE NO NEXT!
              </Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
