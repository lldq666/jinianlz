import { TimeDifference } from '@/utils/timeCalculator';

interface TimeDisplayProps {
  timeDiff: TimeDifference;
}

export default function TimeDisplay({ timeDiff }: TimeDisplayProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      {/* 主标题 */}
      <div className="text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white font-light tracking-wider mb-2 animate-fade-in">
          纪念荔枝
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 font-light animate-fade-in-delay">
          第 <span className="font-bold text-white">{timeDiff.days}</span> 天
        </p>
      </div>

      {/* 时间显示区 */}
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 animate-slide-up">
        <TimeUnit value={timeDiff.days} label="天" isLarge />
        <TimeUnit value={timeDiff.hours} label="小时" />
        <TimeUnit value={timeDiff.minutes} label="分钟" />
        <TimeUnit value={timeDiff.seconds} label="秒" />
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
    ? 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'
    : 'w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40';

  const textClasses = isLarge
    ? 'text-5xl md:text-6xl lg:text-7xl'
    : 'text-3xl md:text-4xl lg:text-5xl';

  return (
    <div
      className={`${sizeClasses} rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20
        flex flex-col items-center justify-center shadow-xl transition-all duration-300
        hover:bg-white/20 hover:scale-105 hover:border-white/40`}
    >
      <span
        className={`${textClasses} font-bold text-white tabular-nums transition-all duration-200`}
      >
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-sm md:text-base text-white/70 mt-2">{label}</span>
    </div>
  );
}