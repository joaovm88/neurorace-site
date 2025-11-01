import { InfoCard } from '../InfoCard';

export default function InfoCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
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
  );
}
