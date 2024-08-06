import React, { useMemo } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import moment from 'moment';
import CustomText from '../CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const Calendar = ({
    onDayPress = () => { },
    currentDate = moment().format('DD/MM/YYYY'),
    accent = '#8B80F8',
    weekArr
}: Props) => {

    const getDateArray = (selectedDate: Props['currentDate']) => {
        // Get the start of the week
        const startOfWeek = moment().startOf('isoWeek').day(0);

        // Initialize a variable representing the current day
        let currentDay = startOfWeek;

        // Create an array representing the days of the week
        const weekdays: string[] = moment.weekdays();

        // Move the first day of the week to the end (e.g., shift Sunday to the end)
        const firstDay: string = weekdays.shift()!;
        weekdays.push(firstDay);

        // Create a new date array from the week array with labels, etc.
        const dateArray: DateObj[] = weekdays.map(dayLabel => {
            currentDay = currentDay.clone().add(1, 'd');
            return {
                label: dayLabel,
                date: currentDay.format('DD/MM/YYYY'),
                day: currentDay.format('DD'),
                isFocused: selectedDate === currentDay.format('DD/MM/YYYY')
            };
        });

        return dateArray;
    };

    const calendarDates = useMemo(() => getDateArray(currentDate), [currentDate]);

    return (
        <View style={[styles.container]}>
            {
                calendarDates.map(dateInstance => {
                    console.log(dateInstance.date);
                    const completed = weekArr.some((value) => value.completed && value.timestamp === dateInstance.date);
                    return (
                        <TouchableWithoutFeedback key={dateInstance.date} onPress={() => { onDayPress(dateInstance) }}>
                            <View style={[styles.dateContainer, {
                                backgroundColor: dateInstance.isFocused ?
                                    // '#6C5FD1'
                                    'rgba(0, 0, 0, 0.2)'
                                    : 'transparent'
                            }]}>
                                <CustomText font='semibold' size={12} color={'rgba(255,255,255,0.8)'} letterSpacing={0.5}>{dateInstance.label.substring(0, 3).toUpperCase()}</CustomText>
                                <View style={[styles.circle, { backgroundColor: completed ? '#20C9AC' : dateInstance.isFocused ? '#FFF' : 'transparent' }]}>
                                    <CustomText font='bold' size={14} color={completed ? '#FFF' : dateInstance.isFocused ? accent : '#FFF'}>{dateInstance.day}</CustomText>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            }
            {/* {
                getDateArray().map(element => {

                    const isFocused: boolean = currentDate == element.date;

                    return (
                        <TouchableWithoutFeedback key={element.date} onPress={() => { onDayPress(element) }}>
                            <View style={[styles.dateContainer, { backgroundColor: isFocused ? '#6C5FD1' : 'transparent' }]}>
                                <CustomText font='semibold' size={12} color={'rgba(255,255,255,0.8)'} letterSpacing={0.5}>{element.label.substring(0, 3).toUpperCase()}</CustomText>
                                <View style={[styles.circle, { backgroundColor: isFocused ? '#FFF' : 'transparent' }]}>
                                    <CustomText font='bold' size={14} color={isFocused ? '#8B80F8' : '#FFF'}>{element.day}</CustomText>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateContainer: {
        height: wp(19),
        width: wp(12.28),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    circle: {
        borderRadius: 50,
        width: wp(8),
        height: wp(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp(0.5)
    }
})

export default Calendar;