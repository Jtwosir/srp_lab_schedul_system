export interface SelectedTime {
  weekday: string;
  startPeriod: number;
  endPeriod: number;
}

export interface CourseRequestData {
  courseName: string;
  studentCount: number;
  classes: string[];
  selectedTimes: SelectedTime[];
  classroom: string;
  capacity: number;
  weekRange: {
    start: number;
    end: number;
  };
}
