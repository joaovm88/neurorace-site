import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { InfoCard } from "@/components/InfoCard";
import { HashtagSection } from "@/components/HashtagSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-4xl mx-auto px-6 py-12">
        <PageHeader
          title="Neurociência, Foco e Performance"
          subtitle="Entenda a ideia do projeto e como o NeuroRace mede sua concentração."
        />

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
      </main>
    </div>
  );
}
