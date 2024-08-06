import { TFunction } from "i18next";

export const getTitleTranslation = (title: string, t: TFunction<"translation", undefined, "translation">) => {
    switch (title) {
        case 'Lesson One':
            return t('lessonNavHeader2');
        case 'Lesson Two':
            return t('lessonNavHeader4');
        case 'Lesson Three':
            return t('lessonNavHeader6');
        case 'Lesson Four':
            return t('lessonNavHeader8');
        case 'Lesson Five':
            return t('lessonNavHeader10');
    }
}

export const getTimeTranslation = (title: string, t: TFunction<"translation", undefined, "translation">) => {
    switch (title) {
        case 'Lesson One':
            return t('lessonNavHeader3');
        case 'Lesson Two':
            return t('lessonNavHeader5');
        case 'Lesson Three':
            return t('lessonNavHeader7');
        case 'Lesson Four':
            return t('lessonNavHeader9');
        case 'Lesson Five':
            return t('lessonNavHeader11');
    }
}