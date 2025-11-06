// Arquivo: client/src/components/MobileMenu.tsx
// Documentação: Menu mobile, atualizado para aceitar o estado de login.

import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { Menu, LogIn, LogOut, LayoutDashboard } from "lucide-react";

interface NavItem {
    href: string;
    label: string;
}

// 1. A interface que aceita as novas propriedades
interface MobileMenuProps {
    navItems: NavItem[];
    isLoggedIn: boolean;
    onLogout: () => void;
}

export function MobileMenu({
                               navItems,
                               isLoggedIn,
                               onLogout,
                           }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[320px]">
                <div className="p-4 h-full flex flex-col">
                    <nav className="flex-1">
                        <ul className="space-y-2">
                            {navItems.map((item) => (
                                <li key={item.href}>
                                    <SheetClose asChild>
                                        <Link
                                            href={item.href}
                                            className="block p-3 rounded-md text-base font-medium text-muted-foreground hover:bg-accent"
                                        >
                                            {item.label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 2. Lógica Condicional de Botões (Mobile) */}
                    <div className="border-t pt-4">
                        {isLoggedIn ? (
                            // --- ESTADO: LOGADO (Mobile) ---
                            <div className="space-y-2">
                                <SheetClose asChild>
                                    <Link href="/dashboard" className="w-full">
                                        <Button variant="outline" className="w-full justify-start">
                                            <LayoutDashboard className="w-4 h-4 mr-2" />
                                            Meu Dashboard
                                        </Button>
                                    </Link>
                                </SheetClose>
                                <SheetClose asChild>
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start text-red-500 hover:text-red-600"
                                        onClick={onLogout}
                                    >
                                        <LogOut className="w-4 h-4 mr-2" />
                                        Sair
                                    </Button>
                                </SheetClose>
                            </div>
                        ) : (
                            // --- ESTADO: NÃO LOGADO (Mobile) ---
                            <SheetClose asChild>
                                <Link href="/login" className="w-full">
                                    <Button className="w-full">
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Entrar
                                    </Button>
                                </Link>
                            </SheetClose>
                        )}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}