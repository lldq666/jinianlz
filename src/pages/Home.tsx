import TimeDisplay from '@/components/TimeDisplay';
import Decorations from '@/components/Decorations';
import { useTimeCounter } from '@/hooks/useTimeCounter';

export default function Home() {
  const startDate = new Date('2026-06-27T20:23:00+08:00');
  const timeDiff = useTimeCounter(startDate);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* 暖米纸色背景 */}
      <div className="fixed inset-0 bg-[hsl(30,25%,96%)]" />

      {/* 装饰元素 */}
      <Decorations />

      {/* 主内容 */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-16 md:py-24">
        <TimeDisplay timeDiff={timeDiff} />
      </div>
    </div>
  );
}