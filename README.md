# marcelodev.tech

Portfólio pessoal de **Marcelo Lucas** — Software Engineer.

🔗 **[marcelodev.tech](https://marcelodev.tech)**

## Stack

- **[Next.js 15](https://nextjs.org)** — App Router, todas as rotas pré-renderizadas estáticas
- **React 18** + **TypeScript**
- **[Tailwind CSS](https://tailwindcss.com)** — estilização
- **[Framer Motion](https://www.framer.com/motion/)** — animações de entrada
- **[next-themes](https://github.com/pacocoursey/next-themes)** — tema claro/escuro
- **[Web3Forms](https://web3forms.com)** — formulário de contato sem backend

Site bilíngue (pt-BR / en) com troca de idioma no client, sem rotas duplicadas.

## Rodando localmente

```bash
npm install
cp .env.example .env.local   # preencha a chave do Web3Forms
npm run dev
```

Abra [localhost:3000](http://localhost:3000).

## Variáveis de ambiente

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_KEY` | Chave de acesso do [Web3Forms](https://web3forms.com), usada pelo formulário de contato. Gratuita. |

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
