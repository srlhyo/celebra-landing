export default function InviteCardStatic() {
  return (
    <div className="relative w-56 sm:w-64 aspect-[2.4/3.3] mx-auto">
      <div className="absolute inset-0 rounded-2xl border border-dourado/40 translate-x-2 translate-y-2" />
      <div className="absolute inset-0 rounded-2xl bg-marfim shadow-2xl shadow-black/50 flex flex-col items-center justify-center gap-4 px-8">
        <div className="w-16 h-[3px] bg-dourado rounded-full" />
        <div className="w-20 h-[3px] bg-dourado/70 rounded-full" />
        <div className="w-10 h-[3px] bg-dourado/50 rounded-full mt-6" />
        <div className="w-14 h-[3px] bg-dourado/50 rounded-full" />
      </div>
    </div>
  );
}
