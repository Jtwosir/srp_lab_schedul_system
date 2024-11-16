import type { Course } from '../types/course.ts';

interface CourseData {
  schedules: Course[];
  info: Course[];
}

export const mockCourseData: CourseData = {
  schedules: [
    {
      name: '云计算与大数据开发',
      hours: 64,
      students: 85,
      classes: ['21级 软件一班', '21级 软件二班'],
      location: '微机室(331)',
      schedule: '星期一 (1-4)节 12-14周 星期三 (1-4)节 12-14周'
    },
    {
      name: '云计算与大数据开发',
      hours: 64,
      students: 85,
      classes: ['21级 软件一班', '21级 软件二班'],
      location: '微机室(331)',
      schedule: '星期一 (1-4)节 12-14周 星期三 (1-4)节 12-14周'
    }
  ],
  info: [
    {
      name: '云计算与大数据开发',
      hours: 64,
      students: 85,
      classes: ['21级 软件一班', '21级 软件二班'],
      resources: 'Visual studio'
    },
    {
      name: '云计算与大数据开发',
      hours: 64,
      students: 85,
      classes: ['21级 软件一班', '21级 软件二班'],
      resources: 'Visual studio'
    },
    {
      name: '云计算与大数据开发',
      hours: 64,
      students: 85,
      classes: ['21级 软件一班', '21级 软件二班'],
      resources: 'Visual studio'
    }
  ]
};
