# ☀️ SmartDesk [aplicativo] ☀️

Código fonte do aplicativo mobile de suporte de T.I., para priorização inteligente e gerenciamento de chamados.

<br>

## Início

Para começar a contribuir neste projeto, é necessário que você clone este repositório em sua máquina, e depois, siga os **passos** abaixo. Antes de executar os comandos, lembre-se de entrar na pasta do projeto, ou eles não vão funcionar.

<br>

1. **Instalar as dependências**

  ```bash
  npm install
  ```

<br>

2. **Instalar o aplicativo Expo Go em seu celular**

<br>

3. **Rodar o aplicativo**

  ```bash
  npx expo start
  ```

  No output, talvez apareçam as opções possíveis para abrir o app:

  - (usaremos esta) -> [Expo Go](https://expo.dev/go)
  - [development build](https://docs.expo.dev/develop/development-builds/introduction/)
  - [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
  - [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)

  Após selecionar a opção Expo Go (talvez este passo de selecionar não seja necessário), um QR Code aparecerá no terminal. Escaneie este código usando o aplicativo que você instalou há pouco;

<br>

4. **Rodar os testes**

  ```bash
  npm run test
  ```

<br><br>

## Estrutura do projeto

```
  ├── assets                    // 🖼️ imagens, ícones, e coisas do tipo
  ├── src
  │   ├── app
  │   │   ├── index.tsx
  │   │   └── _layout.tsx
  │   ├── components            // 🧩 componentes reutilizáveis do app
  │   ├── hooks                 // 💭 chamadas de API, e outras integrações
  │   ├── screens               // 📱 telas do app
  │   ├── utils                 // 🛠️ funções pequenas de utilidade comum
  │   ├── constants.ts          // 🪨 valores constantes
  │   └── theme.ts              // 🖌️ cores, fontes, e medidas padrão
  └── app.json                  // ⚙️ configurações do expo
```

<br><br>

## Ajuda

- [Guia básico sobre GitHub](https://www.freecodecamp.org/portuguese/news/o-guia-do-iniciante-para-o-git-e-o-github/)
- [Primeiros passos com React Native](https://reactnative.dev/docs/getting-started)