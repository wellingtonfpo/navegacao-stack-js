# Navegação com Stack – React Native + Expo (JavaScript)

Exemplo simples de navegação entre telas usando `@react-navigation/native-stack`.

## Estrutura

```
App.js                         -> configura o NavigationContainer e o Stack
src/screens/HomeScreen.js      -> tela inicial
src/screens/DetalhesScreen.js  -> recebe parâmetros (route.params)
src/screens/SobreScreen.js     -> tela simples
```

## Como executar

```bash
npm install
npx expo start
```

Abra com o app **Expo Go** no celular (QR Code) ou pressione `a` (Android) / `w` (web).

## Conceitos demonstrados

- `NavigationContainer` e `createNativeStackNavigator`
- `navigation.navigate('Tela', { params })` – ir para outra tela enviando dados
- `route.params` – receber dados
- `navigation.goBack()` e `navigation.popToTop()` – voltar
