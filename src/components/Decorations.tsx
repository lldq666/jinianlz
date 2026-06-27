export default function Decorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 柔和的果肉光晕 */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[hsl(8,40%,92%)] opacity-60 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[hsl(30,25%,92%)] opacity-50 blur-3xl" />

      {/* 荔枝剪影装饰 */}
      <div className="absolute top-20 left-16 opacity-10 animate-float-1">
        <LycheeIcon size={80} color="hsl(8,55%,52%)" />
      </div>
      <div className="absolute top-40 right-20 opacity-8 animate-float-2">
        <LycheeIcon size={60} color="hsl(8,55%,52%)" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-6 animate-float-3">
        <LycheeIcon size={100} color="hsl(8,55%,52%)" />
      </div>
      <div className="absolute bottom-20 right-1/3 opacity-10 animate-float-4">
        <LycheeIcon size={70} color="hsl(8,55%,52%)" />
      </div>

      {/* 顶部柔光 */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-40 bg-gradient-to-b from-[hsl(8,40%,92%)] to-transparent opacity-50" />
    </div>
  );
}

interface LycheeIconProps {
  size: number;
  color: string;
}

function LycheeIcon({ size, color }: LycheeIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 果实主体 */}
      <ellipse cx="32" cy="36" rx="22" ry="20" fill={color} />
      {/* 顶部叶子 */}
      <path d="M32 16 L28 8 L32 12 L36 8 Z" fill="hsl(120,40%,40%)" />
      <path d="M32 16 L24 10 L28 14 L32 12 Z" fill="hsl(120,40%,35%)" />
      <path d="M32 16 L40 10 L36 14 L32 12 Z" fill="hsl(120,40%,35%)" />
      {/* 纹理斑点 */}
      <circle cx="22" cy="30" r="2" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="30" cy="28" r="1.5" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="38" cy="32" r="2" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="26" cy="40" r="1.5" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="35" cy="42" r="2" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="42" cy="38" r="1.5" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="24" cy="35" r="1" fill="hsl(8,45%,45%)" opacity="0.5" />
      <circle cx="40" cy="28" r="1" fill="hsl(8,45%,45%)" opacity="0.5" />
    </svg>
  );
}