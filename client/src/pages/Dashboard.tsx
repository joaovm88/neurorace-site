import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, TrendingUp } from "lucide-react";
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
  const { data: playerData, isLoading } = useQuery<{ player: Player; session: Session; sessions: Session[]; stats: Stats }>({
    queryKey: ["/api/player", searchEmail],
    enabled: !!searchEmail,
    queryFn: async () => {
      // Mock data for demo - múltiplas sessões
      const now = new Date();
      const sessions: Session[] = [
        {
          id: "session_4",
          playerEmail: searchEmail,
          startedAt: new Date(now.getTime() - 4 * 60 * 60 * 1000), // 4 horas atrás
          tzf: 0.85,
          cvfLabel: "estavel",
          ircLabel: "alto",
          lfoMean: 4.2,
          badges: { isTZFPB: true },
        },
        {
          id: "session_3",
          playerEmail: searchEmail,
          startedAt: new Date(now.getTime() - 3 * 60 * 60 * 1000), // 3 horas atrás
          tzf: 0.72,
          cvfLabel: "oscilante",
          ircLabel: "medio",
          lfoMean: 3.1,
          badges: {},
        },
        {
          id: "session_2",
          playerEmail: searchEmail,
          startedAt: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 horas atrás
          tzf: 0.68,
          cvfLabel: "estavel",
          ircLabel: "alto",
          lfoMean: 3.8,
          badges: {},
        },
        {
          id: "session_1",
          playerEmail: searchEmail,
          startedAt: new Date(now.getTime() - 1 * 60 * 60 * 1000), // 1 hora atrás
          tzf: 0.75,
          cvfLabel: "estavel",
          ircLabel: "alto",
          lfoMean: 3.5,
          badges: { isTZFPB: false },
        },
      ];
      
      return {
        player: { email: searchEmail, phone: "(11) 99999-8888" },
        session: sessions[sessions.length - 1], // Última sessão
        sessions: sessions,
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
          title={searchEmail ? `Dashboard do(a) Competidor(a)` : "Dashboard do(a) Competidor(a)"}
          subtitle={
            searchEmail
              ? `Análise de desempenho de ${searchEmail}`
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
            <Card data-testid="card-race-history">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Histórico de Corridas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {playerData.sessions.map((session, index) => (
                    <Card key={session.id} className="hover-elevate" data-testid={`session-${session.id}`}>
                      <CardContent className="pt-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge variant={index === playerData.sessions.length - 1 ? "default" : "outline"}>
                                {index === playerData.sessions.length - 1 ? "Mais Recente" : `Corrida ${playerData.sessions.length - index}`}
                              </Badge>
                              {(session.badges as any)?.isTZFPB && (
                                <Badge className="bg-[#38bdf8] text-white">
                                  <Trophy className="w-3 h-3 mr-1" />
                                  Recorde Pessoal
                                </Badge>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground flex items-center gap-2">
                              <Clock className="w-4 h-4" />
                              {new Date(session.startedAt).toLocaleString('pt-BR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </p>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1">Foco (TZF)</p>
                              <p className="text-lg font-bold text-primary">
                                {(session.tzf * 100).toFixed(1)}%
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1">Consistência</p>
                              <p className={`text-sm font-semibold ${session.cvfLabel === "estavel" ? "text-green-500" : "text-yellow-500"}`}>
                                {session.cvfLabel === "estavel" ? "Estável" : "Oscilante"}
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1">Resiliência</p>
                              <p className={`text-sm font-semibold ${session.ircLabel === "alto" ? "text-blue-500" : "text-muted-foreground"}`}>
                                {session.ircLabel === "alto" ? "Alto" : session.ircLabel === "medio" ? "Médio" : "Baixo"}
                              </p>
                            </div>
                            <div className="text-center">
                              <p className="text-xs text-muted-foreground mb-1">LFO Médio</p>
                              <p className="text-sm font-semibold text-accent">
                                {session.lfoMean?.toFixed(1) || "--"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Progresso ao Longo do Tempo</h4>
                      <p className="text-sm text-muted-foreground">
                        Você participou de <strong className="text-foreground">{playerData.sessions.length} corrida{playerData.sessions.length > 1 ? 's' : ''}</strong>. 
                        Continue praticando para melhorar seu foco e concentração!
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

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
