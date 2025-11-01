import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { PlayerResultCard } from "@/components/PlayerResultCard";

export default function RaceFinished() {
  //todo: remove mock functionality - replace with real data from URL params
  // Expected URL: /race-finished?p1id=email1&p1sid=session1&p2id=email2&p2sid=session2
  const players = [
    {
      playerNumber: 1 as const,
      playerEmail: "piloto1@email.com",
      tzfScore: 0.85,
      dashboardUrl: `${window.location.origin}/dashboard?pid=piloto1@email.com`,
    },
    {
      playerNumber: 2 as const,
      playerEmail: "piloto2@email.com",
      tzfScore: 0.78,
      dashboardUrl: `${window.location.origin}/dashboard?pid=piloto2@email.com`,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-6xl mx-auto px-4 md:px-6 py-12">
        <PageHeader
          title="Corrida Finalizada"
          subtitle="Escaneie o QR Code para ver sua análise completa de performance."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-testid="grid-results">
          {players.map((player) => (
            <PlayerResultCard key={player.playerNumber} {...player} />
          ))}
        </div>
      </main>
    </div>
  );
}
