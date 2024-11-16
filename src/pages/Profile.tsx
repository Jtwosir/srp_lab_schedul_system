import CourseCard from '../components/CourseCard';
import { mockCourseData } from '../data/mockData';

export default function Profile() {
  return (
    <div className="h-[100vh] p-8 space-y-8 overflow-y-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">实验课程安排</h1>
        <div className="mt-4 space-y-4">
          {mockCourseData.schedules.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              actionType="reschedule"
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold text-gray-900">实验课程信息</h1>
        <div className="mt-4 space-y-4">
          {mockCourseData.info.map((course, index) => (
            <CourseCard
              key={index}
              course={course}
              actionType="edit"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
