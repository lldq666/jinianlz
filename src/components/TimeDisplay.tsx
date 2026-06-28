import { TimeDifference } from '@/utils/timeCalculator';

interface TimeDisplayProps {
  timeDiff: TimeDifference;
}

export default function TimeDisplay({ timeDiff }: TimeDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-8 md:gap-10 max-w-lg mx-auto w-full">
      {/* 主标题 */}
      <div className="text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-light tracking-wider text-[hsl(15,15%,18%)] mb-3" style={{ fontFamily: '"ZCOOL XiaoWei", "Noto Sans SC", serif' }}>
          纪念<span className="font-bold text-[hsl(8,55%,52%)]">荔枝</span>
        </h1>
        <p className="text-lg md:text-2xl text-[hsl(15,10%,48%)] font-light animate-fade-in-delay">
          第 <span className="font-bold text-[hsl(8,55%,52%)] text-2xl md:text-3xl">{timeDiff.days}</span> 天
        </p>
      </div>

      {/* 时间卡片 */}
      <div className="w-full bg-[hsl(30,20%,99%)] rounded-2xl shadow-sm border border-[hsl(15,12%,85%)] p-6 md:p-8 animate-slide-up">
        <p className="text-center text-sm text-[hsl(15,10%,48%)] mb-4">
          已经过去了
        </p>
        <div className="flex justify-center gap-3 md:gap-5">
          <TimeUnit value={timeDiff.days} label="天" isLarge />
          <TimeUnit value={timeDiff.hours} label="时" />
          <TimeUnit value={timeDiff.minutes} label="分" />
          <TimeUnit value={timeDiff.seconds} label="秒" />
        </div>
      </div>

      {/* 底部信息 */}
      <div className="text-center animate-fade-in-delay">
        <p className="text-sm text-[hsl(15,10%,48%)]">
          从 2026年6月27日 20:23 开始
        </p>
      </div>
    </div>
  );
}

interface TimeUnitProps {
  value: number;
  label: string;
  isLarge?: boolean;
}

function TimeUnit({ value, label, isLarge = false }: TimeUnitProps) {
  const sizeClasses = isLarge
    ? 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
    : 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20';

  const textClasses = isLarge
    ? 'text-2xl md:text-3xl lg:text-4xl'
    : 'text-xl md:text-2xl lg:text-3xl';

  return (
    <div className="flex flex-col items-center gap-1">
      <div
        className={`${sizeClasses} rounded-xl bg-[hsl(8,40%,92%)]
          flex items-center justify-center`}
      >
        <span
          className={`${textClasses} font-bold text-[hsl(8,55%,52%)] tabular-nums`}
        >
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs md:text-sm text-[hsl(15,10%,48%)]">{label}</span>
    </div>
  );
}