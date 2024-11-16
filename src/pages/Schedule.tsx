import { useState } from 'react';
import ScheduleHeader from '../components/ScheduleHeader';
import ScheduleGrid from '../components/ScheduleGrid';
import { mockWeekSchedule } from '../data/mockScheduleData.ts';

export default function Schedule() {
  const [weekNumber, setWeekNumber] = useState(7);

  const handlePrevWeek = () => {
    setWeekNumber(prev => Math.max(1, prev - 1));
  };

  const handleNextWeek = () => {
    setWeekNumber(prev => Math.min(20, prev + 1));
  };

  return (
    <div className="p-8">
      <ScheduleHeader
        weekNumber={weekNumber}
        onPrevWeek={handlePrevWeek}
        onNextWeek={handleNextWeek}
      />
      <ScheduleGrid schedule={mockWeekSchedule} />
    </div>
  );
}
