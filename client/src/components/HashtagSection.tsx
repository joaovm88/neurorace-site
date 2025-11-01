import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HashtagSection() {
  const hashtags = ["#NeuroRaceFIAP", "#NEXT2025", "#Neurofeedback"];

  return (
    <Card data-testid="card-hashtags">
      <CardHeader>
        <CardTitle>Publique sua Experiência!</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Visitou nosso stand? Poste sua foto ou sua análise de performance no LinkedIn e
          ajude a gerar relevância para o projeto. Use as hashtags:
        </p>
        <div className="flex flex-wrap gap-3">
          {hashtags.map((tag) => (
            <code
              key={tag}
              className="px-3 py-1.5 bg-muted text-muted-foreground rounded font-mono text-sm"
              data-testid={`hashtag-${tag.substring(1).toLowerCase()}`}
            >
              {tag}
            </code>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
