export default function Eyebrow({ children, light = false }) {
  return (
    <span
      className={`font-mono text-xs tracking-[0.2em] uppercase ${
        light ? 'text-sepia' : 'text-dourado'
      }`}
    >
      {children}
    </span>
  );
}
