interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#bf46f3] to-[#4c66f4] bg-clip-text text-transparent" data-testid="text-title">
        {title}
      </h1>
      <p className="text-lg text-muted-foreground" data-testid="text-subtitle">
        {subtitle}
      </p>
    </header>
  );
}
