type DateObj = {
    label: string;
    date: string;
    day: string;
}

interface Props {
    onDayPress?: ((data: DateObj) => void);
    currentDate?: string;
    accent?: string;
    accentVariant?: string;
    weekArr: HabitCompletion[];
}