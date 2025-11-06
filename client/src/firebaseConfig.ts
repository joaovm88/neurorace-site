// Arquivo: client/src/firebaseConfig.ts
// Documentação: Este arquivo inicializa e exporta os serviços do
// Firebase (Autenticação e Banco de Dados Firestore).

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

//
// INSTRUÇÃO: Copie os 3 valores secretos que você
// mostrou no seu vídeo e cole-os abaixo.
//
const firebaseConfig = {
    // ⬇️ Copie o valor da "apiKey" da tela do seu vídeo e cole aqui ⬇️
    apiKey: "AIzaSyBKNlNVAJXTcJf75zljVMUdk9wR8Ouyvcc",

    // --- Valores que já tínhamos ---
    authDomain: "neurorace-app.firebaseapp.com",
    projectId: "neurorace-app",
    storageBucket: "neurorace-app.firebasestorage.app",
    // -----------------------------

    // ⬇️ Copie o "messagingSenderId" da tela do seu vídeo e cole aqui ⬇️
    messagingSenderId: "482919413925",

    // ⬇️ Copie o "appId" da tela do seu vídeo e cole aqui ⬇️
    appId: "1:482919413925:web:e0b7ceb47e22e79b1eb54c"
};

// --- Não precisa editar abaixo desta linha ---

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// 'db' é a nossa conexão com o banco de dados Firestore
export const db = getFirestore(app);

// 'auth' é a nossa conexão com o sistema de Autenticação
export const auth = getAuth(app);