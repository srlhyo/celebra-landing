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

- **Imagens de produto**: a secção "A solução" e "Como funciona" usam 3 screenshots reais da interface (`src/assets/img/produto-*.jpg`), geradas a partir da app real ("Do Luxo à Mesa") com a marca trocada para Celebra via IA generativa. Se regenerares novas versões, mantém os mesmos nomes de ficheiro ou actualiza os imports em `Solucao.jsx` e `ComoFunciona.jsx`.
- **Hero**: o cartão 3D agora desenha a face do convite num canvas 2D (monograma, nome da marca, linhas decorativas) e aplica-a como textura — fica nítido e on-brand, em vez de barras genéricas. As partículas estão em duas camadas (ambiente + concentradas junto ao cartão).
- **"Como funciona"**: passou a ser interactivo — cada passo é clicável e troca a imagem de preview à direita, usando as mesmas screenshots de produto.
- **"O dia a dia sem isto"**: ganhou uma colagem visual (mensagens, notas, abas dispersas, inclinadas) ao lado da lista de sintomas, e uma frase de transição que liga à secção seguinte.
- **Preços**: os valores do plano Essencial (29€/mês) são ilustrativos, como indicado no briefing — revê antes de publicar.
- **Domínio/marca "Celebra"**: por confirmar disponibilidade.
