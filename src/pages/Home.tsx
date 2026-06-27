import TimeDisplay from '@/components/TimeDisplay';
import Decorations from '@/components/Decorations';
import { useTimeCounter } from '@/hooks/useTimeCounter';

export default function Home() {
  // 2026年6月27日 20:23:00 (北京时间)
  const startDate = new Date('2026-06-27T20:23:00+08:00');
  const timeDiff = useTimeCounter(startDate);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 背景渐变 */}
      <div
        className="fixed inset-0 bg-gradient-to-br from-rose-400 via-pink-500
          to-orange-400 animate-gradient-shift"
      />

      {/* 装饰元素 */}
      <Decorations />

      {/* 主内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <TimeDisplay timeDiff={timeDiff} />
      </div>
    </div>
  );
}