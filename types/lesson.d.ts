import { ImageSourcePropType } from "react-native"

interface Section {
    header: string;
    paragraphs: string[];
}

interface Screen {
    name: string;
    type: string;
    intro: string;
    sections: Section[]
}

interface Tip {
    title: string;
    description: string;
}

interface BaseLesson {
    readonly title: string;
    readonly duration: string;
    readonly id: string;
}

interface LessonContent extends Pick<BaseLesson, 'id'> {
    screens?: Screen[];
    image?: ImageSourcePropType;
}

interface LessonObj extends BaseLesson, LessonContent {
    completed?: boolean;
    timesCompleted?: number;
}