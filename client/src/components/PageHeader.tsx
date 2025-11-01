interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" data-testid="text-title">
        {title}
      </h1>
      <p className="text-base md:text-lg text-muted-foreground px-4" data-testid="text-subtitle">
        {subtitle}
      </p>
    </header>
  );
}
