/**
 * Timestamp is a string that represents the entire timestamp object in string format.
 * Format example is Sat Dec 23 2023 02:56:40 GMT+0000
 */
type Timestamp = string;

interface HabitCompletion {
  timestamp: string;
  completed: boolean;
}

type WeeklyFreqency = 1 | 2 | 3 | 4 | 5 | 6 | 7;

type HabitTypes = 'sleep' | 'exercise' | 'meditation' | 'learn';

interface BaseHabit {
  /**
  * The title string, must exist but can be empty
  */
  title: string;
  /**
  * The description string, must exist but can be empty
  */
  description: string;
  /**
  * Weekly frequency between values 1 & 7
  */
  weeklyFrequency: WeeklyFreqency;
  /**
   * Type of the habit, see HabitTypes
   */
  type: HabitTypes;
  /**
   * Array of completion objects
   */
  completions: HabitCompletion[];
  /**
   * Timestamp for notification reminder
   */
  reminderTimestamp: Timestamp | null;
  /**
  * Timestamp when the habit object was instantiated
  */
  readonly createdTimestamp: Timestamp;

  readonly userId: string;
  /**
   * Read only habit ID
   */
  readonly id: string;
}

interface Habit extends BaseHabit { }
