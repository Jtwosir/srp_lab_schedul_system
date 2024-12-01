import type { WeekSchedule } from '../types/schedule';

export const mockWeekSchedule: WeekSchedule = {
  weekNumber: 7,
  classes: {
    '一': {
      1: [{
        name: '信息课',
        teacher: '张老师',
        location: '微机室 331-246',
        time: '8:00-11:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班'],
        startPeriod: 1,
        endPeriod: 2
      }],
      3: [{
        name: 'Python应用开发',
        teacher: '赵老师',
        location: '微机室 331-246',
        time: '13:00-16:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班'],
        startPeriod: 3,
        endPeriod: 4
      }]
    },
    '三': {
      1: [{
        name: '云计算与大数据开发实训',
        teacher: '周老师',
        location: '微机室 331-246',
        time: '8:00-11:35',
        weeks: '第1周，2-18周',
        classes: ['21级软件一班', '21级软件二班'],
        startPeriod: 1,
        endPeriod: 4
      }]
    }
  }
};
