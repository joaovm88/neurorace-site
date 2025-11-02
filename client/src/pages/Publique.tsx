import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { ShareSection } from "@/components/ShareSection";
import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

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
          <ShareSection />

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
