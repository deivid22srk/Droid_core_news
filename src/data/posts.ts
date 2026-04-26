/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Post } from '../types';

export const MOCK_POSTS: Post[] = [
  {
    id: 'gemini-cli-termux-tutorial',
    title: 'Gemini CLI no Termux: IA do Google no seu Android',
    excerpt: 'Transforme seu Termux em uma central de inteligência artificial com o Gemini CLI. Guia rápido de instalação e configuração.',
    content: `O Gemini CLI é uma ferramenta poderosa que permite interagir com os modelos de linguagem do Google diretamente pelo terminal. No Android, via Termux, você pode automatizar tarefas, debugar código e gerar textos usando IA sem sair da linha de comando.

### Pré-requisitos

Antes de começar, certifique-se de ter o Node.js instalado no seu Termux (pkg install nodejs).

### Passo 1: Configuração do GYP

Para evitar erros de compilação de módulos nativos no Android/Termux, execute o comando abaixo para configurar o ambiente GYP:

\`\`\`bash
mkdir -p "$HOME/.gyp" && printf "{'variables':{'android_ndk_path':''}}" > "$HOME/.gyp/include.gypi"
\`\`\`

### Passo 2: Instalação do Gemini CLI

Agora, instale o pacote globalmente usando o npm:

\`\`\`bash
npm install -g @google/gemini-cli
\`\`\`

### Passo 3: Configuração da API Key

Após a instalação, você precisará de uma chave de API do Google AI Studio. Configure-a no seu ambiente:

\`\`\`bash
export GOOGLE_API_KEY="SUA_CHAVE_AQUI"
\`\`\`

Agora é só rodar gemini e começar a usar! O Gemini CLI suporta análise de arquivos, conversas interativas e muito mais.`,
    category: 'Tutoriais',
    author: 'Droid_Core Team',
    date: '26 Abr 2026',
    imageUrl: 'https://raw.githubusercontent.com/deivid22srk/DROID_CORE_IMAGES/refs/heads/main/gemini_cli_termux.png',
    readTime: '3 min',
    isFeatured: true,
  },
  {
    id: 'proton-11-arm64-revolution',
    title: 'Proton 11: Revolução no Gaming ARM64',
    excerpt: 'Suporte oficial ARM64 e integração com FEX-Emu levam performance de consoles Android ao nível do Steam Deck.',
    content: 'O cenário de jogos em dispositivos ARM acaba de sofrer uma mudança sísmica com o lançamento do Proton 11 Beta pela Valve. Pela primeira vez, temos suporte oficial à arquitetura ARM64, permitindo que processadores Snapdragon rodem bibliotecas x86 com altíssima eficiência.\n\nIntegrando o emulador FEX-Emu diretamente no Proton, a camada de tradução reduziu drasticamente o overhead de performance. Títulos AAA agora rodam com fluidez em portáteis como AYN Odin 2 e Ayaneo Pocket, consolidando o uso de sistemas Linux como o Rocknix para transformar dispositivos Android em verdadeiros Steam Decks de bolso.\n\n**Testes Reais de Performance:**\nhttps://www.youtube.com/watch?v=DGgQiaha1Bg\n\nCom o Snapdragon X2 Elite chegando ao mercado, a fronteira entre PC e mobile torna-se inexistente. A Valve sinaliza um futuro onde a eficiência energética do ARM ditará o ritmo da próxima geração de portáteis.',
    category: 'Hardware',
    author: 'Droid_Core Team',
    date: '25 Abr 2026',
    imageUrl: 'https://raw.githubusercontent.com/deivid22srk/DROID_CORE_IMAGES/refs/heads/main/proton-11-arm64-revolution.png',
    readTime: '5 min',
    isFeatured: false,
  },
  {
    id: 'emucorev-ps-vita-android',
    title: 'EMUCOREV: O Novo Emulador de PS Vita Chega ao Android!',
    excerpt: 'Baseado no Vita3K, o EmuCoreV promete uma interface amigável e alta performance para rodar jogos de PS Vita no seu celular.',
    content: 'A cena de emulação para Android acaba de ganhar um novo reforço de peso: o EmuCoreV. Desenvolvido pela Sashkib Apps (mesmo criador do EmuCoreX), este novo emulador foca na biblioteca do PlayStation Vita.\n\nAtualmente em fase Alpha (v0.0.3), o EmuCoreV utiliza o núcleo do já conhecido Vita3K, mas traz melhorias significativas na experiência do usuário. Entre os destaques estão o suporte completo a drivers customizados (como os drivers Turnip para processadores Snapdragon) e suporte a Vulkan e OpenGL.\n\nNos testes iniciais, jogos como God of War Collection e Mortal Kombat foram vistos rodando a cerca de 30 FPS, embora o estado prematuro do software ainda resulte em alguns travamentos ocasionais. O emulador conta com um catálogo visual que facilita a navegação pela biblioteca de jogos, tornando a experiência muito mais próxima de um console real.\n\nO projeto é de código aberto e você pode acompanhar o desenvolvimento ou baixar as versões mais recentes diretamente no repositório oficial.\n\n**Repositório Oficial:** [https://github.com/sashkinbro/EmuCoreV](https://github.com/sashkinbro/EmuCoreV)',
    category: 'Emuladores',
    author: 'Droid_Core Team',
    date: '25 Abr 2026',
    imageUrl: 'https://raw.githubusercontent.com/deivid22srk/DROID_CORE_IMAGES/refs/heads/main/emucorev-ps-vita-android.png',
    readTime: '4 min',
    isFeatured: true,
  },
  {
    id: 'gladio-winlator-mali-revolution',
    title: 'Gladio: A Salvação do Winlator para GPUs Mali',
    excerpt: 'Novo wrapper OpenGL no Winlator v11.0 traz suporte inédito a dispositivos MediaTek e Exynos.',
    content: 'O Winlator v11.0 (Final) foi lançado e traz consigo uma inovação técnica chamada Gladio. Este novo wrapper OpenGL foi desenvolvido especificamente para resolver as limitações históricas de compatibilidade em dispositivos com GPUs Mali, comuns em chipsets MediaTek e Exynos.\n\nAnteriormente, usuários desses dispositivos enfrentavam grandes dificuldades para rodar títulos PC que dependiam de OpenGL. Com o Gladio, a biblioteca provê suporte através do driver host GLES, permitindo que jogos clássicos e modernos tenham um desempenho significativamente superior.\n\nTítulos como RAGE (2011), Wolfenstein: The New Order, Darkest Dungeon e diversos remasters de Final Fantasy já foram validados com sucesso usando este novo modo. Além do Gladio, a versão 11.0 atualiza o backend para Wine 10.10 e Box64 v0.4.0, além de incluir patches específicos para o Snapdragon 8 Elite.\n\nPara ativar, basta selecionar "Gladio" nas configurações de driver gráfico do seu container.\n\n**Repositório Oficial:** [https://github.com/brunodev85/winlator](https://github.com/brunodev85/winlator)',
    category: 'Emuladores',
    author: 'Droid_Core Team',
    date: '25 Abr 2026',
    imageUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop',
    readTime: '4 min',
    isFeatured: false,
  },
  {
    id: 'winlator-completo-historico-forks-2026',
    title: 'Winlator: Histórico Completo de Todas as Versões e Melhores Forks em 2026',
    excerpt: 'Guia definitivo com todas as 15 versões oficiais do Winlator, desde a v2.0 até a v11.0, além dos melhores forks como Ludashi, CMOD, WinlatorXR e mais.',
    content: `O Winlator se consolidou como a principal solução para rodar jogos e aplicativos Windows em dispositivos Android. Desde seu lançamento inicial em outubro de 2023, o projeto passou por 15 versões oficiais, cada uma trazendo melhorias significativas de performance, compatibilidade e recursos exclusivos.

Além da versão oficial desenvolvida por brunodev85, a comunidade criou diversos forks especializados que atendem necessidades específicas, desde suporte aprimorado para GPUs Mali até experiências em Realidade Virtual.

## 📜 Histórico Completo das Versões Oficiais

### **Winlator v11.0 (Final)** - Setembro 2025
A versão mais recente traz inovações técnicas impressionantes:
- **Gladio**: Novo wrapper OpenGL experimental através de GLES, revolucionando o suporte para GPUs Mali
- **HUD Mode**: Monitoramento em tempo real de FPS e recursos do sistema
- Instalação de componentes DXVK/WineD3D/VKD3D via arquivo
- Interface aprimorada para seleção de drivers gráficos
- Box64 v0.4.0 e Mesa Turnip v26.1.0 com patches para A8XX
- Suporte a múltiplos controladores e vibração
- Temas claro/escuro
- Wine 10.10 com melhorias de compatibilidade

### **Winlator v10.1 (Hotfix)** - Julho 2025
Focada em correções e funcionalidades multimídia:
- Correções para inicialização do Steam Client
- Adicionado AdrenoTools ao Vortek
- **Suporte MIDI**: Implementação completa de entrada/saída MIDI
- Controle por controladores MIDI externos
- Drive de CD-ROM virtual [X:] para jogos antigos
- Suporte a imagens ISO/BIN/CUE via libcdio
- Modo Picture-in-Picture (PiP)
- Idiomas Português e Russo
- dgVoodoo nos wrappers DX
- Box64 v0.3.6 e Turnip v25.1.0

### **Winlator v10.0 (Hotfix)** - Fevereiro 2025
Uma das maiores atualizações já lançadas:
- **GLIBC nativo**: Melhor performance de I/O
- **Vortek**: Novo driver gráfico experimental com suporte para Mali
- TextureCompressionBC para dispositivos sem suporte nativo
- Correção de animações em T-Pose em jogos D3D9
- Gerenciador de tarefas aprimorado
- GPUInfo no menu inicial
- Renderização direta no XServer e Vulkan WSI
- Box64 v0.3.4

### **Winlator v9.0** - Janeiro 2025
- Estreia do driver **Vortek** (experimental)
- Opção de instalar componentes individualmente (Box64/Turnip/DXVK)
- Driver ALSA aprimorado
- Forçar tela cheia para jogos de baixa resolução
- Box64 v0.3.2

### **Winlator v8.0 (Revision 1)** - Setembro 2024
Focada em interface e controles:
- Gerenciador de arquivos integrado
- Efeitos de tela (ajuste de cor, FXAA, shader CRT)
- Correção para Android 14 (SD Gen 3)
- Seleção de API de input: DirectInput ou XInput
- Opção de desativar input de mouse
- DXVK v2.4.1, Box64 v0.3.1, Turnip v24.3.0
- Workarounds para +20 jogos AAA

### **Winlator v7.1** - Junho 2024
- Plugin de áudio ALSA atualizado
- Correções de áudio em aplicações
- Turnip, Box86/Box64 atualizados

### **Winlator v7.0** - Junho 2024
- **WoW64 experimental**: Suporte a aplicações 32-bit em ambiente 64-bit
- **VKD3D**: Suporte a DirectX 12
- XInput aprimorado
- Controles de input renovados
- Logs de sistema
- Correção de vídeos de introdução (RE5, Lost Planet)

### **Winlator v6.1** - Abril 2024
- **Suporte XR (Realidade Virtual)** por lvonasek
- Configuração do driver Turnip
- Sensibilidade do cursor aprimorada

### **Winlator v6.0** - Março 2024
- Lupa integrada
- Personalização de wallpaper
- Suporte a mouse externo
- 7-Zip no menu de contexto
- APK unificado (sem OBB separado)

### **Winlator v5.0** - Fevereiro 2024
- Performance geral aprimorada
- Temas de desktop personalizáveis
- Correção de slowdown no teclado (GTA V)
- XInput para Batman Arkham City, Sleeping Dogs

### **Winlator v4.0** - Janeiro 2024
- **DirectInput/XInput nativo** para gamepads Android
- Controles de input significativamente melhorados

### **Winlator v3.2** - Dezembro 2023
- Cursor x11 aprimorado
- Presets para Box86/Box64
- Mais DX Wrappers disponíveis

### **Winlator v3.1** - Novembro 2023
- Velocidade do cursor ajustável
- Opção de instalar imagem OBB separada
- Interface renovada

### **Winlator v3.0** - Novembro 2023
- **PulseAudio** para melhor qualidade de som
- Seleção de versões do Box86/Box64 e Turnip
- Resolução customizável
- Gerenciador de tarefas
- Travamento de cursor opcional

### **Winlator v2.0** - Outubro 2023
- Primeira versão pública estável
- VirGL otimizado
- Instalação de Wine customizado (experimental)
- Múltiplos DXWrappers

## 🔀 Melhores Forks do Winlator em 2026

A comunidade transformou o Winlator em um ecossistema vibrante. Confira os forks mais relevantes:

### **1. Winlator Ludashi** (700⭐)
Desenvolvido por StevenMXZ, é o fork mais popular com recursos exclusivos:
- **FPS HUD avançado**: Mostra GPU, CPU, Watts e Temperatura
- **Limitador de FPS universal** para qualquer jogo
- Filtros visuais: Super Resolution, DLSS, HDR, Natural, CRT
- **Direct Rendering Mode**: Reduz latência ignorando renderização Windows
- Perfis de conteúdo Proton
- DXVK Sarek para GPUs Mali
- Última versão: v2.9 (Março 2026)

### **2. Winlator AMod** (680⭐)
Criado por afeimod, foca em compatibilidade estendida:
- Versões glibc e bionic
- Wine Staging 10.15 com Vulkan
- Suporte WOW64 aprimorado
- Patches específicos para Termux
- Múltiplas variantes (Amod1, Amod2, Amod3, Amod5)

### **3. Winlator Mali** (277⭐)
Desenvolvido por GunaCharanTeja para dispositivos MediaTek/Exynos:
- Otimizações específicas para GPUs Mali-G7x
- Drivers Turnip adaptados
- Versões: 1.9, 2.0 (Novembro 2024)

### **4. Winlator-CMOD** (168⭐)
Maintido por Stredohori, equilibra performance e estabilidade:
- Builds diárias com commits recentes
- Suporte a decompressão BCn via compute shader para Mali
- Variantes glibc e bionic
- Atualizações frequentes do Box64 e Mesa
- Última build: git-e994f7a (Janeiro 2026)

### **5. WinlatorXR** (120⭐)
Projeto especializado em Realidade Virtual/Mista:
- Suporte a headsets standalone OpenXR
- Compatibilidade com Play for Dream MR
- XrAPI 0.2
- Baseado no CMOD v13
- Última versão: blit16 (Abril 2026)

### **6. Winlator-Neo** (6⭐)
Fork recente de celeste667:
- Foco em modernização da base de código
- Versões: v1.0.0 e v2.0.0 (Abril 2026)

## 📊 Comparativo de Performance

| Versão | Box64 | Turnip | DXVK | Destaque |
|--------|-------|--------|------|----------|
| v11.0 | v0.4.0 | v26.1.0 | Incluído | Gladio (Mali) |
| v10.1 | v0.3.6 | v25.1.0 | Incluído | MIDI + PiP |
| v10.0 | v0.3.4 | v25.0.0 | Incluído | Vortek + GLIBC |
| Ludashi 2.9 | Variável | Variável | Sarek | Direct Rendering |

## 🎯 Qual Versão Escolher?

- **Snapdragon (Adreno)**: Winlator Oficial v11.0 ou Ludashi 2.9
- **MediaTek/Exynos (Mali)**: Winlator v11.0 com Gladio ou WinlatorMali
- **Realidade Virtual**: WinlatorXR blit16
- **Estabilidade máxima**: Winlator-CMOD builds recentes
- **Recursos extras**: Ludashi com filtros e HUD avançado

## 🔗 Links Oficiais

- **Winlator Oficial**: [github.com/brunodev85/winlator](https://github.com/brunodev85/winlator)
- **Winlator Ludashi**: [github.com/StevenMXZ/Winlator-Ludashi](https://github.com/StevenMXZ/Winlator-Ludashi)
- **Winlator-CMOD**: [github.com/Stredohori/Winlator-CMOD](https://github.com/Stredohori/Winlator-CMOD)
- **WinlatorXR**: [github.com/WinlatorXR/WinlatorXR](https://github.com/WinlatorXR/WinlatorXR)
- **Winlator AMod**: [github.com/afeimod/winlator-mod](https://github.com/afeimod/winlator-mod)

O Winlator continua evoluindo rapidamente, com a comunidade brasileira liderando grande parte do desenvolvimento. Seja para gaming tradicional, experimentação em VR ou compatibilidade com hardware específico, existe uma versão ideal para cada usuário Android.`,
    category: 'Emuladores',
    author: 'Droid_Core Team',
    date: '26 Abr 2026',
    imageUrl: 'https://raw.githubusercontent.com/deivid22srk/DROID_CORE_IMAGES/refs/heads/main/winlator-all-versions-history.png',
    readTime: '12 min',
    isFeatured: false,
  }
];

