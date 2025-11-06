// Arquivo: client/src/pages/Dashboard.tsx
// Documentação: Versão final (COMPLETA E CORRIGIDA) que lê 100% do Firestore.

import { Navigation } from "@/components/Navigation";
import { PageHeader } from "@/components/PageHeader";
import { MetricCard } from "@/components/MetricCard";
import { PerformanceChart } from "@/components/PerformanceChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Trophy, TrendingUp, BarChartHorizontal } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

// 1. Importar o nosso hook de Autenticação e o Firebase
import { useAuth } from "@/contexts/AuthContext";
import { db } from "@/firebaseConfig";
import {
    doc,
    getDoc,
    getDocs,
    collection,
    query,
    where,
    orderBy,
    Timestamp, // Importar o tipo Timestamp
} from "firebase/firestore";

// 2. Definir os Tipos Finais (reais do Firestore)
// (Não estamos a importar de @shared/schema, que era o problema)
interface Player {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
}

interface Session {
    id: string;
    playerUid?: string;
    startedAt?: Timestamp; // Usar o tipo Timestamp
    tzf?: number;
    cvfLabel?: string;
    ircLabel?: string;
    lfoMean?: number;
    badges?: {
        isTZFPB?: boolean;
    };
}

interface Stats {
    tzfPB?: number;
    trzPBsec?: number;
    tzfSeries?: number[];
}

interface DashboardData {
    player: Player;
    latestSession?: Session;
    allSessions: Session[];
    stats: Stats;
}

export default function Dashboard() {
    const { currentUser } = useAuth();

    // 3. Query principal que busca TUDO
    const { data: playerData, isLoading } = useQuery<DashboardData>({
        queryKey: ["dashboardData", currentUser?.uid],
        enabled: !!currentUser,

        queryFn: async () => {
            if (!currentUser) throw new Error("Utilizador não logado");
            const uid = currentUser.uid;

            // Buscar Perfil
            const playerDocRef = doc(db, "players", uid);
            const playerDoc = await getDoc(playerDocRef);
            const player = playerDoc.exists() ? (playerDoc.data() as Player) : {};

            // Buscar Recordes
            const statsDocRef = doc(db, "stats", uid);
            const statsDoc = await getDoc(statsDocRef);
            const stats = statsDoc.exists() ? (statsDoc.data() as Stats) : {};

            // Buscar Sessões
            const sessionsQuery = query(
                collection(db, "sessions"),
                where("playerUid", "==", uid),
                orderBy("startedAt", "desc")
            );

            const sessionsSnapshot = await getDocs(sessionsQuery);

            const allSessions: Session[] = sessionsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...(doc.data() as Omit<Session, "id">),
            }));

            const latestSession = allSessions.length > 0 ? allSessions[0] : undefined;

            return { player, stats, allSessions, latestSession };
        },
    });

    // Função auxiliar
    const getIrcLabel = (label: string | undefined) => {
        switch (label) {
            case "alto": return "Alto";
            case "medio": return "Médio";
            case "baixo": return "Baixo";
            default: return "N/A";
        }
    };

    // Função para formatar a data vinda do Firebase
    const formatTimestamp = (timestamp?: Timestamp) => { // Aceita indefinido
        if (!timestamp) return "Data indisponível";
        const date = timestamp.toDate();
        return date.toLocaleString('pt-BR', {
            day: '2-digit', month: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    // Ecrã de Loading
    if (isLoading || !currentUser) {
        return (
            <div className="min-h-screen">
                <Navigation />
                <main className="container max-w-6xl mx-auto px-6 py-12">
                    <div className="flex justify-between items-center gap-4 mb-8">
                        <div>
                            <Skeleton className="h-8 w-64 mb-2" />
                            <Skeleton className="h-4 w-80" />
                        </div>
                    </div>
                    <div className="space-y-6 px-4">
                        <Skeleton className="h-40 w-full" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                            <Skeleton className="h-32 w-full" />
                            <Skeleton className="h-32 w-full" />
                            <Skeleton className="h-32 w-full" />
                            <Skeleton className="h-32 w-full" />
                        </div>
                        <Skeleton className="h-64 w-full" />
                    </div>
                </main>
            </div>
        );
    }

    // Ecrã de "Nenhum Dado"
    if (!playerData?.allSessions || playerData.allSessions.length === 0) {
        return (
            <div className="min-h-screen">
                <Navigation />
                <main className="container max-w-6xl mx-auto px-6 py-12">
                    <PageHeader
                        title={`Bem-vindo(a), ${playerData?.player?.firstName || 'Competidor'}!`}
                        subtitle="Ainda não temos dados das suas corridas."
                    />
                    <Card className="mt-12 max-w-lg mx-auto">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <BarChartHorizontal className="w-5 h-5 text-primary" />
                                Comece a sua jornada!
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                Parece que você ainda não completou nenhuma corrida.
                                Assim que participar no evento, os seus resultados e estatísticas
                                aparecerão automaticamente aqui.
                            </p>
                            <p className="mt-4">Boa sorte!</p>
                        </CardContent>
                    </Card>
                </main>
            </div>
        );
    }

    // Assegurar que latestSession existe para o ecrã principal
    const { player, stats, allSessions, latestSession } = playerData;
    if (!latestSession) {
        return <p>Ocorreu um erro ao carregar a sessão mais recente.</p>
    }

    // Ecrã Principal (com dados reais)
    return (
        <div className="min-h-screen">
            <Navigation />
            <main className="container max-w-6xl mx-auto px-6 py-12">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 mb-8">
                    <PageHeader
                        title={`Bem-vindo(a), ${player?.firstName || 'Competidor'}!`}
                        subtitle={`Análise de desempenho de ${player?.email || '...'}`}
                    />
                </div>

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
                                {allSessions.map((session, index) => (
                                    <Card key={session.id} className="hover-elevate" data-testid={`session-${session.id}`}>
                                        <CardContent className="pt-6">
                                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge variant={index === 0 ? "default" : "outline"}>
                                                            {index === 0 ? "Mais Recente" : `Corrida #${allSessions.length - index}`}
                                                        </Badge>
                                                        {session.badges?.isTZFPB && (
                                                            <Badge className="bg-[#38bdf8] text-white">
                                                                <Trophy className="w-3 h-3 mr-1" />
                                                                Recorde Pessoal
                                                            </Badge>
                                                        )}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        {formatTimestamp(session.startedAt)}
                                                    </p>
                                                </div>
                                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                                                    <div className="text-center">
                                                        <p className="text-xs text-muted-foreground mb-1">Foco (TZF)</p>
                                                        <p className="text-lg font-bold text-primary">{((session.tzf || 0) * 100).toFixed(1)}%</p>
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
                                                            {getIrcLabel(session.ircLabel)}
                                                        </p>
                                                    </div>
                                                    <div className="text-center">
                                                        <p className="text-xs text-muted-foreground mb-1">LFO Médio</p>
                                                        <p className="text-sm font-semibold text-accent">{session.lfoMean?.toFixed(1) || "--"}</p>
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
                                            Você participou de <strong className="text-foreground">{allSessions.length} corrida{allSessions.length > 1 ? 's' : ''}</strong>.
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
                            title="Foco (Última)"
                            value={`${((latestSession.tzf || 0) * 100).toFixed(1)}%`}
                            tooltip="Tempo em Zona de Foco (TZF) da sua última corrida."
                        />
                        <MetricCard
                            icon="⚖️"
                            title="Consistência (Última)"
                            value={latestSession.cvfLabel === "estavel" ? "Estável" : "Oscilante"}
                            valueColor={latestSession.cvfLabel === "estavel" ? "text-green-500" : "text-yellow-500"}
                            tooltip="Consistência do Foco da sua última corrida."
                        />
                        <MetricCard
                            icon="🧠"
                            title="Resiliência (Última)"
                            value={getIrcLabel(latestSession.ircLabel)}
                            valueColor={latestSession.ircLabel === "alto" ? "text-blue-500" : "text-muted-foreground"}
                            tooltip="Índice de Resiliência Cognitiva (IRC) da sua última corrida."
                        />
                        <MetricCard
                            icon="⚡"
                            title="LFO Médio (Última)"
                            value={latestSession.lfoMean?.toFixed(1) || "--"}
                            tooltip="Low Frequency Oscillations (LFO) da sua última corrida."
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="bg-gradient-to-br from-card to-primary/5 border border-primary/20">
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
                                        {stats.tzfPB ? `${(stats.tzfPB * 100).toFixed(1)}%` : "N/D"}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">⚡ Melhor Recuperação (TRZ)</span>
                                    <span className="text-lg font-bold text-[#38bdf8]">
                                        {stats.trzPBsec ? `${stats.trzPBsec.toFixed(1)}s` : "N/D"}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>

                        {playerData?.allSessions && playerData.allSessions.length > 0 && (
                            <PerformanceChart allSessions={playerData.allSessions} />
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}