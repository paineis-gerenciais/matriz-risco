// Configuração do dashboard publicado no GitHub Pages.
// Preencha com as credenciais do SEU projeto Firebase.
// Onde encontrar: Firebase Console > ⚙️ Configurações do projeto > Seus apps > app Web > SDK setup and configuration.
//
// IMPORTANTE SOBRE SEGURANÇA:
// Estas chaves (apiKey, projectId, etc.) NÃO são secretas — elas identificam o projeto,
// não autenticam ninguém. Quem protege os dados são as REGRAS DO FIRESTORE (firestore.rules)
// e, opcionalmente, a restrição da apiKey por domínio (ver README, seção "Restringir a API key").
window.MATRIZ_RISCO_CONFIG = {
  FIREBASE_CONFIG: {
    apiKey: "AIzaSyCJqGLNao-ezVGW9PwhOUZAl0AX90--iQo",
    authDomain: "matriz-de-risco-9d78a.firebaseapp.com",
    projectId: "matriz-de-risco-9d78a",
    storageBucket: "matriz-de-risco-9d78a.firebasestorage.app",
    messagingSenderId: "876703093600",
    appId: "1:876703093600:web:965c88f6006dd606578405"
  },

  // Nome da coleção do Firestore onde as versões do dashboard são salvas.
  COLLECTION: "risk_matrix_versions",

  // Quantas versões mais recentes manter por dashboard (as mais antigas são apagadas
  // automaticamente a cada novo salvamento, evitando crescimento infinito da base).
  MAX_VERSIONS_PER_DASHBOARD: 50
};
