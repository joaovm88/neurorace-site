// Arquivo: client/src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import App from "@/App";
import "@/index.css";

// 1. IMPORTE O NOSSO NOVO AUTH PROVIDER
import { AuthProvider } from "@/contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            {/* 2. EMBRULHE O <App /> COM O <AuthProvider /> */}
            <AuthProvider>
                <App />
            </AuthProvider>
        </QueryClientProvider>
    </React.StrictMode>
);