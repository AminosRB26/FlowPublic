import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import lessonsArray, { LessonObj } from "../constants/lessonsArray";
import UserStore, { updateAccent, updateAccentVariant, updateLanguage } from "../redux/store";

// ************************* //

// ***** Get Functions ***** //

// ************************* //

export const getLanguage = async () => {
    // Gets language from local storage
    var stringifiedLanguage = await AsyncStorage.getItem('language');
    var language: string = stringifiedLanguage != null ? JSON.parse(stringifiedLanguage) : 'English';
    // Returns the language promise
    return language;
}

export const getLessons = async (): Promise<LessonObj[]> => {
    // Gets lessons from local storage
    var stringifiedLessons = await AsyncStorage.getItem('lessons');
    var lessons = stringifiedLessons ? JSON.parse(stringifiedLessons) : lessonsArray;

    if (lessons.length > 0 && lessons[0].uuid === undefined) {
        const newLessonsArray = lessonsArray.map((lesson, index) => {
            return {
                ...lesson,
                completed: lessons[index]?.completed || lesson.completed,
                timesCompleted: lessons[index]?.timesCompleted || lesson.timesCompleted,
            };
        });
        lessons = newLessonsArray;
    }

    if (stringifiedLessons == null) {
        await AsyncStorage.setItem('lessons', JSON.stringify(lessonsArray));
    }

    return lessons;
}

export const getLastReset = async () => {
    var week = moment().isoWeek();
    var stringifiedLastReset = await AsyncStorage.getItem('last_reset');
    var lastReset: string = stringifiedLastReset != null ? JSON.parse(stringifiedLastReset) : week;

    stringifiedLastReset == null ? await AsyncStorage.setItem('last_reset', JSON.stringify(week)) : null;

    return lastReset;
}

export const getNotificationSetting = async () => {
    var stringifiedNotification = await AsyncStorage.getItem('notifications');
    var notifications: boolean = stringifiedNotification != null ? JSON.parse(stringifiedNotification) : false;

    if (stringifiedNotification == null) {
        await AsyncStorage.setItem('notifications', JSON.stringify(true));
    }

    return notifications;
}

export const getFirstRunDay = async () => {
    var stringifiedFirstRunDay = await AsyncStorage.getItem('firstRunDay');
    var firstRunDay = stringifiedFirstRunDay != null ? JSON.parse(stringifiedFirstRunDay) : {};

    if (stringifiedFirstRunDay === null) {
        var today = moment().format('YYYYMMDD');
        var newObject = { date: today, showAppReviewModal: true };
        await AsyncStorage.setItem('firstRunDay', JSON.stringify(newObject));
    }

    return firstRunDay;
}

export const getAccentColor = async () => {
    var stringifiedAccent = await AsyncStorage.getItem('accent');
    var accent = stringifiedAccent != null ? JSON.parse(stringifiedAccent) : '#F39C12';

    return accent;
}

export const getAccentVariantColor = async () => {
    var stringifiedAccent = await AsyncStorage.getItem('accent_variant');
    var accent = stringifiedAccent != null ? JSON.parse(stringifiedAccent) : '#F39C12';

    return accent;
}

// ************************** //

// ***** Save Functions ***** //

// ************************** //

export const saveIntroBool = async (complete: boolean) => {
    // Updates local storage for IntroComplete boolean
    await AsyncStorage.setItem('IntroComplete', JSON.stringify(complete));
}

export const saveLanguage = async (language: string) => {
    UserStore.dispatch(updateLanguage({ text: language }));
    await AsyncStorage.setItem('language', JSON.stringify(language));
}

export const isIntroComplete = async () => {
    // Gets intro complete boolean from local storage
    var stringifiedComplete = await AsyncStorage.getItem('IntroComplete');
    var complete: boolean = stringifiedComplete != null ? JSON.parse(stringifiedComplete) : false;

    // Updates local state value to false if it doesn't exist
    stringifiedComplete == null ? saveIntroBool(false) : null;

    // Returns boolean
    return complete;
}

export const completeLesson = async (uuid: string) => {
    // Gets lessons from local storage
    var lessons = await getLessons();
    const lessonToUpdate = lessons.find(element => element.uuid === uuid);

    if (lessonToUpdate) {
        const { timesCompleted = 0 } = lessonToUpdate;
        const updatedLesson = { timesCompleted: timesCompleted + 1, completed: true };
        Object.assign(lessonToUpdate, updatedLesson);
        await AsyncStorage.setItem('lessons', JSON.stringify(lessons));
    }
}

export const saveLastReset = async () => {
    var week = moment().isoWeek();
    await AsyncStorage.setItem('last_reset', JSON.stringify(week));
}

export const saveAccentColor = async (color: string) => {
    // Updates redux accent store
    UserStore.dispatch(updateAccent({ text: color }));
    // Updates local storage with new accent color
    await AsyncStorage.setItem('accent', JSON.stringify(color));
}

export const saveAccentVariantColor = async (color: string) => {
    // Updates redux accent store
    UserStore.dispatch(updateAccentVariant({ text: color }));
    // Updates local storage with new accent color
    await AsyncStorage.setItem('accent_variant', JSON.stringify(color));
}