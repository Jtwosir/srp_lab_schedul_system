import {Users, Clock, User} from 'lucide-react';
import type { Course } from '../types/course.ts';

interface CourseCardProps {
  course: Course;
  actionType: 'reschedule' | 'edit';
}

export default function CourseCard({ course, actionType }: CourseCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className="space-y-4">
          <div className="flex items-center gap-8">
            <h2 className="text-lg font-semibold">{course.name}</h2>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4 text-blue-600" />
              <span>{course.hours} 学时</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4 text-blue-600" />
              <span>{course.students} 人</span>
            </div>
            <div className="flex items-center gap-2  text-gray-600">
              <Users className="w-4 h-4 text-blue-500" />
              {course.classes.join(' ')}
            </div>
          </div>

          {course.location && (
            <div className="text-gray-600">
              课程安排：{course.location} {course.schedule}
            </div>
          )}

          {course.resources && (
            <div className="text-gray-600">
              课程资源：{course.resources}
            </div>
          )}
        </div>

        <button className="text-blue-500 hover:text-blue-600">
          {actionType === 'reschedule' ? '申请重排' : '更改'}
        </button>
      </div>
    </div>
  );
}
