/**
 * Function to return a shortened version of Completion array to improve performance
 * @param arr 
 * @returns reduced HabitCompletion array
 */
export const getWeeklyCompletionsArray = (arr: HabitCompletion[]): HabitCompletion[] => {
    return Array
        .from(arr)
        .slice(arr.length >= 7 ? (arr.length - 7) : 0, arr.length);
}