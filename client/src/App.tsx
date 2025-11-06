// Arquivo: client/src/App.tsx
// Documentação: Roteador principal, agora a usar a Rota Protegida

import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";

// --- Páginas Públicas ---
import Home from "@/pages/Home";
import Ranking from "@/pages/Ranking";
import Publique from "@/pages/Publique";
import Equipe from "@/pages/Equipe";
import Premiacao from "@/pages/Premiacao";
import RaceFinished from "@/pages/RaceFinished";
import NotFound from "@/pages/not-found";

// --- Páginas de Autenticação ---
import { Login } from "@/pages/Login";
import { FinalizarLogin } from "@/pages/FinalizarLogin";

// --- Páginas Privadas (Exigem login) ---
import Dashboard from "@/pages/Dashboard";

// 1. IMPORTE O NOSSO NOVO "SEGURANÇA"
import { ProtectedRoute } from "@/components/ProtectedRoute";

function App() {
    return (
        <>
            <Switch>
                {/* --- Rotas Públicas --- */}
                <Route path="/" component={Home} />
                <Route path="/ranking" component={Ranking} />
                <Route path="/publique" component={Publique} />
                <Route path="/equipe" component={Equipe} />
                <Route path="/premiacao" component={Premiacao} />
                <Route path="/race-finished" component={RaceFinished} />

                {/* --- Rotas de Autenticação --- */}
                <Route path="/login" component={Login} />
                <Route path="/finalizar-login" component={FinalizarLogin} />

                {/* 2. ROTA PROTEGIDA */}
                {/* Agora, em vez de <Route>, usamos <ProtectedRoute> */}
                {/* Isto "tranca" a porta do Dashboard */}
                <Route path="/dashboard" component={() => <ProtectedRoute component={Dashboard} />} />

                {/* --- Rota 404 (Sempre por último) --- */}
                <Route component={NotFound} />
            </Switch>
            <Toaster />
        </>
    );
}

export default App;