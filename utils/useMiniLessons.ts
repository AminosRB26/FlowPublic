import { useMemo } from "react"
import { useTranslation } from "react-i18next";

const useMiniLessons = () => {

    const { t } = useTranslation();

    const lessons = useMemo(() => [
        {
            title: t('miniLessonNavHeader2'),
            description: t('homePageLine13'),
            image: require('../assets/images/desert-sunrise-background.png'),
            uuid: 'mini_lesson_mindfulness_meditation'
        },
        {
            title: t('miniLessonNavHeader4'),
            description: t('homePageLine13'),
            image: require('../assets/images/mountain-background3.png'),
            uuid: 'mini_lesson_early_morning'
        },
        {
            title: t('miniLessonNavHeader6'),
            description: t('homePageLine13'),
            image: require('../assets/images/floating-mountain-background.png'),
            uuid: 'mini_lesson_morning_stretches'
        },
        {
            title: t('miniLessonNavHeader8'),
            description: t('homePageLine13'),
            image: require('../assets/images/floating-forest-background.png'),
            uuid: 'mini_lesson_drinking_more_water'
        },
    ], [t])

    return lessons;

}

export default useMiniLessons;