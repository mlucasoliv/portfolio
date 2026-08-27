# marcelodev.tech

Portfólio pessoal de **Marcelo Lucas** — Software Engineer.

🔗 **[marcelodev.tech](https://marcelodev.tech)**

## Stack

- **[Next.js 15](https://nextjs.org)** — App Router, todas as rotas pré-renderizadas estáticas
- **React 18** + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com)** — estilização
- **[Framer Motion](https://www.framer.com/motion/)** — animações de entrada
- **[next-themes](https://github.com/pacocoursey/next-themes)** — tema claro/escuro

Site bilíngue (pt-BR / en) com troca de idioma no client, sem rotas duplicadas.
Tipografia monoespaçada, escala única e paleta neutra.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [localhost:3000](http://localhost:3000).

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Nome, bio e navegação |
| `/about` | Sobre |
| `/experience` | Experiência |
| `/skills` | Skills |
| `/contact` | Email, LinkedIn e GitHub |

Não há variáveis de ambiente: o site é inteiramente estático.

## Scripts

| Comando | Ação |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm start` | Serve o build de produção |
| `npm run lint` | ESLint |

## Deploy

Hospedado na [Vercel](https://vercel.com). Cada push na `main` dispara um deploy automático.

Metadata, `sitemap.xml`, `robots.txt` e a imagem de Open Graph são gerados a partir de
`siteUrl` em [`lib/data.ts`](lib/data.ts) — trocar o domínio ali propaga para todos.
