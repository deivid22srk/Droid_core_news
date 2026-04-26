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
  }
];

