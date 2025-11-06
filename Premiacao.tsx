import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Gift, Star } from "lucide-react";

const prizeData = [
  {
    place: "1º Lugar",
    title: "Prêmio Top",
    description: "Maior índice de concentração e melhor performance geral",
    Icon: Trophy,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    titleColor: "text-brand-yellow",
    testId: "card-first-place",
  },
  {
    place: "2º Lugar",
    title: "Destaque",
    description: "Excelente desempenho de foco e consistência",
    Icon: Star,
    iconBg: "bg-accent/10",
    iconColor: "text-accent",
    titleColor: "text-accent",
    testId: "card-second-place",
  },
  {
    place: "3º Lugar",
    title: "Honra",
    description: "Ótimo controle mental e resiliência",
    Icon: Gift,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    titleColor: "text-primary",
    testId: "card-third-place",
  },
];

const howToWinData = [
  {
    title: "1. Mantenha o Foco",
    description: "Quanto maior sua concentração, melhor será seu desempenho. O sensor NeuroSky lê suas ondas cerebrais em tempo real.",
    color: "text-primary",
  },
  {
    title: "2. Seja Consistente",
    description: "A premiação leva em conta não apenas picos de foco, mas a capacidade de manter a concentração ao longo da corrida.",
    color: "text-accent",
  },
  {
    title: "3. Domine sua Mente",
    description: "Em um mundo de distrações, o foco é o seu superpoder. A diferença entre o bom e o lendário é um segundo a mais de foco.",
    color: "text-brand-yellow",
  },
];

export default function Premiacao() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader 
        title="Premiação" 
        subtitle="Participe da competição NeuroRace e concorra a prêmios exclusivos!"
      />
      
      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Compete</span> e <span className="text-brand-yellow">Vença</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O NeuroRace transforma seu foco em uma competição divertida e viciante. 
              Os pilotos com os melhores índices de performance concorrem a prêmios exclusivos no final do evento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {prizeData.map((prize) => (
              <Card key={prize.place} className="text-center hover-elevate" data-testid={prize.testId}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className={`w-16 h-16 rounded-full ${prize.iconBg} flex items-center justify-center`}>
                      <prize.Icon className={`w-8 h-8 ${prize.iconColor}`} />
                    </div>
                  </div>
                  <CardTitle className="text-2xl mt-4">{prize.place}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-3xl font-bold mb-2 ${prize.titleColor}`}>{prize.title}</p>
                  <p className="text-muted-foreground">{prize.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-8" data-testid="card-how-to-win">
            <CardHeader>
              <CardTitle className="text-2xl">Como Vencer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {howToWinData.map((item) => (
                <div key={item.title}>
                  <h3 className={`font-semibold text-lg mb-2 ${item.color}`}>{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg">
            <p className="text-xl font-semibold mb-2">
              Pronto para competir?
            </p>
            <p className="text-muted-foreground">
              Visite nosso stand no NEXT FIAP Festival e teste sua concentração!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
