# 📝 Como Adicionar Novas Notícias no Droid_Core

Para adicionar notícias no seu blog, você só precisa editar um arquivo. Siga os passos:

## 1. Localize o arquivo
Abra a pasta `src/data/` e edite o arquivo `posts.ts`.

## 2. Estrutura de uma Notícia
Cada notícia deve seguir este formato dentro da lista (array) `MOCK_POSTS`:

```typescript
{
  id: 'nome-da-noticia-sem-espaco',
  title: 'Título Chamativo da Notícia',
  excerpt: 'Um pequeno resumo que aparece na página inicial.',
  content: 'O texto completo da notícia.',
  category: 'Emuladores', // Opções: 'Emuladores', 'Jogos', 'Hardware', 'Tutoriais', 'Reviews'
  author: 'Seu Nome',
  date: 'Dia Mês 2026',
  imageUrl: 'https://link-da-imagem.com/foto.jpg',
  readTime: '5 min',
  isFeatured: true, // Use TRUE apenas para a notícia que deve ficar no TOPO do site
}
```

## 3. Dicas Úteis
- **Imagens**: Recomendo usar links de imagens do [Unsplash](https://unsplash.com) para fotos genéricas de alta qualidade ou links diretos de sites de notícias de games.
- **Destaque**: Apenas **uma** notícia deve ter o `isFeatured: true`. Se você colocar em várias, a última ganhará o destaque.
- **Categorias**: Se você digitar a categoria errado (ex: "Emulador" em vez de "Emuladores"), o site pode dar erro de tipo. Siga as opções listadas acima.

## 4. Salvando e Publicando
Após alterar o arquivo e salvar, o site atualizará automaticamente na prévia do AI Studio!
