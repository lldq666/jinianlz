export default function Decorations() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* 漂浮的圆形装饰 */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-pink-300/20 animate-float-1" />
      <div className="absolute top-20 right-20 w-20 h-20 rounded-full bg-orange-300/20 animate-float-2" />
      <div className="absolute bottom-30 left-30 w-24 h-24 rounded-full bg-purple-300/20 animate-float-3" />
      <div className="absolute bottom-20 right-10 w-18 h-18 rounded-full bg-rose-300/20 animate-float-4" />

      {/* 漂浮的心形装饰 */}
      <div className="absolute top-40 left-1/4 text-4xl text-pink-400/30 animate-float-heart-1">
        ❤
      </div>
      <div className="absolute top-60 right-1/3 text-3xl text-orange-400/30 animate-float-heart-2">
        ❤
      </div>
      <div className="absolute bottom-40 left-1/3 text-5xl text-rose-400/30 animate-float-heart-3">
        ❤
      </div>

      {/* 背景渐变光晕 */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-orange-400/20 to-transparent rounded-full blur-3xl animate-pulse-slow-delay" />
    </div>
  );
}