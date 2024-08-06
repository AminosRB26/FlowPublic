import { TFunction } from "i18next";

export const getTitleTranslation = (id: number, t: TFunction<"translation", undefined, "translation">) => {
    switch (id) {
        case 1:
            return t('miniLessonNavHeader2');
        case 2:
            return t('miniLessonNavHeader4');
        case 3:
            return t('miniLessonNavHeader6');
        case 4:
            return t('miniLessonNavHeader8');
    }
}

export const getDescriptionTranslation = (id: number, t: TFunction<"translation", undefined, "translation">) => {
    switch (id) {
        case 1:
            return t('miniLessonNavHeader3');
        case 2:
            return t('miniLessonNavHeader5');
        case 3:
            return t('miniLessonNavHeader7');
        case 4:
            return t('miniLessonNavHeader9');
    }
}