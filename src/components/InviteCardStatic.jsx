export default function InviteCardStatic() {
  return (
    <div className="relative w-56 sm:w-64 aspect-[2.4/3.3] mx-auto">
      <div className="absolute inset-0 rounded-2xl border border-dourado/40 translate-x-2 translate-y-2" />
      <div className="absolute inset-0 rounded-2xl bg-marfim shadow-2xl shadow-black/50 flex flex-col items-center px-8 py-10 border border-dourado/25">
        {/* Monograma */}
        <div className="w-14 h-14 rounded-full border border-dourado flex items-center justify-center font-display text-2xl text-dourado">
          C
        </div>
        <div className="w-12 h-px bg-dourado/60 my-4" />
        <span className="font-display text-2xl text-sepia">Celebra</span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-dourado-escuro mt-1">
          CONVITE DIGITAL
        </span>

        <div className="mt-auto w-full space-y-3">
          <div className="w-3/4 h-[3px] bg-dourado/60 rounded-full mx-auto" />
          <div className="w-1/2 h-[3px] bg-dourado/40 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}
