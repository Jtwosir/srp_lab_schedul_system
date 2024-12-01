import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import TimeGrid from '../components/TimeGrid';
import type { SelectedTime } from '../types/courseRequest';
import { mockCourseRequest } from '../data/mockCourseRequest';

const WEEKDAYS = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];
const PERIODS = Array.from({ length: 12 }, (_, i) => i + 1);
const WEEKS = Array.from({ length: 20 }, (_, i) => i + 1);

export default function CourseRequest() {
    const { user } = useAuth();
    const [selectedTimes, setSelectedTimes] = useState<SelectedTime[]>([]);
    const [selectedWeekday, setSelectedWeekday] = useState(WEEKDAYS[0]);

    const [selectedWeek, setSelectedWeek] = useState({ start: 1, end: 1 });
    const [selectedPeriod, setSelectedPeriod] = useState({ start: 1, end: 1 });
    const [selectedClassroom, setSelectedClassroom] = useState(mockCourseRequest.classroom);

    if (!user || user.role !== 'teacher') {
        return <Navigate to="/schedule" replace />;
    }

    const handleAddTimeSlot = () => {
        const newTimeSlot: {
            startPeriod: number;
            endPeriod: number;
            weekday: string;
            weekRange: { start: number; end: number }
        } = {
            weekday: selectedWeekday,
            startPeriod: selectedPeriod.start,
            endPeriod: selectedPeriod.end,
            weekRange: {
                start: selectedWeek.start,
                end: selectedWeek.end
            }
        };

        setSelectedTimes(prev => [...prev, newTimeSlot]);
    };

    const handleRemoveTimeSlot = (index: number) => {
        setSelectedTimes(prev => prev.filter((_, i) => i !== index));
    };

    const calculateTotalHours = () => {
        return selectedTimes.reduce((total, time) => {
            const periodsPerDay = time.endPeriod - time.startPeriod + 1;
            const weeksCount = time.weekRange.end - time.weekRange.start + 1;
            return total + (periodsPerDay * weeksCount);
        }, 0);
    };

    return (
        <div className="p-4">
            <div className="grid grid-cols-[1fr_300px] gap-8">
                <div className="space-y-6">
                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-8">
                            <h1 className="text-2xl font-bold text-gray-900">实验课程</h1>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <span>{mockCourseRequest.courseName}</span>
                                <span>•</span>
                                <span>{mockCourseRequest.studentCount}人</span>
                                <span>•</span>
                                <span>{mockCourseRequest.classes.join(' ')}</span>
                            </div>
                            <div className="ml-auto">
                                筛选：
                                <select
                                    value={selectedWeekday}
                                    onChange={(e) => setSelectedWeekday(e.target.value)}
                                    className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg bg-white text-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                                >
                                    {WEEKDAYS.map(day => (
                                        <option key={day} value={day}>{day}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <TimeGrid
                        selectedTimes={selectedTimes}
                        selectedWeekday={selectedWeekday}
                    />
                </div>

                <div className="space-y-6">
                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                        <h2 className="text-lg font-semibold text-gray-900">选择</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-gray-600">教室</label>
                                <select
                                    value={selectedClassroom}
                                    onChange={(e) => setSelectedClassroom(e.target.value)}
                                    className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm"
                                >
                                    <option value={mockCourseRequest.classroom}>{mockCourseRequest.classroom}</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">周次</label>
                                <div className="mt-1 flex items-center gap-2">
                                    <select
                                        value={selectedWeek.start}
                                        onChange={(e) => setSelectedWeek(prev => ({ ...prev, start: Number(e.target.value) }))}
                                        className="block w-24 rounded-lg border-gray-300 shadow-sm"
                                    >
                                        {WEEKS.map(week => (
                                            <option key={week} value={week}>{week}</option>
                                        ))}
                                    </select>
                                    <span className="text-gray-500">至</span>
                                    <select
                                        value={selectedWeek.end}
                                        onChange={(e) => setSelectedWeek(prev => ({ ...prev, end: Number(e.target.value) }))}
                                        className="block w-24 rounded-lg border-gray-300 shadow-sm"
                                    >
                                        {WEEKS.map(week => (
                                            <option key={week} value={week}>{week}</option>
                                        ))}
                                    </select>
                                    <span className="text-gray-500">周</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm text-gray-600">节次</label>
                                <div className="mt-1 flex items-center gap-2">
                                    <select
                                        value={selectedPeriod.start}
                                        onChange={(e) => setSelectedPeriod(prev => ({ ...prev, start: Number(e.target.value) }))}
                                        className="block w-24 rounded-lg border-gray-300 shadow-sm"
                                    >
                                        {PERIODS.map(period => (
                                            <option key={period} value={period}>{period.toString().padStart(2, '0')}</option>
                                        ))}
                                    </select>
                                    <span className="text-gray-500">至</span>
                                    <select
                                        value={selectedPeriod.end}
                                        onChange={(e) => setSelectedPeriod(prev => ({ ...prev, end: Number(e.target.value) }))}
                                        className="block w-24 rounded-lg border-gray-300 shadow-sm"
                                    >
                                        {PERIODS.map(period => (
                                            <option key={period} value={period}>{period.toString().padStart(2, '0')}</option>
                                        ))}
                                    </select>
                                    <span className="text-gray-500">节</span>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={handleAddTimeSlot}
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            添加
                        </button>
                    </div>

                    <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="font-medium text-gray-900">已选择</h2>
                            <div className="text-sm text-gray-500">{calculateTotalHours()}/32 学时</div>
                        </div>

                        <div className="space-y-2 max-h-[300px] overflow-y-auto">
                            {selectedTimes.map((time, index) => (
                                <div
                                    key={index}
                                    className="group px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded flex items-center justify-between"
                                >
                                  <span>
                                    {`${time.weekday} ${time.startPeriod.toString().padStart(2, '0')}-${time.endPeriod.toString().padStart(2, '0')}节`}
                                      <br />
                                    <span className="text-xs text-blue-600">
                                      {`第${time.weekRange.start}-${time.weekRange.end}周`}
                                    </span>
                                  </span>
                                    <button
                                        onClick={() => handleRemoveTimeSlot(index)}
                                        className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600 transition-opacity"
                                    >
                                        删除
                                    </button>
                                </div>
                            ))}
                        </div>

                        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                            确认
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
