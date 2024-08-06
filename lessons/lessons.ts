import { LessonContent } from '../types/lesson';
import { intro_lesson_one, intro_lesson_two, intro_lesson_three, intro_lesson_four, intro_lesson_five, mini_lesson_mindfulness_meditation, mini_lesson_morning_routine, mini_lesson_morning_stretches, mini_lesson_drink_water } from './constants';

export const getIntroLessonOne = (locale: Locale) => {
    const strings = intro_lesson_one[locale].translation;

    if (!strings) return undefined;

    var IntroLessonOne: LessonContent = {
        id: 'intro_lesson_one',
        image: require('../assets/images/construction-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [strings.string_4, strings.string_5, strings.string_6, strings.string_7]
                    }
                ]
            }
        ],
    };
    return IntroLessonOne;
}

export const getIntroLessonTwo = (locale: Locale) => {

    const strings = intro_lesson_two[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'intro_lesson_two',
        image: require('../assets/images/simplehouse-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [strings.string_4, strings.string_5, strings.string_6]
                    }
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getIntroLessonThree = (locale: Locale) => {

    const strings = intro_lesson_three[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'intro_lesson_three',
        image: require('../assets/images/tent-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [strings.string_4]
                    },
                    {
                        header: strings.string_5,
                        paragraphs: [
                            strings.string_6
                        ]
                    }
                ]
            },
            {
                name: strings.string_7,
                type: strings.string_8,
                intro: strings.string_9,
                sections: [
                    {
                        header: strings.string_10,
                        paragraphs: [strings.string_11, strings.string_12]
                    },
                    {
                        header: strings.string_13,
                        paragraphs: [
                            strings.string_14,
                            strings.string_15,
                            strings.string_16,
                            strings.string_17,
                            strings.string_18,
                            strings.string_19,
                            strings.string_20,
                        ]
                    },
                    {
                        header: strings.string_21,
                        paragraphs: [
                            strings.string_22,
                            strings.string_23
                        ]
                    }
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getIntroLessonFour = (locale: Locale) => {

    const strings = intro_lesson_four[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'intro_lesson_four',
        image: require('../assets/images/forest-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [strings.string_4, strings.string_5]
                    },
                    {
                        header: strings.string_6,
                        paragraphs: [strings.string_7]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getIntroLessonFive = (locale: Locale) => {

    const strings = intro_lesson_five[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'intro_lesson_five',
        image: require('../assets/images/mountain-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [strings.string_4, strings.string_5, strings.string_6]
                    },
                    {
                        header: strings.string_7,
                        paragraphs: [strings.string_8]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getMiniLessonMindfulnessMeditation = (locale: Locale) => {

    const strings = mini_lesson_mindfulness_meditation[locale].translation;

    if (!strings) return undefined;

    var IntroLessonTwo: LessonContent = {
        id: 'mini_lesson_mindfulness_meditation',
        image: require('../assets/images/desert-sunrise-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2 + '\n\n' + strings.string_3,
                sections: [
                    {
                        header: strings.string_4,
                        paragraphs: [
                            strings.string_5,
                            strings.string_6,
                            strings.string_7,
                            strings.string_8,
                            strings.string_9,
                            strings.string_10,
                            strings.string_11,
                            strings.string_12,
                            strings.string_13,
                        ]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getMiniLessonEarlyMorning = (locale: Locale) => {

    const strings = mini_lesson_morning_routine[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'mini_lesson_early_morning',
        image: require('../assets/images/mountain-background3.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [
                            strings.string_4,
                            strings.string_5,
                            strings.string_6,
                            strings.string_7,
                            strings.string_8,
                            strings.string_9,
                        ]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getMiniLessonMorningStretches = (locale: Locale) => {

    const strings = mini_lesson_morning_stretches[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'mini_lesson_morning_stretches',
        image: require('../assets/images/floating-mountain-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [
                            strings.string_4,
                            strings.string_5,
                            strings.string_6,
                            strings.string_7,
                            strings.string_8,
                        ]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}

export const getMiniLessonDrinkWater = (locale: Locale) => {

    const strings = mini_lesson_drink_water[locale].translation;

    if (!strings) return undefined;
    var IntroLessonTwo: LessonContent = {
        id: 'mini_lesson_drinking_more_water',
        image: require('../assets/images/floating-forest-background.png'),
        screens: [
            {
                name: strings.string_0,
                type: strings.string_1,
                intro: strings.string_2,
                sections: [
                    {
                        header: strings.string_3,
                        paragraphs: [
                            strings.string_4,
                            strings.string_5,
                            strings.string_6,
                        ]
                    },
                ]
            }
        ],
    };
    return IntroLessonTwo;
}