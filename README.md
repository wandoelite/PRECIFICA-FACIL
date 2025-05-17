# Precifica Fácil

Aplicativo para controle de custos e lucros, desenvolvido para ajudar empreendedores a calcular preços de forma eficiente.

## Funcionalidades

- Login e registro de usuários
- Cadastro de produtos e serviços
- Cálculo automático de preços
- Gestão de custos e lucros
- Relatórios detalhados
- Exportação de dados

## Requisitos

- Node.js 14 ou superior
- React Native CLI
- Android Studio (para desenvolvimento Android)
- Xcode (para desenvolvimento iOS)

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/precifica-facil.git
cd precifica-facil
```

2. Instale as dependências:
```bash
npm install
```

3. Para Android:
```bash
npm run android
```

4. Para iOS:
```bash
cd ios
pod install
cd ..
npm run ios
```

## Estrutura do Projeto

```
src/
  ├── components/     # Componentes reutilizáveis
  ├── screens/        # Telas do aplicativo
  ├── navigation/     # Configuração de navegação
  ├── services/       # Serviços e APIs
  ├── utils/          # Funções utilitárias
  └── assets/         # Imagens e recursos
```

## Tecnologias Utilizadas

- React Native
- React Navigation
- React Native Paper
- AsyncStorage
- React Native Chart Kit 