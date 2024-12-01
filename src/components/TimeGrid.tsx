import type { SelectedTime } from '../types/courseRequest';

interface TimeGridProps {
    selectedTimes: SelectedTime[];
    selectedWeekday: string;
}

const PERIODS = Array.from({ length: 12 }, (_, i) => i + 1);
const WEEKS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function TimeGrid({ selectedTimes, selectedWeekday }: TimeGridProps) {
    const filteredTimes = selectedTimes.filter(time => time.weekday === selectedWeekday);

    return (
        <div className="relative overflow-x-auto">
            <div className="grid grid-cols-[auto_repeat(20,1fr)] gap-[1px] bg-gray-200">
                {/* Header */}
                <div className="bg-white p-4 flex items-center justify-center">
                    <span className="text-gray-600">节次</span>
                </div>

                {/* Week numbers */}
                {WEEKS.map(week => (
                    <div key={week} className="bg-white p-4 text-center">
                        <div className="font-medium">{week}</div>
                    </div>
                ))}

                {/* Time slots */}
                {PERIODS.map(period => (
                    <div key={`row-${period}`} className="contents">
                        <div className="bg-white p-4 text-center">
                            <span className="text-gray-600">{period}</span>
                        </div>

                        {WEEKS.map(week => (
                            <div
                                key={`${week}-${period}`}
                                className="bg-white border border-gray-100 h-12 relative"
                            >
                                {filteredTimes.map((time, timeIndex) => {
                                    const isInWeekRange = week >= time.weekRange.start && week <= time.weekRange.end;
                                    const isInPeriodRange = period >= time.startPeriod && period <= time.endPeriod;

                                    if (isInWeekRange && isInPeriodRange) {
                                        return (
                                            <div
                                                key={`${timeIndex}-${week}-${period}`}
                                                className="absolute inset-0 bg-blue-100 border border-blue-200"
                                                title={`${time.weekday} ${time.startPeriod}-${time.endPeriod}节`}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
