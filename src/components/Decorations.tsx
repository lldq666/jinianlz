export default function Decorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[hsl(30,30%,90%)] opacity-50 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(30,25%,92%)] opacity-40 blur-3xl" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 bg-gradient-to-b from-[hsl(30,30%,90%)] to-transparent opacity-40" />
    </div>
  );
}