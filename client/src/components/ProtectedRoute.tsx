// Arquivo: client/src/components/ProtectedRoute.tsx
// Documentação: Componente que protege rotas privadas

import { useAuth } from "@/contexts/AuthContext";
import { Redirect } from "wouter";

interface ProtectedRouteProps {
    // @ts-ignore
    component: React.ComponentType;
}

export function ProtectedRoute({ component: Component }: ProtectedRouteProps) {
    const { user, loading } = useAuth();

    // Mostra loading enquanto verifica autenticação
    if (loading) {
        // @ts-ignore
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-4 text-muted-foreground">Carregando...</p>
                </div>
            </div>
        );
    }

    // Se não está autenticado, redireciona para login
    if (!user) {
        return <Redirect to="/login" />;
    }

    // Se está autenticado, mostra o componente
    return <Component />;
}