import type { ScheduleClass } from '../types/schedule';

export function getClassSpan(
    dayClasses: { [period: number]: ScheduleClass[] } | undefined,
    currentPeriod: number,
    classItem: ScheduleClass
): number {
    if (!dayClasses || !classItem.startPeriod || !classItem.endPeriod) {
        return 1;
    }
    return classItem.endPeriod - classItem.startPeriod + 1;
}
