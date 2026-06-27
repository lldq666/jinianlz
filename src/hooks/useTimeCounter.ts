import { useState, useEffect } from 'react';
import { TimeDifference, calculateTimeDifference } from '@/utils/timeCalculator';

export function useTimeCounter(startDate: Date): TimeDifference {
  const [timeDiff, setTimeDiff] = useState<TimeDifference>(() =>
    calculateTimeDifference(startDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeDiff(calculateTimeDifference(startDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return timeDiff;
}