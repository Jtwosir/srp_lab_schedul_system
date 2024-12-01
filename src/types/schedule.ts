export interface ScheduleClass {
  name: string;
  teacher: string;
  location: string;
  time: string;
  weeks: string;
  classes: string[];
  startPeriod: number;
  endPeriod: number;
}

export interface WeekSchedule {
  weekNumber: number;
  classes: {
    [day: string]: {
      [period: number]: ScheduleClass[];
    };
  };
}
