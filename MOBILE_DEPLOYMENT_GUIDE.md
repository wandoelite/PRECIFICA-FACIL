# Guia de Implementação Mobile - Play Store

## Visão Geral
Este guia fornece instruções completas para transformar seu aplicativo web Preço Fácil em um aplicativo Android e publicá-lo na Google Play Store para venda.

## Pré-requisitos

### Ferramentas Necessárias
- Node.js (versão 16 ou superior)
- Android Studio
- Conta de desenvolvedor Google Play Console ($25 taxa única)
- Git

### Conhecimentos Recomendados
- Conhecimento básico de terminal/linha de comando
- Familiaridade com Android Studio (básico)

## Fase 1: Configuração do Projeto Mobile

### 1.1 Instalação das Dependências Capacitor

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
```

### 1.2 Inicialização do Capacitor

```bash
npx cap init
```

**Configurações importantes:**
- App ID: `app.lovable.5bebcf5ca80b40f0aa6c27ae242b4667`
- App Name: `preco-facil`

### 1.3 Configuração do capacitor.config.ts

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.5bebcf5ca80b40f0aa6c27ae242b4667',
  appName: 'preco-facil',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 3000,
      launchAutoHide: true,
      backgroundColor: "#ffffffff",
      androidSplashResourceName: "splash",
      androidScaleType: "CENTER_CROP",
      showSpinner: false,
      androidSpinnerStyle: "large",
      iosSpinnerStyle: "small",
      spinnerColor: "#999999",
      splashFullScreen: true,
      splashImmersive: true,
      layoutName: "launch_screen",
      useDialog: true,
    },
  },
};

export default config;
```

## Fase 2: Preparação para Android

### 2.1 Adicionar Plataforma Android

```bash
npx cap add android
```

### 2.2 Build do Projeto

```bash
npm run build
npx cap sync
```

### 2.3 Configuração do Android Studio

1. Abra o Android Studio
2. Abra o projeto: `File > Open > [seu-projeto]/android`
3. Aguarde a sincronização do Gradle

## Fase 3: Configurações de Produção

### 3.1 Configuração do build.gradle (app level)

Edite `android/app/build.gradle`:

```gradle
android {
    compileSdkVersion 34
    defaultConfig {
        applicationId "app.lovable.5bebcf5ca80b40f0aa6c27ae242b4667"
        minSdkVersion 22
        targetSdkVersion 34
        versionCode 1
        versionName "1.0.0"
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }
    
    buildTypes {
        release {
            minifyEnabled true
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
            signingConfig signingConfigs.release
        }
    }
}
```

### 3.2 Criação da Keystore

```bash
keytool -genkey -v -keystore preco-facil-release.keystore -alias preco-facil -keyalg RSA -keysize 2048 -validity 10000
```

**Importante:** Guarde a senha e informações da keystore em local seguro!

### 3.3 Configuração do Signing

Crie `android/app/keystore.properties`:

```properties
storePassword=SUA_SENHA_STORE
keyPassword=SUA_SENHA_KEY
keyAlias=preco-facil
storeFile=../preco-facil-release.keystore
```

## Fase 4: Assets e Recursos

### 4.1 Ícones da Aplicação

Tamanhos necessários (em `android/app/src/main/res/`):
- `mipmap-hdpi/ic_launcher.png` (72x72)
- `mipmap-mdpi/ic_launcher.png` (48x48)
- `mipmap-xhdpi/ic_launcher.png` (96x96)
- `mipmap-xxhdpi/ic_launcher.png` (144x144)
- `mipmap-xxxhdpi/ic_launcher.png` (192x192)

### 4.2 Splash Screen

Configurar `android/app/src/main/res/drawable/splash.png`

### 4.3 Permissões no AndroidManifest.xml

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
```

## Fase 5: Build de Produção

### 5.1 Geração do APK Assinado

```bash
cd android
./gradlew assembleRelease
```

### 5.2 Geração do AAB (Recomendado)

```bash
./gradlew bundleRelease
```

O arquivo será gerado em: `android/app/build/outputs/bundle/release/app-release.aab`

## Fase 6: Google Play Console

### 6.1 Criação da Conta de Desenvolvedor

1. Acesse [Google Play Console](https://play.google.com/console)
2. Pague a taxa de registro ($25)
3. Complete seu perfil de desenvolvedor

### 6.2 Criação do App

1. Click "Criar app"
2. Preencha as informações:
   - Nome: "Preço Fácil - Calculadora de Preços"
   - Idioma padrão: Português (Brasil)
   - Tipo de app: App
   - Categoria: Negócios

### 6.3 Configurações Obrigatórias

#### Política de Privacidade
- URL necessária (hospede em seu site)
- Exemplo de conteúdo mínimo incluído no final deste guia

#### Classificação de Conteúdo
- Complete o questionário de classificação
- Para app de negócios: geralmente classificação livre

#### Público-alvo
- Defina faixa etária (recomendado: 18+)
- Não direcionado a crianças

## Fase 7: Upload e Publicação

### 7.1 Upload do AAB

1. Vá para "Produção" > "Criar nova versão"
2. Faça upload do arquivo `app-release.aab`
3. Preencha as notas da versão

### 7.2 Store Listing

#### Descrição Curta (80 caracteres)
```
Calcule preços de produtos com facilidade e precisão profissional.
```

#### Descrição Completa
```
🚀 Preço Fácil - A Calculadora de Preços Profissional

Transforme seu negócio com cálculos de preços precisos e profissionais!

✨ RECURSOS PRINCIPAIS:
• Cálculo automático de preços de venda
• Análise de margem de lucro em tempo real
• Gestão completa de custos e despesas
• Relatórios detalhados em PDF
• Interface intuitiva e fácil de usar

💼 IDEAL PARA:
• Pequenos empresários
• Comerciantes
• Prestadores de serviços
• E-commerce
• Vendedores autônomos

📊 FUNCIONALIDADES AVANÇADAS:
• Dashboard com métricas importantes
• Histórico de produtos cadastrados
• Controle de gastos adicionais
• Sistema de autenticação seguro
• Backup automático na nuvem

🎯 Por que escolher o Preço Fácil?
- Cálculos precisos baseados em fórmulas comerciais
- Interface brasileira adaptada ao mercado local
- Suporte a diferentes tipos de negócio
- Dados seguros com criptografia
- Atualizações constantes

Experimente GRÁTIS por 24 horas!
Depois apenas R$ 9,90/mês para ter acesso completo.

📞 SUPORTE TÉCNICO DEDICADO
Nossa equipe está pronta para ajudar você a maximizar seus lucros!
```

#### Screenshots
Necessário pelo menos 2, máximo 8:
- Tela principal do dashboard
- Calculadora de preços
- Relatórios
- Tela de login/cadastro

### 7.3 Configuração de Preços

1. Vá para "Monetização" > "Produtos"
2. Configure a assinatura:
   - ID do produto: `premium_monthly`
   - Preço: R$ 9,90/mês
   - Período de teste: 24 horas (1 dia)

## Fase 8: Estratégia de Monetização

### 8.1 Modelo de Negócio
- **Freemium**: 24h grátis, depois assinatura mensal
- **Preço**: R$ 9,90/mês (competitivo no mercado brasileiro)
- **Target**: Pequenos empresários e empreendedores

### 8.2 Marketing de Lançamento
1. **ASO (App Store Optimization)**:
   - Palavras-chave: calculadora preços, margem lucro, gestão produtos
   - Ícone atrativo e profissional
   - Screenshots de qualidade

2. **Estratégias de Divulgação**:
   - Redes sociais para empreendedores
   - Grupos de WhatsApp de negócios
   - Parcerias com influenciadores de negócios
   - Google Ads para palavras-chave específicas

### 8.3 Métricas de Sucesso
- Taxa de conversão de trial para pago: > 10%
- Retenção mensal: > 70%
- Rating na Play Store: > 4.2
- Downloads por mês: Meta inicial 1000+

## Fase 9: Pós-Lançamento

### 9.1 Monitoramento
- Firebase Analytics para comportamento do usuário
- Play Console para crashes e performance
- Reviews e feedback dos usuários

### 9.2 Atualizações
- Ciclo mensal de updates
- Correção de bugs prioritária
- Novas funcionalidades baseadas no feedback

### 9.3 Suporte ao Cliente
- Email de suporte: suporte@precoFacil.com.br
- FAQ integrada no app
- Chat de suporte (fase futura)

## Documentos Necessários

### Política de Privacidade (Exemplo)

```
POLÍTICA DE PRIVACIDADE - PREÇO FÁCIL

1. INFORMAÇÕES QUE COLETAMOS
- Email e nome para criação de conta
- Dados de produtos cadastrados pelo usuário
- Informações de uso do aplicativo

2. COMO USAMOS SUAS INFORMAÇÕES
- Fornecer os serviços do aplicativo
- Melhorar a experiência do usuário
- Comunicações sobre o serviço

3. COMPARTILHAMENTO DE DADOS
- Não vendemos ou compartilhamos dados pessoais
- Dados são armazenados com segurança na nuvem

4. SEUS DIREITOS
- Acesso aos seus dados
- Exclusão da conta a qualquer momento
- Portabilidade dos dados

5. CONTATO
Email: privacidade@precoFacil.com.br

Data da última atualização: [DATA ATUAL]
```

### Termos de Uso (Resumido)

```
TERMOS DE USO - PREÇO FÁCIL

1. O aplicativo destina-se a cálculos comerciais
2. Usuário responsável pela veracidade dos dados inseridos
3. Assinatura com renovação automática
4. Cancelamento a qualquer momento
5. Suporte técnico disponível por email

Aceito ao criar conta no aplicativo.
```

## Troubleshooting Comum

### Problemas de Build
```bash
# Limpar cache
./gradlew clean

# Rebuild
./gradlew assembleRelease --clean
```

### Problemas de Signing
- Verificar se keystore.properties está correto
- Confirmar senhas da keystore
- Verificar permissões do arquivo

### Rejeição na Play Store
- Verificar política de privacidade ativa
- Confirmar classificação de conteúdo
- Screenshots em qualidade adequada
- Descrição sem erros ortográficos

## Próximos Passos Após Publicação

1. **Semana 1**: Monitor crashes e reviews
2. **Semana 2**: Ajustes baseados no feedback
3. **Mês 1**: Primeira atualização com melhorias
4. **Mês 2**: Análise de métricas e otimizações
5. **Mês 3+**: Roadmap de novas funcionalidades

## Suporte e Recursos

- [Documentação Capacitor](https://capacitorjs.com/docs)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)
- [Android Developer Guide](https://developer.android.com/guide)

---

**Desenvolvido para maximizar o sucesso do seu app na Play Store! 🚀**

Para dúvidas sobre implementação, consulte também: https://lovable.dev/blogs/TODO