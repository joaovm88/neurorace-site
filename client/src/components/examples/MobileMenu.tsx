import { MobileMenu } from '../MobileMenu';

export default function MobileMenuExample() {
  const navItems = [
    { href: "/", label: "O Projeto" },
    { href: "/ranking", label: "Ranking" },
    { href: "/equipe", label: "Equipe" },
  ];

  return (
    <div className="border p-4">
      <MobileMenu navItems={navItems} />
    </div>
  );
}
