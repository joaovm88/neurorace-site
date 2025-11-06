// Arquivo: client/src/components/Navigation.tsx
// Documentação: Barra de navegação "inteligente" (VERSÃO CORRIGIDA)

import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "@/components/MobileMenu";
import { LogIn, LogOut, LayoutDashboard } from "lucide-react";

// 1. Importar o nosso hook de Autenticação e o Firebase
import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/firebaseConfig";
import { signOut } from "firebase/auth";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/ranking", label: "Ranking" },
    { href: "/equipe", label: "Equipe" },
    { href: "/premiacao", label: "Premiação" },
];

export function Navigation() {
    const [_, setLocation] = useLocation();

    // 2. Usar o hook de autenticação
    const { currentUser, loading } = useAuth();

    // 3. Função de Logout
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setLocation("/"); // Envia o utilizador para a Home após o logout
        } catch (error) {
            console.error("Erro ao fazer logout:", error);
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-6">
                <div className="flex items-center">
                    <Link href="/">
                        <img
                            src="/logo.png" // Certifique-se que tem um logo em /public/logo.png
                            alt="NeuroRace Logo"
                            className="h-8 w-auto cursor-pointer"
                            onError={(e) => (e.currentTarget.src = "/favicon.ico")} // Fallback
                        />
                    </Link>
                    <nav className="hidden md:flex md:items-center md:space-x-4 md:ml-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex items-center space-x-2">
                    {/* 4. Lógica Condicional de Botões */}
                    {!loading && (
                        <>
                            {currentUser ? (
                                // --- ESTADO: LOGADO ---
                                <div className="hidden md:flex md:items-center md:space-x-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={() => setLocation("/dashboard")}
                                    >
                                        <LayoutDashboard className="w-4 h-4 mr-2" />
                                        Meu Dashboard
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={handleLogout}
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sair
                                    </Button>
                                </div>
                            ) : (
                                // --- ESTADO: NÃO LOGADO ---
                                <Button
                                    className="hidden md:flex"
                                    size="sm"
                                    onClick={() => setLocation("/login")}
                                >
                                    <LogIn className="w-4 h-4 mr-2" />
                                    Entrar
                                </Button>
                            )}
                        </>
                    )}

                    {/* 5. Menu Mobile (VERSÃO CORRIGIDA) */}
                    {/* Passa as propriedades 'isLoggedIn' e 'onLogout' */}
                    <div className="md:hidden">
                        <MobileMenu
                            navItems={navItems}
                            isLoggedIn={!!currentUser}
                            onLogout={handleLogout}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}