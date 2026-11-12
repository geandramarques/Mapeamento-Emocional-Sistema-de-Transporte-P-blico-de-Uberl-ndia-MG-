# Mapa emocional participativo

Arquitetura: GitHub Pages (HTML/CSS/JS estático) + Leaflet/OpenStreetMap + Firebase Authentication + Cloud Firestore.

## Arquivos
- `index.html` – página do participante (login anônimo, cria pontos/linhas)
- `admin.html` – página do pesquisador (login e-mail/senha, vê tudo, exporta GeoJSON)
- `config.js` – configuração do Firebase, categorias emocionais, centro do mapa
- `firestore.rules` – regras de segurança

## Passo a passo
1. **Firebase**: em https://console.firebase.google.com crie um projeto (plano Spark, gratuito).
2. **App web**: Configurações do projeto > Seus apps > `</>`. Copie o objeto `firebaseConfig` para `config.js`.
3. **Authentication** > Sign-in method: ative **Anônimo** e **E-mail/senha**.
4. **Authentication** > Users: crie a conta do pesquisador (e-mail + senha forte). Para `email_verified` ficar `true`, envie/verifique o e-mail
   (ou remova essa linha das regras se preferir não verificar).
5. **Firestore Database**: crie o banco (modo produção) e, em Regras, cole `firestore.rules`
   (troque `SEU-EMAIL@exemplo.com` pelo e-mail do pesquisador) e publique.
6. **Authentication** > Settings > Domínios autorizados: adicione `SEU-USUARIO.github.io`.
7. **GitHub**: crie um repositório público, envie estes arquivos na raiz, depois
   Settings > Pages > Source: *Deploy from a branch* > `main` / `/ (root)`.
8. Acesse `https://SEU-USUARIO.github.io/REPOSITORIO/` (participante) e `.../admin.html` (pesquisador).

## Observações
- As chaves do `firebaseConfig` são públicas por desenho; a proteção está nas regras do Firestore.
- Participantes anônimos são identificados por UID por navegador/dispositivo: limpar dados do navegador gera novo UID.
- Em Authentication > Settings, defina limites de uso e ative o App Check se esperar muitos acessos.
- Pesquisa com seres humanos: inclua TCLE/aviso de privacidade na página e valide com o comitê de ética (CEP/CONEP) antes da coleta.
