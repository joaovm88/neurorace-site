import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Camera, MessageSquare, Instagram, Twitter, Facebook } from "lucide-react";

export default function Publique() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <PageHeader 
        title="Publique sua Experiência" 
        subtitle="Compartilhe sua jornada NeuroRace nas redes sociais e inspire outros!"
      />
      
      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="space-y-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-primary">Compartilhe</span> sua <span style={{color: 'hsl(45 100% 52%)'}}>Conquista</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Mostre ao mundo sua performance no NeuroRace! Compartilhe suas métricas, 
              conquistas e experiência com tecnologia de neurofeedback.
            </p>
          </div>

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
                Compartilhe nas Redes Sociais
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 hover-elevate"
                  data-testid="button-share-instagram"
                >
                  <Instagram className="w-5 h-5" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 hover-elevate"
                  data-testid="button-share-twitter"
                >
                  <Twitter className="w-5 h-5" />
                  Twitter/X
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full flex items-center justify-center gap-2 hover-elevate"
                  data-testid="button-share-facebook"
                >
                  <Facebook className="w-5 h-5" />
                  Facebook
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              Sua mente no controle. O resto é só o jogo.
            </h3>
            <p className="text-muted-foreground mb-6">
              Ajude-nos a espalhar a palavra sobre o poder da neurociência aplicada!
            </p>
            <Button 
              className="bg-primary hover:opacity-90 text-primary-foreground"
              size="lg"
              data-testid="button-share-now"
            >
              <Share2 className="w-5 h-5 mr-2" />
              Compartilhar Agora
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
