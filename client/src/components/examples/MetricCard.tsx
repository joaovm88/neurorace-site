import { MetricCard } from '../MetricCard';

export default function MetricCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      <MetricCard
        icon="🎯"
        title="Foco (TZF)"
        value="75.3%"
        tooltip="Tempo em Zona de Foco: Mede o percentual da corrida que você passou acima do seu limiar de foco."
      />
      <MetricCard
        icon="⚖️"
        title="Consistência (CVF)"
        value="Estável"
        valueColor="text-green-500"
        tooltip="Consistência do Foco: Indica se seu foco foi 'Estável' ou se 'Oscilou' muito durante a prova."
      />
      <MetricCard
        icon="🧠"
        title="Resiliência (IRC)"
        value="Alto"
        valueColor="text-blue-500"
        tooltip="Índice de Resiliência Cognitiva: Calcula sua capacidade de se recuperar mentalmente de eventos, como colisões."
      />
      <MetricCard
        icon="⚡"
        title="LFO Médio"
        value="3.5"
        tooltip="Low Frequency Oscillations: Métrica de recuperação neural após eventos estressantes."
      />
    </div>
  );
}
