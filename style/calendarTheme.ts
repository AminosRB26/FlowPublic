import { Theme } from "react-native-calendars/src/types";
import fonts from "./fonts";

const theme: Theme = {
    calendarBackground: '#fff',
    textSectionTitleColor: '#545454',
    textSectionTitleDisabledColor: 'gray',
    dayTextColor: '#545454',
    todayTextColor: '#70d7c7',
    selectedDayTextColor: '#FDA361',
    monthTextColor: '#545454',
    indicatorColor: 'white',
    arrowColor: '#545454',
    textDayFontFamily: fonts.QUICKSAND.bold,
    textMonthFontFamily: fonts.QUICKSAND.regular,
    textDayHeaderFontFamily: fonts.QUICKSAND.regular,
    textDayFontSize: 14,
    textMonthFontSize: 14,
    textDayHeaderFontSize: 14,
}

export default theme;