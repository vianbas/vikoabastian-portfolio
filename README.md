# vikoabastian-portfolio

Personal portfolio site for **Viko Andri Bastian Manurung** — Fullstack Software Engineer & DevSecOps Engineer.

Live at **[vikoabastian.com](https://vikoabastian.com)**.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router, static export)
- React 19 · TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/)
- Hosted on [Cloudflare Pages](https://pages.cloudflare.com/)

## Local development

```bash
nvm use            # Node 24 (see .nvmrc)
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run build      # static export to ./out
```

## Project layout

```
app/               # routes, layout, metadata, icon, OG image
components/        # section components (Hero, About, Skills, …)
data/              # structured content (skills, experience, case studies)
public/            # static assets (resume PDF, …)
```

## Deployment

Static export targets Cloudflare Pages:

- **Build command:** `npm run build`
- **Output directory:** `out`
- **Environment:** `NODE_VERSION=24`

## License

[MIT](./LICENSE) © Viko Andri Bastian Manurung
