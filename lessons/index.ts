import { LessonContent } from '../types/lesson';
import { intro_lesson_five, intro_lesson_four, intro_lesson_one, intro_lesson_three, intro_lesson_two, mini_lesson_drink_water, mini_lesson_mindfulness_meditation, mini_lesson_morning_routine, mini_lesson_morning_stretches } from './constants';
import { getIntroLessonOne, getIntroLessonTwo, getIntroLessonThree, getIntroLessonFour, getIntroLessonFive, getMiniLessonMindfulnessMeditation, getMiniLessonEarlyMorning, getMiniLessonMorningStretches, getMiniLessonDrinkWater } from './lessons';

const lessonNames = {
    intro_lesson_one: getIntroLessonOne,
    intro_lesson_two: getIntroLessonTwo,
    intro_lesson_three: getIntroLessonThree,
    intro_lesson_four: getIntroLessonFour,
    intro_lesson_five: getIntroLessonFive,
    mini_lesson_mindfulness_meditation: getMiniLessonMindfulnessMeditation,
    mini_lesson_early_morning: getMiniLessonEarlyMorning,
    mini_lesson_morning_stretches: getMiniLessonMorningStretches,
    mini_lesson_drinking_more_water: getMiniLessonDrinkWater,
};

const translationMatrix: { [key: string]: any } = {
    'intro_lesson_one': intro_lesson_one,
    'intro_lesson_two': intro_lesson_two,
    'intro_lesson_three': intro_lesson_three,
    'intro_lesson_four': intro_lesson_four,
    'intro_lesson_five': intro_lesson_five,
    'mini_lesson_mindfulness_meditation': mini_lesson_mindfulness_meditation,
    'mini_lesson_early_morning': mini_lesson_morning_routine,
    'mini_lesson_morning_stretches': mini_lesson_morning_stretches,
    'mini_lesson_drinking_more_water': mini_lesson_drink_water,
};

export const generateLessonInstance = (id: string, locale: Locale) => {
    const strings = translationMatrix[id][locale];

    if (!strings) { return undefined; }
};

export const generateLessonGetterMap = (language: Locale) => {
    const map: { [key: string]: (() => LessonContent | undefined) } = {};

    Object.entries(lessonNames).forEach(([lessonName, lessonFunction]) => {
        map[lessonName] = () => lessonFunction(language);
    });

    return map;
};
