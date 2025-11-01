import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Player, Session, Stats } from "@shared/schema";

export default function Dashboard() {
  const [email, setEmail] = useState("");
  const [searchEmail, setSearchEmail] = useState("");

  const handleSearch = () => {
    if (email.trim()) {
      setSearchEmail(email.trim().toLowerCase());
      console.log('Searching for player:', email);
    }
  };

  //todo: remove mock functionality - replace with real API calls
  const { data: playerData, isLoading } = useQuery<{ player: Player; session: Session; stats: Stats }>({
    queryKey: ["/api/player", searchEmail],
    enabled: !!searchEmail,
    queryFn: async () => {
      // Mock data for demo
      return {
        player: { email: searchEmail, phone: "(11) 99999-8888" },
        session: {
          id: "session_1",
          playerEmail: searchEmail,
          startedAt: new Date(),
          tzf: 0.75,
          cvfLabel: "estavel",
          ircLabel: "alto",
          lfoMean: 3.5,
          badges: { isTZFPB: true },
        },
        stats: {
          playerEmail: searchEmail,
          tzfPB: 0.85,
          trzPBsec: 2.1,
          tzfSeries: [0.60, 0.68, 0.75, 0.82, 0.85],
        },
      };
    },
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="container max-w-6xl mx-auto px-6 py-12">
        <PageHeader
          title="Meu Dashboard Pessoal"
          subtitle={
            searchEmail
              ? `Exibindo a análise de ${searchEmail}`
              : "Digite seu email para carregar sua análise de desempenho."
          }
        />

        {!searchEmail && (
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-12 px-4">
            <Input
              type="email"
              placeholder="Digite seu email de cadastro"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              data-testid="input-email"
              className="flex-1"
            />
            <Button onClick={handleSearch} data-testid="button-search" className="sm:w-auto">
              Buscar Análise
            </Button>
          </div>
        )}

        {isLoading && (
          <div className="text-center text-muted-foreground" data-testid="text-loading">
            Carregando dados...
          </div>
        )}

        {playerData && (
          <div className="space-y-6 px-4">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="pt-6">
                <p className="text-sm md:text-base text-muted-foreground">
                  <strong className="text-foreground">Curiosidade:</strong> O cérebro é como um músculo. 
                  Quanto mais você treina seu foco, mais forte e resiliente ele fica!
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              <MetricCard
                icon="🎯"
                title="Foco (TZF)"
                value={`${(playerData.session.tzf * 100).toFixed(1)}%`}
                tooltip="Tempo em Zona de Foco: Mede o percentual da corrida que você passou acima do seu limiar de foco."
              />
              <MetricCard
                icon="⚖️"
                title="Consistência (CVF)"
                value={playerData.session.cvfLabel === "estavel" ? "Estável" : "Oscilante"}
                valueColor={playerData.session.cvfLabel === "estavel" ? "text-green-500" : "text-yellow-500"}
                tooltip="Consistência do Foco: Indica se seu foco foi 'Estável' ou se 'Oscilou' muito durante a prova."
              />
              <MetricCard
                icon="🧠"
                title="Resiliência (IRC)"
                value={playerData.session.ircLabel === "alto" ? "Alto" : playerData.session.ircLabel === "medio" ? "Médio" : "Baixo"}
                valueColor={playerData.session.ircLabel === "alto" ? "text-blue-500" : "text-muted-foreground"}
                tooltip="Índice de Resiliência Cognitiva: Calcula sua capacidade de se recuperar mentalmente de eventos, como colisões."
              />
              <MetricCard
                icon="⚡"
                title="LFO Médio"
                value={playerData.session.lfoMean?.toFixed(1) || "--"}
                tooltip="Low Frequency Oscillations: Métrica de recuperação neural após eventos estressantes."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span>🚀</span>
                    <span>Meus Recordes (PBs)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">⏱️ Melhor Foco (TZF)</span>
                    <span className="text-lg font-bold text-[#38bdf8]">
                      {(playerData.stats.tzfPB! * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">⚡ Melhor Recuperação (TRZ)</span>
                    <span className="text-lg font-bold text-[#38bdf8]">
                      {playerData.stats.trzPBsec?.toFixed(1)}s
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {playerData.stats.tzfSeries && playerData.stats.tzfSeries.length > 0 && (
              <PerformanceChart tzfSeries={playerData.stats.tzfSeries} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}
