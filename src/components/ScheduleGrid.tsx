import type { WeekSchedule } from '../types/schedule';

interface ScheduleGridProps {
  schedule: WeekSchedule;
}

const PERIODS = Array.from({ length: 12 }, (_, i) => i + 1);
const DAYS = ['一', '二', '三', '四', '五', '六', '日'];

export default function ScheduleGrid({ schedule }: ScheduleGridProps) {
  return (
    <div className="relative overflow-x-auto">
      <div className="grid grid-cols-[auto_repeat(7,1fr)] gap-[1px] bg-gray-200">
        {/* Time column header */}
        <div className="bg-white p-4 flex items-center justify-center">
          <div className="flex flex-col items-center">
            <span className="text-lg font-semibold text-blue-500">7</span>
            <span className="text-sm text-blue-500">周</span>
          </div>
        </div>

        {/* Day headers */}
        {DAYS.map(day => (
          <div key={day} className="bg-white p-4 text-center">
            <div className="font-medium">{day}</div>
          </div>
        ))}

        {/* Time slots */}
        {PERIODS.map(period => (
          <>
            {/* Period number */}
            <div key={`period-${period}`} className="bg-white p-4 text-center">
              <span className="text-gray-600">{period}</span>
            </div>

            {/* Schedule cells */}
            {DAYS.map(day => (
              <div
                key={`${day}-${period}`}
                className="bg-white border-t border-gray-100 min-h-[100px] relative"
              >
                {schedule.classes[day]?.[period]?.map((class_, index) => (
                  <div
                    key={index}
                    className="absolute inset-0 m-[1px] bg-blue-50 p-2 text-sm"
                  >
                    <div className="font-medium text-blue-600">{class_.name}</div>
                    <div className="text-gray-600 mt-1">
                      <div>{class_.teacher}</div>
                      <div>{class_.location}</div>
                      <div className="text-xs mt-1">{class_.classes.join(', ')}</div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </>
        ))}
      </div>
    </div>
  );
}
