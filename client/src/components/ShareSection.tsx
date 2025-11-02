import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, MessageSquare, Share2, Instagram, Twitter, Facebook } from "lucide-react";

export function ShareSection() {
  return (
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
            <h3 className="font-semibold mb-2 text-brand-yellow">🏆 Mostre seus Resultados</h3>
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
              <span className="px-3 py-1 bg-yellow-400/10 text-brand-yellow rounded-full text-sm font-medium">#FocoÉPoder</span>
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">#NEXTFIAP</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">#Neurofeedback</span>
              <span className="px-3 py-1 bg-yellow-400/10 text-brand-yellow rounded-full text-sm font-medium">#ConcentraçãoTotal</span>
            </div>
          </CardContent>
        </Card>

        <Card data-testid="card-social-media">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Share2 className="w-5 h-5 text-brand-yellow" />
              Compartilhe nas Redes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" size="sm" className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate" data-testid="button-share-instagram">
                <Instagram className="w-5 h-5" />
                <span className="text-xs">Instagram</span>
              </Button>
              <Button variant="outline" size="sm" className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate" data-testid="button-share-twitter">
                <Twitter className="w-5 h-5" />
                <span className="text-xs">Twitter</span>
              </Button>
              <Button variant="outline" size="sm" className="flex flex-col items-center gap-1 h-auto py-3 hover-elevate" data-testid="button-share-facebook">
                <Facebook className="w-5 h-5" />
                <span className="text-xs">Facebook</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}