import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigate } from 'react-router-dom';
import TimeGrid from '../components/TimeGrid';
import type { SelectedTime } from '../types/courseRequest';
import { mockCourseRequest } from '../data/mockCourseRequest';

const WEEKDAYS = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'];

export default function CourseRequest() {
  const { user } = useAuth();
  const [selectedWeeks, setSelectedWeeks] = useState<number[]>([]);
  const [selectedTimes, setSelectedTimes] = useState<SelectedTime[]>(mockCourseRequest.selectedTimes);
  const [selectedWeekday, setSelectedWeekday] = useState(WEEKDAYS[0]);

  if (!user || user.role !== 'teacher') {
    return <Navigate to="/schedule" replace />;
  }

  const handleWeekClick = (week: number) => {
    setSelectedWeeks(prev =>
      prev.includes(week)
        ? prev.filter(w => w !== week)
        : [...prev, week]
    );
  };

  return (
    <div className="p-8">

      <div className="grid grid-cols-[1fr_300px] gap-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-gray-900">实验课程</h1>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>{mockCourseRequest.courseName}</span>
                <span>•</span>
                <span>{mockCourseRequest.studentCount}人</span>
                <span>•</span>
                <span>{mockCourseRequest.classes.join(' ')}</span>
              </div>
            </div>
            {/* Weekday Filter */}
            <div className="flex items-center gap-2 bg-white p-4 rounded-lg shadow-sm">
              <span className="text-gray-600">选择星期：</span>
              <select
                  value={selectedWeekday}
                  onChange={(e) => setSelectedWeekday(e.target.value)}
                  className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {WEEKDAYS.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          </div>

          <TimeGrid
            selectedTimes={selectedTimes}
            onTimeSelect={setSelectedTimes}
            selectedWeekday={selectedWeekday}
          />
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <h2 className="text-gray-900 text-2xl font-bold">选择</h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">教室</label>
                <select className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm">
                  <option>{mockCourseRequest.classroom}</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">时间</label>
                <div className="mt-1 space-y-2">
                  <select className="block w-full rounded-lg border-gray-300 shadow-sm">
                    <option>09 周 — 12 周</option>
                  </select>
                  <select className="block w-full rounded-lg border-gray-300 shadow-sm">
                    <option>星期一</option>
                  </select>
                  <select className="block w-full rounded-lg border-gray-300 shadow-sm">
                    <option>01 节 — 04 节</option>
                  </select>
                </div>
              </div>
            </div>

            <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              添加
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium text-gray-900">已选择</h2>
              <div className="text-sm text-gray-500">32/32 学时</div>
            </div>

            <div className="space-y-2">
              {selectedTimes.map((time, index) => (
                <div
                  key={index}
                  className="px-3 py-2 bg-blue-50 text-blue-700 text-sm rounded"
                >
                  {`${time.weekday} ${time.startPeriod.toString().padStart(2, '0')}-${time.endPeriod.toString().padStart(2, '0')}节`}
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
