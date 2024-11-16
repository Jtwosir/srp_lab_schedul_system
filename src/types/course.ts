export interface Course {
  name: string;
  hours: number;
  students: number;
  classes: string[];
  location?: string;
  schedule?: string;
  resources?: string;
}
