interface WeekSelectorProps {
  selectedWeeks: number[];
  onWeekClick: (week: number) => void;
}

export default function WeekSelector({ selectedWeeks, onWeekClick }: WeekSelectorProps) {
  const weeks = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-10 gap-2">
      {weeks.map(week => (
        <button
          key={week}
          onClick={() => onWeekClick(week)}
          className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm
            ${selectedWeeks.includes(week)
              ? 'bg-blue-500 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
        >
          {week}
        </button>
      ))}
    </div>
  );
}
