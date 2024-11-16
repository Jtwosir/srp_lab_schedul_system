interface ScheduleHeaderProps {
  weekNumber: number;
  onPrevWeek: () => void;
  onNextWeek: () => void;
}

export default function ScheduleHeader({ weekNumber, onPrevWeek, onNextWeek }: ScheduleHeaderProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">课程安排</h1>
        <div className="flex items-center gap-2 bg-white">
          <div className="bg-blue-500 text-white px-2 py-1 rounded-s rounded-e text-sm">
            我的课表
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <button
            onClick={onPrevWeek}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-baseline gap-2 mx-4">
            <span className="text-lg font-semibold">第 {weekNumber} 周</span>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <button
            onClick={onNextWeek}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
