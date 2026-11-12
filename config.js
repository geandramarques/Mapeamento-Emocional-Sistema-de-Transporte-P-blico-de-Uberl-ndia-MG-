// Cole aqui a configuração do seu app web do Firebase
// (Console Firebase > Configurações do projeto > Seus apps > Config).
// Essas chaves podem ser públicas: quem protege os dados são as regras do Firestore.
export const firebaseConfig = {
  apiKey: "COLE_AQUI",
  authDomain: "SEU-PROJETO.firebaseapp.com",
  projectId: "SEU-PROJETO",
  appId: "COLE_AQUI"
};

// Categorias emocionais (edite livremente; use as mesmas no firestore.rules)
export const EMOTIONS = {
  medo:        { label: "Medo",        color: "#c0392b" },
  ansiedade:   { label: "Ansiedade",   color: "#e67e22" },
  desconforto: { label: "Desconforto", color: "#f1c40f" },
  seguranca:   { label: "Segurança",   color: "#27ae60" },
  tranquilidade:{ label: "Tranquilidade", color: "#2980b9" }
};

// Centro inicial do mapa (Uberlândia-MG)
export const MAP_CENTER = [-18.9186, -48.2772];
export const MAP_ZOOM = 13;
