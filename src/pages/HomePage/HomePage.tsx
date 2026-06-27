import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const START_TIME = new Date('2026-06-27T20:23:00');

function calcElapsed(now: Date) {
  const diff = now.getTime() - START_TIME.getTime();
  if (diff < 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 };
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds, totalSeconds };
}

export default function HomePage() {
  const [elapsed, setElapsed] = useState(() => calcElapsed(new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsed(calcElapsed(new Date()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const daysDisplay = useMemo(() => String(elapsed.days), [elapsed.days]);

  return (
    <div className="relative min-h-screen bg-background flex items-center justify-center overflow-hidden">
      {/* 背景装饰层 */}
      <div className="absolute inset-0 pointer-events-none select-none">
        {/* 径向渐变光晕 - 模拟果肉透光 */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/40 blur-2xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl" />

        {/* 荔枝剪影装饰 */}
        <motion.div
          className="absolute top-[12%] right-[8%] opacity-[0.06]"
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="120" height="120" viewBox="0 0 120 120" fill="currentColor" className="text-primary">
            <circle cx="60" cy="60" r="48" />
            <ellipse cx="52" cy="52" rx="16" ry="20" transform="rotate(-20 52 52)" fill="hsl(30 25% 96%)" opacity="0.4" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-[15%] left-[6%] opacity-[0.05]"
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
            <circle cx="50" cy="50" r="40" />
            <ellipse cx="44" cy="44" rx="13" ry="16" transform="rotate(-15 44 44)" fill="hsl(30 25% 96%)" opacity="0.35" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute top-[40%] left-[10%] opacity-[0.04]"
          animate={{ y: [0, -8, 0], rotate: [0, 4, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="80" height="80" viewBox="0 0 80 80" fill="currentColor" className="text-primary">
            <circle cx="40" cy="40" r="32" />
            <ellipse cx="35" cy="35" rx="10" ry="13" transform="rotate(-25 35 35)" fill="hsl(30 25% 96%)" opacity="0.4" />
          </svg>
        </motion.div>

        {/* 散落花瓣装饰 */}
        {[
          { top: '18%', left: '22%', delay: 0, size: 8 },
          { top: '25%', right: '18%', delay: 1.2, size: 6 },
          { top: '60%', left: '14%', delay: 2.5, size: 7 },
          { top: '70%', right: '12%', delay: 0.8, size: 5 },
          { top: '80%', left: '28%', delay: 3.2, size: 6 },
          { top: '35%', right: '25%', delay: 1.8, size: 5 },
        ].map((petal, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{ top: petal.top, left: petal.left, right: petal.right, width: petal.size, height: petal.size }}
            animate={{ y: [0, -16, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4 + i * 0.5, delay: petal.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* 主内容区 */}
      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-16 md:py-24 text-center">
        {/* 入场动画包裹 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 顶部装饰心形 */}
          <motion.div
            className="mb-6 inline-flex items-center justify-center"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Heart className="size-8 text-primary/60" fill="currentColor" />
          </motion.div>

          {/* 主标题 */}
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wide leading-tight"
            style={{ fontFamily: "'ZCOOL XiaoWei', 'Noto Sans SC', serif" }}
          >
            <span className="text-foreground">纪念</span>
            <span className="text-primary">荔枝</span>
            <span className="text-foreground">第 </span>
            <motion.span
              key={daysDisplay}
              className="inline-block text-primary"
              initial={{ scale: 1.05, opacity: 0.6 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {daysDisplay}
            </motion.span>
            <span className="text-foreground"> 天</span>
          </h1>

          {/* 精确计时卡片 */}
          <motion.div
            className="mt-8 mx-auto max-w-xs bg-card/80 backdrop-blur-sm rounded-2xl border border-border/50 shadow-sm px-6 py-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm text-muted-foreground mb-3">已经过去了</p>
            <div className="flex items-center justify-center gap-1 text-lg md:text-2xl font-medium text-foreground tabular-nums">
              <TimeUnit value={elapsed.days} label="天" />
              <Separator />
              <TimeUnit value={elapsed.hours} label="时" />
              <Separator />
              <TimeUnit value={elapsed.minutes} label="分" />
              <Separator />
              <TimeUnit value={elapsed.seconds} label="秒" highlight />
            </div>
          </motion.div>

          {/* 底部寄语 */}
          <motion.p
            className="mt-10 text-sm text-muted-foreground/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            始于 2026.06.27 20:23
          </motion.p>
          <motion.p
            className="mt-2 text-xs text-muted-foreground/50 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            每一秒，都值得纪念
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

/* ─── 子组件 ─── */

function TimeUnit({ value, label, highlight }: { value: number; label: string; highlight?: boolean }) {
  const display = String(value).padStart(2, '0');
  return (
    <span className="inline-flex items-baseline gap-0.5">
      <motion.span
        key={display}
        className={highlight ? 'text-primary' : 'text-foreground'}
        initial={{ scale: 1.12, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        {display}
      </motion.span>
      <span className="text-xs md:text-sm text-muted-foreground font-normal">{label}</span>
    </span>
  );
}

function Separator() {
  return <span className="text-muted-foreground/40 mx-0.5">:</span>;
}
