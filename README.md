# Celebra — Landing Page

Landing page do produto **Celebra**, construída com Vite + React + Tailwind CSS v4 + Framer Motion + GSAP + Three.js (React Three Fiber).

## Como correr localmente

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Build de produção

```bash
npm run build
```

Os ficheiros finais ficam em `dist/`. Podes arrastar essa pasta para o Netlify, ou ligar o repositório directamente (build command: `npm run build`, publish directory: `dist`).

## Estrutura

```
src/
  components/       → peças reutilizáveis (Header, Rodapé, cartão 3D, dividers, placeholders visuais)
  sections/         → cada secção da página (Hero, Problema, Solução, Como Funciona, Funcionalidades, Prova Social, Preços, CTA Final)
  hooks.js          → detecção de prefers-reduced-motion e mobile
  index.css         → tokens de design (cores, tipografia) via @theme do Tailwind v4
```

## Notas importantes antes de publicar

- **Imagens**: a secção "A solução" já usa 3 imagens reais geradas por IA (`src/assets/img/`) — mesa de evento, ramo de flores e canapés. Se quiseres trocar por outras, basta substituir os ficheiros `.jpg` na mesma pasta com o mesmo nome, ou actualizar os imports em `Solucao.jsx`.
- **Preços**: os valores do plano Essencial (29€/mês) são ilustrativos, como indicado no briefing — revê antes de publicar.
- **Domínio/marca "Celebra"**: por confirmar disponibilidade.
- **3D no hero**: corre em desktop sem `prefers-reduced-motion`; em mobile ou com motion reduzido, mostra automaticamente uma versão estática em CSS (`InviteCardStatic.jsx`) — sem custo de WebGL.
# celebra-landing
