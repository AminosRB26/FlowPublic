import React, { useMemo } from 'react';
import { View, Image, StyleSheet, useWindowDimensions, ImageSourcePropType } from 'react-native';
import moment from 'moment';
import GlobalStyle from '../../style/GlobalStyle';
import CustomText from '../CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import { HabitIcons } from '../../constants/icons';
import useHabitCompletions from '../../hooks/user/useHabitCompletions';

interface Props extends Pick<BaseHabit, 'title' | 'description' | 'weeklyFrequency' | 'completions' | 'type' | 'id'> {
    onPress?: (() => {});
}

const HabitItem: React.FC<Props> = ({
    title = '',
    description = '',
    type = '',
    id
}) => {

    const { t } = useTranslation();

    const { width } = useWindowDimensions();

    const completions = useHabitCompletions(id);

    const formattedTitle = useMemo(() => title.length > 28 ? title.substring(0, 28).concat('...') : title, [title]);
    const formattedDescription = useMemo(() => description.length === 0 ? t('homePageLine17') : description.length > 45 ? description.substring(0, 45).concat('...') : description, [description]);
    const image: string = useMemo(() => HabitIcons[type], [type])

    const getDayNumber = (index: number) => moment().startOf('week').add(index, 'days').date();

    const getDateArray = () => {
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
            };
        });

        return dateArray;
    };

    const calendarDates = useMemo(() => getDateArray(), []);

    return (
        <View style={[styles.container]}>
            <View style={[GlobalStyle.rowContainerVCentered, {}]}>
                <Image style={{ height: hp(5), width: hp(5) }} resizeMode='cover' source={image as ImageSourcePropType} />
                <View style={[{ paddingLeft: 10, justifyContent: 'center' }]}>
                    <CustomText font='bold' size={16} color={'#39394f'}>{formattedTitle}</CustomText>
                    <CustomText font='regular' size={12} color={'#91919d'}>{formattedDescription}</CustomText>
                </View>
            </View>
            <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: 14 }]}>
                {
                    calendarDates.map((instance, index) => {
                        const isComplete = completions.some((value) => value.completed && new Date(value.timestamp).toLocaleDateString('en-GB') === instance.date);
                        return (
                            <View key={index} style={[styles.dayContainer, { backgroundColor: isComplete ? '#22223B' : '#FFF', width: width * 0.1, height: (width * 0.1) * 1.5238 }]}>
                                <CustomText font='bold' size={16} color={isComplete ? '#FFF' : '#4A4E69'}>{getDayNumber(index + 1)}</CustomText>
                                <CustomText font='regular' size={12} color={isComplete ? '#FFF' : '#4A4E69'}>{instance.label.substring(0, 3)}</CustomText>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.75)',
        borderRadius: 10,
        paddingTop: hp(2),
        paddingBottom: hp(1.5),
        paddingHorizontal: wp(3.2),
        marginTop: hp(2.5),
        marginHorizontal: wp(4)
    },
    dayContainer: {
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 9,
        shadowColor: '#444444',
    },
})

export default HabitItem;