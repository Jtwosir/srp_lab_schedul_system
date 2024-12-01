import type { CourseRequestData } from '../types/courseRequest';

export const mockCourseRequest: CourseRequestData = {
  courseName: '云计算与大数据开发实训',
  studentCount: 85,
  classes: ['21级软件一班', '21级软件二班'],
  selectedTimes: [
    { weekday: '星期一', startPeriod: 1, endPeriod: 4 },
    { weekday: '星期二', startPeriod: 1, endPeriod: 4 },
    { weekday: '星期三', startPeriod: 1, endPeriod: 4 }
  ],
  classroom: '微机室(331)',
  capacity: 100,
  weekRange: {
    start: 9,
    end: 12
  }
};
