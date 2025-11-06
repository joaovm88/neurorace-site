// Arquivo: client/src/pages/Login.tsx
// Documentação: Página onde o usuário pede o link de login.

import { useState } from "react";
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

// 1. Importações do Firebase para enviar o link
import { auth } from "@/firebaseConfig";
import { sendSignInLinkToEmail } from "firebase/auth";

export function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // 2. Configurações para o link de e-mail
    const actionCodeSettings = {
        // A URL para onde o usuário deve ser enviado DE VOLTA
        // após clicar no link do e-mail.
        // Usamos window.location.origin para funcionar em localhost E produção.
        url: `${window.location.origin}/finalizar-login`,
        handleCodeInApp: true, // Importante!
    };

    // 3. Função para enviar o link
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        try {
            // Envia o link para o e-mail do usuário
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);

            // 4. Salva o e-mail no "localStorage" do navegador
            // O Firebase recomenda isto para sabermos quem é o usuário
            // quando ele voltar do e-mail.
            window.localStorage.setItem("emailForSignIn", email);

            setSuccess("Link de login enviado! Verifique o seu e-mail.");
        } catch (error) {
            console.error("Erro ao enviar link de login:", error);
            if (error instanceof Error && 'code' in error) {
                const firebaseError = error as { code: string };
                if (firebaseError.code === 'auth/invalid-email') {
                    setError("O e-mail fornecido não é válido.");
                } else {
                    setError("Falha ao enviar o link. Tente novamente mais tarde.");
                }
            } else {
                setError("Ocorreu um erro inesperado. Tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
            <Card className="mx-auto max-w-sm w-full">
                <CardHeader>
                    <CardTitle className="text-2xl">Acessar Plataforma</CardTitle>
                    <CardDescription>
                        Digite o seu e-mail para enviarmos um link de login.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {!success ? (
                        <form onSubmit={handleSubmit} className="grid gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="email@exemplo.com"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {error && (
                                <p className="text-sm text-red-600 dark:text-red-400">
                                    {error}
                                </p>
                            )}

                            <Button type="submit" className="w-full" disabled={loading}>
                                {loading ? "A enviar..." : "Enviar link de login"}
                            </Button>
                        </form>
                    ) : (
                        <div className="text-center">
                            <p className="text-green-600 dark:text-green-400">{success}</p>
                            <p className="text-sm mt-2">
                                Pode fechar esta janela e verificar a sua caixa de entrada.
                            </p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </main>
    );
}