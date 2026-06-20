/**
 * Placeholder visual em CSS puro — o briefing pede imagens geradas por IA
 * (estilo editorial, paleta dourado/creme/carvão) para estas secções.
 * Este componente serve de substituto até essas imagens existirem:
 * basta trocar por uma <img src="..."> quando estiverem prontas.
 */
export default function VisualPlaceholder({ variant = 'mesa', className = '' }) {
  const variants = {
    mesa: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#3D2F1A" />
        <ellipse cx="200" cy="220" rx="180" ry="20" fill="#0F0D0A" opacity="0.4" />
        <rect x="60" y="80" width="280" height="100" rx="4" fill="#FAF7F0" opacity="0.9" />
        {[100, 160, 220, 280].map((x) => (
          <circle key={x} cx={x} cy={130} r="14" fill="#C9A84C" opacity="0.85" />
        ))}
        <path d="M 60 80 Q 200 40 340 80" stroke="#C9A84C" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    ),
    flores: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#181410" />
        {[...Array(7)].map((_, i) => (
          <circle
            key={i}
            cx={60 + i * 50}
            cy={100 + (i % 3) * 40}
            r={18 + (i % 2) * 8}
            fill={i % 2 === 0 ? '#C9A84C' : '#E8DFC8'}
            opacity={0.5 + (i % 3) * 0.15}
          />
        ))}
      </svg>
    ),
    ambiente: (
      <svg viewBox="0 0 400 300" className="w-full h-full">
        <rect width="400" height="300" fill="#0F0D0A" />
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#C9A84C" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#0F0D0A" stopOpacity="0" />
        </radialGradient>
        <rect width="400" height="300" fill="url(#glow)" />
        {[...Array(20)].map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 400}
            cy={Math.random() * 300}
            r={Math.random() * 2 + 0.5}
            fill="#FAF7F0"
            opacity={Math.random() * 0.6 + 0.2}
          />
        ))}
      </svg>
    ),
  };

  return (
    <div className={`overflow-hidden rounded-2xl ${className}`}>
      {variants[variant] || variants.mesa}
    </div>
  );
}
