import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { RankingItem } from "@/components/RankingItem";
import { useQuery } from "@tanstack/react-query";
import type { Stats } from "@shared/schema";

export default function Ranking() {
  //todo: remove mock functionality - replace with real API call
  const { data: rankings, isLoading } = useQuery<Array<Stats & { position: number }>>({
    queryKey: ["/api/ranking"],
    queryFn: async () => {
      // Mock data for demo
      return [
        { playerEmail: "piloto.campeao@email.com", tzfPB: 0.89, trzPBsec: 2.5, tzfSeries: [0.85, 0.89], position: 1 },
        { playerEmail: "segundo.lugar@email.com", tzfPB: 0.85, trzPBsec: 2.3, tzfSeries: [0.82, 0.85], position: 2 },
        { playerEmail: "terceiro@email.com", tzfPB: 0.78, trzPBsec: 2.1, tzfSeries: [0.75, 0.78], position: 3 },
        { playerEmail: "teste@email.com", tzfPB: 0.75, trzPBsec: 2.0, tzfSeries: [0.70, 0.75], position: 4 },
      ];
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-4xl mx-auto px-6 py-12">
        <PageHeader
          title="Ranking Geral"
          subtitle="Veja os pilotos mais focados do evento em tempo real."
        />

        {isLoading ? (
          <div className="text-center text-muted-foreground" data-testid="text-loading">
            Carregando ranking...
          </div>
        ) : (
          <div className="space-y-4" data-testid="list-ranking">
            {rankings?.map((player) => (
              <RankingItem
                key={player.playerEmail}
                position={player.position}
                playerEmail={player.playerEmail}
                tzfScore={player.tzfPB || 0}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
