import { PlayerResultCard } from '../PlayerResultCard';

export default function PlayerResultCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      <PlayerResultCard
        playerNumber={1}
        playerEmail="piloto1@email.com"
        tzfScore={0.85}
        dashboardUrl="https://neurorace.replit.app/dashboard?pid=piloto1@email.com"
      />
      <PlayerResultCard
        playerNumber={2}
        playerEmail="piloto2@email.com"
        tzfScore={0.78}
        dashboardUrl="https://neurorace.replit.app/dashboard?pid=piloto2@email.com"
      />
    </div>
  );
}
