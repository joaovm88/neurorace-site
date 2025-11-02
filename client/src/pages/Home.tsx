import { Navigation } from "@/components/Navigation";
import { InfoCard } from "@/components/InfoCard";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Zap, Trophy, Gift, Star, Camera, MessageSquare, Share2, Instagram, Twitter, Facebook } from "lucide-react";
import mascoteVencedor from "@assets/Gemini_Generated_Image_a20m34a20m34a20m_1762029850292.png";
import mascoteCorrendo from "@assets/mascote 1_1762029850292.png";

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
          <div className="flex justify-center mb-8">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-accent text-white font-bold text-lg"
              data-testid="button-vote-hero"
            >
              <a 
                href="https://www.fiap.com.br/next/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Star className="w-5 h-5 fill-current" />
                VOTE NO NEXT!
              </a>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                <span className="text-primary">Onde Sua Mente</span>
                <br />
                <span className="text-foreground">é o</span> <span style={{color: 'hsl(45 100% 52%)'}}>Controle</span>
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
                className="w-64 md:w-80 animate-pulse"
                style={{backgroundColor: '#0a192f'}}
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-primary">O Conceito</span> do <span style={{color: 'hsl(45 100% 52%)'}}>NeuroRace</span>
          </h2>
          
          <Card className="mb-8 bg-gradient-to-br from-card via-card to-primary/5">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-center leading-relaxed">
                Mais do que um jogo, é uma <span className="font-semibold text-primary">experiência imersiva</span>: 
                usando o sensor NeuroSky, nós lemos suas <span className="font-semibold text-accent">ondas cerebrais em tempo real</span>. 
                Quanto maior sua concentração, melhor seu desempenho.
              </p>
              <p className="text-lg md:text-xl text-center leading-relaxed mt-6">
                E é aí que entra a <span className="font-semibold" style={{color: 'hsl(45 100% 52%)'}}>gamificação</span>: 
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
                    <Trophy className="w-8 h-8" style={{color: 'hsl(45 100% 52%)'}} />
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
            <span className="text-primary">Compartilhe</span> sua <span style={{color: 'hsl(45 100% 52%)'}}>Conquista</span>
          </h2>

          <div className="space-y-6">
            <Card data-testid="card-share-tips">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera className="w-5 h-5 text-primary" />
                  Dicas para Compartilhar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">📸 Tire Fotos</h3>
                  <p className="text-muted-foreground">
                    Registre o momento usando o sensor NeuroSky, mostre seu dashboard pessoal 
                    com suas métricas de concentração e performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-accent">💭 Conte sua História</h3>
                  <p className="text-muted-foreground">
                    Descreva como foi controlar com sua mente, quais foram seus maiores desafios 
                    e o que você aprendeu sobre seu foco e concentração.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{color: 'hsl(45 100% 52%)'}}>🏆 Mostre seus Resultados</h3>
                  <p className="text-muted-foreground">
                    Compartilhe seu TZF (Taxa de Zona de Foco), índices de consistência e resiliência. 
                    Inspire outros a testarem sua concentração!
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card data-testid="card-hashtags">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" />
                    Use Nossas Hashtags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">#NeuroRace</span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">#MindControl</span>
                    <span className="px-3 py-1 bg-primary/10 rounded-full text-sm font-medium" style={{color: 'hsl(45 100% 52%)'}}>
                      #FocoÉPoder
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">#NEXTFIAP</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">#Neurofeedback</span>
                    <span className="px-3 py-1 bg-accent/10 rounded-full text-sm font-medium" style={{color: 'hsl(45 100% 52%)'}}>
                      #ConcentraçãoTotal
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card data-testid="card-social-media">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Share2 className="w-5 h-5" style={{color: 'hsl(45 100% 52%)'}} />
                    Compartilhe nas Redes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate"
                      data-testid="button-share-instagram"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="text-xs">Instagram</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate"
                      data-testid="button-share-twitter"
                    >
                      <Twitter className="w-5 h-5" />
                      <span className="text-xs">Twitter</span>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate"
                      data-testid="button-share-facebook"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="text-xs">Facebook</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
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
              <span className="font-semibold" style={{color: 'hsl(45 100% 52%)'}}> tecnologia</span> e 
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
            style={{backgroundColor: '#0a192f'}}
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
