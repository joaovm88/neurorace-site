// Arquivo: client/src/pages/FinalizarLogin.tsx
// Documentação: Página que "apanha" o link do e-mail, finaliza o login
// e pede os dados extra (Nome, Telefone) se for um novo usuário.

import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// 1. Importações do Firebase para completar o login
import { auth, db } from "@/firebaseConfig";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

// Define os 2 estágios desta página
type Step = "loading" | "details";

export function FinalizarLogin() {
    const [step, setStep] = useState<Step>("loading");
    const [error, setError] = useState<string | null>(null);

    // Estados para o formulário de detalhes (se for novo usuário)
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [_, setLocation] = useLocation();

    // 2. Efeito que corre assim que a página carrega
    useEffect(() => {
        const completeSignIn = async () => {
            // Verifica se a URL atual é um link de login
            if (isSignInWithEmailLink(auth, window.location.href)) {
                // Pega o e-mail que guardámos no localStorage
                let email = window.localStorage.getItem("emailForSignIn");
                if (!email) {
                    setError(
                        "E-mail não encontrado. Por favor, tente o login novamente desde o início."
                    );
                    return;
                }

                try {
                    // Tenta finalizar o login com o e-mail e o link
                    const userCredential = await signInWithEmailLink(
                        auth,
                        email,
                        window.location.href
                    );
                    const user = userCredential.user;

                    // Limpa o e-mail do localStorage
                    window.localStorage.removeItem("emailForSignIn");

                    // 3. Verificar se é NOVO USUÁRIO ou ANTIGO
                    const userDocRef = doc(db, "players", user.uid);
                    const userDoc = await getDoc(userDocRef);

                    if (userDoc.exists()) {
                        // USUÁRIO ANTIGO: Já tem dados, vai para o dashboard
                        setLocation("/dashboard");
                    } else {
                        // USUÁRIO NOVO: Pedir os dados extra (Nome, Telefone)
                        setStep("details");
                    }
                } catch (err) {
                    console.error(err);
                    setError("Link de login inválido ou expirado. Tente novamente.");
                }
            } else {
                setError("Link inválido.");
            }
        };

        completeSignIn();
    }, []); // O [] vazio faz isto correr apenas uma vez

    // 4. Função para salvar os detalhes do NOVO usuário
    const handleDetailsSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const user = auth.currentUser;
        if (!user) {
            setError("Não foi possível encontrar o seu utilizador. Tente novamente.");
            return;
        }

        try {
            // Salva os dados (Nome, Telefone, Email) no Firestore
            await setDoc(doc(db, "players", user.uid), {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: user.email, // Salva o e-mail verificado
            });

            // Cadastro completo! Vai para o dashboard
            setLocation("/dashboard");
        } catch (err) {
            console.error(err);
            setError("Falha ao salvar os seus dados. Tente novamente.");
        }
    };

    // 5. Renderização (O que o usuário vê)
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <Card className="mx-auto max-w-sm w-full">
                {step === "loading" && (
                    <CardContent className="p-6 text-center">
                        <p>A finalizar o seu login, por favor aguarde...</p>
                        {error && (
                            <p className="mt-4 text-sm text-red-600 dark:text-red-400">
                                {error}
                            </p>
                        )}
                    </CardContent>
                )}

                {step === "details" && (
                    <>
                        <CardHeader>
                            <CardTitle className="text-2xl">Quase lá!</CardTitle>
                            <CardDescription>
                                Vimos que é a sua primeira vez aqui. Por favor, complete o seu
                                cadastro.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleDetailsSubmit} className="grid gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="first-name">Primeiro nome</Label>
                                        <Input
                                            id="first-name"
                                            placeholder="Ana"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="last-name">Último nome</Label>
                                        <Input
                                            id="last-name"
                                            placeholder="Silva"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="phone">Telefone (com DDD)</Label>
                                    <Input
                                        id="phone"
                                        type="tel"
                                        placeholder="35 91234 5678"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                {error && (
                                    <p className="text-sm text-red-600 dark:text-red-400">
                                        {error}
                                    </p>
                                )}
                                <Button type="submit" className="w-full">
                                    Salvar e entrar no Dashboard
                                </Button>
                            </form>
                        </CardContent>
                    </>
                )}
            </Card>
        </main>
    );
}