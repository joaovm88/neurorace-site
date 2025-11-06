import { Navigation } from "@/components/Navigation";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { ShareSection } from "@/components/ShareSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Trophy, Star } from "lucide-react";
import mascoteVencedor from "@assets/Imagem do WhatsApp de 2025-11-02 à(s) 17.19.54_3029b0b9_1762114903401.jpg";
import mascoteCorrendo from "@assets/Imagem do WhatsApp de 2025-11-02 à(s) 17.16.15_351319a1_1762114903401.jpg";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="relative overflow-hidden bg-gradient-to-b from-card to-background border-b">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container max-w-6xl mx-auto px-4 md:px-6 py-16 relative">


          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                <span className="text-primary">Onde Sua Mente</span>
                <br />
                <span className="text-foreground">é o</span> <span className="text-brand-yellow">Controle</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Você já imaginou controlar um jogo apenas com o poder do seu foco? 
                O NeuroRace transforma isso em realidade através de neurofeedback em tempo real.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={mascoteVencedor} 
                alt="Mascote NeuroRace" 
                className="w-64 md:w-80 animate-float"
                style={{mixBlendMode: 'screen'}}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">O Conceito</span> do <span className="text-brand-yellow">NeuroRace</span>
          </h2>
          
          <Card className="mb-8 bg-gradient-to-br from-card via-card to-primary/5">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-center leading-relaxed">
                Mais do que um jogo, é uma <span className="font-semibold text-primary">experiência imersiva</span>: 
                usando o sensor NeuroSky, nós lemos suas <span className="font-semibold text-accent">ondas cerebrais em tempo real</span>. 
                Quanto maior sua concentração, melhor seu desempenho.
              </p>
              <p className="text-lg md:text-xl text-center leading-relaxed mt-6">
                E é aí que entra a <span className="font-semibold text-brand-yellow">gamificação</span>: 
                O NeuroRace transforma seu foco em uma competição divertida e viciante. 
                Você compete contra outros jogadores, acompanha seu progresso em dashboards instantâneos 
                e é recompensado por manter a mente afiada.
              </p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover-elevate" data-testid="card-feature-brain">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Neurofeedback Real</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sensor NeuroSky captura suas ondas cerebrais e transforma foco em performance
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-feature-game">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                </div>
                <CardTitle>Gamificação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Competição, dashboards ao vivo e métricas de concentração em tempo real
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate" data-testid="card-feature-prize">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-brand-yellow" />
                  </div>
                </div>
                <CardTitle>Premiação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Melhores performances concorrem a prêmios exclusivos no evento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-16">
          <QuoteCarousel />
        </div>

        <div className="mb-16" id="publique">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-primary">Compartilhe</span> sua <span className="text-brand-yellow">Conquista</span>
          </h2>

          <ShareSection />
        </div>

        <Card className="mb-12 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10" data-testid="card-next-info">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              NEXT FIAP Festival
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-lg text-muted-foreground">
              O NEXT é o maior festival de inovação e tecnologia da FIAP, onde alunos apresentam 
              seus projetos mais incríveis ao longo de um dia repleto de competições, 
              demonstrações e prêmios.
            </p>
            <p className="text-center text-lg">
              <span className="font-semibold text-primary">NeuroRace</span> é um dos projetos 
              destaque deste ano, combinando <span className="font-semibold text-accent">neurociência</span>,
              <span className="font-semibold text-brand-yellow"> tecnologia</span> e 
              <span className="font-semibold text-primary"> gamificação</span> em uma experiência única!
            </p>
            <div className="flex justify-center mt-6">
              <Button 
                asChild
                className="bg-primary hover:opacity-90 text-primary-foreground"
                size="lg"
              >
                <a 
                  href="https://www.fiap.com.br/next/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-next-festival"
                >
                  Conheça o NEXT FIAP Festival
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <div className="mt-12 text-center p-8 rounded-lg" style={{backgroundColor: '#0a192f'}}>
          <img 
            src={mascoteCorrendo} 
            alt="Mascote Correndo" 
            className="w-48 mx-auto mb-6"
            style={{mixBlendMode: 'screen'}}
          />
          <h3 className="text-2xl font-bold mb-4">
            Pronto para testar sua concentração?
          </h3>
          <p className="text-lg text-muted-foreground">
            Visite nosso stand no NEXT 2025 e descubra o poder da sua mente!
          </p>
        </div>
      </main>
    </div>
  );
}
