import { useState } from 'react';
import type { SelectedTime } from '../types/courseRequest';

interface TimeGridProps {
  selectedTimes: SelectedTime[];
  onTimeSelect: (times: SelectedTime[]) => void;
  selectedWeekday: string;
}

const PERIODS = Array.from({ length: 12 }, (_, i) => i + 1);
const WEEKS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function TimeGrid({ selectedTimes, onTimeSelect, selectedWeekday }: TimeGridProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [startCell, setStartCell] = useState<{ week: number; period: number } | null>(null);

  const handleMouseDown = (week: number, period: number) => {
    setIsDragging(true);
    setStartCell({ week, period });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartCell(null);
  };

  const handleMouseEnter = (week: number, period: number) => {
    if (isDragging && startCell) {
      const newTime: SelectedTime = {
        weekday: selectedWeekday,
        startPeriod: Math.min(startCell.period, period),
        endPeriod: Math.max(startCell.period, period)
      };
      onTimeSelect([...selectedTimes, newTime]);
    }
  };

  return (
    <div className="grid grid-cols-[auto_repeat(20,1fr)] gap-[1px] bg-gray-200">
      {/* Header */}
      <div className="bg-white p-4 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-blue-500">节</span>
        </div>
      </div>
      {WEEKS.map(week => (
        <div key={week} className="bg-white p-4 text-center">
          <div className="font-medium">{week}</div>
        </div>
      ))}

      {/* Grid */}
      {PERIODS.map(period => (
        <>
          <div key={`period-${period}`} className="bg-white p-4 text-center">
            <span className="text-gray-600">{period}</span>
          </div>
          {WEEKS.map(week => (
            <div
              key={`${week}-${period}`}
              className="bg-white border border-gray-100 h-12 relative cursor-pointer"
              onMouseDown={() => handleMouseDown(week, period)}
              onMouseEnter={() => handleMouseEnter(week, period)}
              onMouseUp={handleMouseUp}
            >
              {selectedTimes.some(
                time =>
                  time.weekday === selectedWeekday &&
                  period >= time.startPeriod &&
                  period <= time.endPeriod
              ) && (
                <div className="absolute inset-0 bg-blue-500 opacity-20" />
              )}
            </div>
          ))}
        </>
      ))}
    </div>
  );
}
