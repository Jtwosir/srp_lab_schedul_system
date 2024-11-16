import type { WeekSchedule } from '../types/schedule';

export const mockWeekSchedule: WeekSchedule = {
  weekNumber: 7,
  classes: {
    '一': {
      1: [{
        name: '信息',
        teacher: '张老师',
        location: '微机室 331-246',
        time: '8:00-9:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班']
      }]
    },
    '二': {
      1: [{
        name: 'Python应用开发',
        teacher: '赵老师',
        location: '微机室 331-246',
        time: '8:00-9:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班']
      }]
    },
    '三': {
      1: [{
        name: '云计算与大数据开发实训',
        teacher: '周老师',
        location: '微机室 331-246',
        time: '8:00-9:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班']
      }]
    }
  }
};
