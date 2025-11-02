import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Gift, Star } from "lucide-react";

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
            <Card className="text-center hover-elevate" data-testid="card-first-place">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">1º Lugar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-2 text-brand-yellow">Prêmio Top</p>
                <p className="text-muted-foreground">
                  Maior índice de concentração e melhor performance geral
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-second-place">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle className="text-2xl">2º Lugar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-accent mb-2">Destaque</p>
                <p className="text-muted-foreground">
                  Excelente desempenho de foco e consistência
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-third-place">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Gift className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-2xl">3º Lugar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-primary mb-2">Honra</p>
                <p className="text-muted-foreground">
                  Ótimo controle mental e resiliência
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-8" data-testid="card-how-to-win">
            <CardHeader>
              <CardTitle className="text-2xl">Como Vencer</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-primary">1. Mantenha o Foco</h3>
                <p className="text-muted-foreground">
                  Quanto maior sua concentração, melhor será seu desempenho. O sensor NeuroSky lê suas ondas cerebrais em tempo real.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-accent">2. Seja Consistente</h3>
                <p className="text-muted-foreground">
                  A premiação leva em conta não apenas picos de foco, mas a capacidade de manter a concentração ao longo da corrida.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-brand-yellow">3. Domine sua Mente</h3>
                <p className="text-muted-foreground">
                  Em um mundo de distrações, o foco é o seu superpoder. A diferença entre o bom e o lendário é um segundo a mais de foco.
                </p>
              </div>
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
