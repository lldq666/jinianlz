export default function Decorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[hsl(30,30%,90%)] opacity-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(30,25%,92%)] opacity-40 blur-3xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 bg-gradient-to-b from-[hsl(30,30%,90%)] to-transparent opacity-40" />

      <div className="absolute top-20 right-16 w-32 h-32 rounded-full bg-[hsl(8,55%,52%)] opacity-6 blur-2xl" />
      <div className="absolute top-48 left-20 w-48 h-48 rounded-full bg-[hsl(8,55%,52%)] opacity-4 blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-24 h-24 rounded-full bg-[hsl(8,55%,52%)] opacity-5 blur-xl" />
      <div className="absolute bottom-24 left-24 w-56 h-56 rounded-full bg-[hsl(8,55%,52%)] opacity-3 blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full bg-[hsl(8,55%,52%)] opacity-7 blur-xl" />
      <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-full bg-[hsl(8,55%,52%)] opacity-4 blur-2xl" />
    </div>
  );
}