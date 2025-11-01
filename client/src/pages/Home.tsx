import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { InfoCard } from "@/components/InfoCard";
import { HashtagSection } from "@/components/HashtagSection";
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
                <span className="text-primary">Neuro</span>
                <span className="text-accent">ciência</span>
                <br />
                <span className="text-foreground">Foco e Performance</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Descubra como seu cérebro reage durante corridas de kart através de neurofeedback em tempo real.
              </p>
            </div>
            <div className="flex-1 flex justify-center">
              <img 
                src={mascoteVencedor} 
                alt="Mascote NeuroRace" 
                className="w-64 md:w-80 animate-pulse"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="container max-w-4xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <InfoCard
            icon="🧠"
            title="Insights sobre Foco"
            description="A capacidade de manter o foco é uma habilidade que pode ser treinada. Nosso sistema usa neurofeedback para te ajudar a identificar e fortalecer seus momentos de concentração."
          />
          <InfoCard
            icon="🏆"
            title="Premiação"
            description="Participe de uma competição no NeuroRace! Os pilotos com os melhores índices de performance concorrem a prêmios exclusivos no final do evento."
          />
        </div>

        <HashtagSection />
        
        <div className="mt-12 text-center">
          <img 
            src={mascoteCorrendo} 
            alt="Mascote Correndo" 
            className="w-48 mx-auto mb-6"
          />
          <p className="text-muted-foreground">
            Pronto para testar sua concentração? Visite nosso stand no NEXT 2025!
          </p>
        </div>
      </main>
    </div>
  );
}
