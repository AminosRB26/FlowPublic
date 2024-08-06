import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, ScrollView, StyleSheet, useWindowDimensions, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../../components/CustomText';
import GlobalStyle from '../../style/GlobalStyle';
import colors from '../../style/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { mapStateToProps } from '../../redux/mapStateToProps';
import { formatDateToDDMMYYYY } from '../../utils/strings';
import TextBox from '../../components/TextBox';
import fonts from '../../style/fonts';
import Calendar from '../../components/Calendar';
import TouchableIcon from '../../components/TouchableIcon';
import Feather from 'react-native-vector-icons/Feather';
import Button from '../../components/Button';
import { getWeeklyCompletionsArray } from '../../utils/habit';
import { useModal } from '../../utils/ModalContext';
import AlertModal from '../../components/AlertModal';
import useHabitCompletions from '../../hooks/user/useHabitCompletions';
import { deleteHabitDoc } from '../../firebase/firebase.habits.';

interface Props extends ScreenProps {}

const HabitDetails: React.FC<Props> = ({ navigation, route }) => {

    const accent = 'salmon';
    const accentVariant = 'salmon';

    const { title, description, weeklyFrequency, createdTimestamp, id }: Habit = route.params;

    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    const { pushModal, closeModal } = useModal();

    const completions = useHabitCompletions(id);

    const [habitProps, setHabitProps] = useState({
        title,
        description,
        weeklyFrequency,
        createdTimestamp,
        id
    });

    const [isEditing, setEditing] = useState<boolean>(false);

    const stats = useMemo(() => {
        const totalCompletions = completions.reduce((acc, val) => {
            return val.completed ? acc + 1 : acc;
        }, 0)

        return {
            total: totalCompletions,
            best_streak: 0,
            streak: 0
        }
    }, [completions])

    const isComplete: boolean = useMemo(() => {
        // Gets todays date in format YYYY-MM-DD
        const today: string = new Date().toLocaleDateString('en-GB');
        // Checks if completions array contains today's date & completed is true
        let isTodayIncluded = completions.some(obj => new Date(obj.timestamp).toLocaleDateString('en-GB') === today && obj.completed === true);

        return isTodayIncluded;
    }, [completions]);

    // const handleToggleComplete = async () => {
    //     const todayDate = new Date().toLocaleDateString('en-GB');

    //     const newArr: Habit[] = habits.map(habit => {
    //         if (habit.id === id) {
    //             const updatedCompletions = habit.completions.some(obj => new Date(obj.timestamp).toLocaleDateString('en-GB') === todayDate) ?
    //                 habit.completions.map(completion => {
    //                     if (new Date(completion.timestamp).toLocaleDateString('en-GB') === todayDate) {
    //                         return { ...completion, completed: !completion.completed };
    //                     }
    //                     return completion;
    //                 })
    //                 : [...habit.completions, { timestamp: new Date().toString(), completed: true }];

    //             setHabitProps(prev => ({ ...prev, completions: updatedCompletions }));
    //             return { ...habit, completions: updatedCompletions };
    //         }
    //         return habit;
    //     });

    //     saveHabits(newArr);
    // };

    // const deleteHabit = async () => {
    //     const updatedHabits = [...habits];

    //     const index = updatedHabits.findIndex(habit => habit.id === id);

    //     updatedHabits.splice(index, 1);

    //     const response = await saveHabits(updatedHabits);
    //     response && navigation.goBack();
    // }

    const handleComplete = async () => {

    }

    const deleteHabit = useCallback(async () => {
        await deleteHabitDoc(id);
        navigation.goBack();
    }, [id])

    const deleteModalProps = {
        message: 'Are you sure?',
        optionalParams: ['Are you sure you want to delete this habit? This action can not be undone'],
        actionParams: [{
            label: 'Yes',
            onPress: () => deleteHabit()
        },
        {
            label: 'No',
            onPress: () => closeModal()
        },
        ]
    }

    return (
        <ScrollView style={{ backgroundColor: '#F5F5F5' }} contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: 0, paddingHorizontal: 0 }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={[styles.purpleContainer, { width, backgroundColor: accent }]}>
                <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: hp(1.62), marginBottom: hp(3.5) }]}>
                    <TouchableIcon name='chevron-left' size={24} color={'#FFF'} onPress={() => { navigation.goBack() }} />
                    <CustomText textAlign='center' font='bold' size={17} color={'#FFF'}>{'Habit'}</CustomText>
                    <TouchableIcon name='trash-2' size={22} color={'#FFF'} onPress={() => { pushModal(<AlertModal {...deleteModalProps} />) }} />
                </View>
                <Calendar weekArr={getWeeklyCompletionsArray(completions)} accent={accent} accentVariant={accentVariant} />
            </SafeAreaView>

            <View style={[styles.whiteContainer]}>
                <View style={{ paddingVertical: hp(2.5) }}>
                    <TextBox value={habitProps.title} onChangeText={(title) => { setHabitProps(prev => ({ ...prev, title })) }} fontSize={17} style={{ paddingHorizontal: 0, fontFamily: fonts.QUICKSAND.bold, letterSpacing: 0.3 }} wrapperStyle={{ borderWidth: 0, height: undefined }} placeholder='Title' />
                    <TextBox value={habitProps.description} onChangeText={(description) => { setHabitProps(prev => ({ ...prev, description })) }} fontSize={13} style={{ paddingHorizontal: 0, fontFamily: fonts.QUICKSAND.medium, letterSpacing: 0.3, color: '#959E9F' }} wrapperStyle={{ borderWidth: 0, height: undefined }} placeholder='Description' />
                    <CustomText style={{ marginTop: hp(0.5) }} font='medium' size={13} color='#959E9F'>{t('habitDetailsPageHeader2')} {formatDateToDDMMYYYY(new Date(createdTimestamp))}</CustomText>
                </View>

                <View style={[GlobalStyle.rowContainerVCentered, { borderRadius: wp(2), paddingVertical: hp(1.62), borderWidth: wp(0.25), borderColor: 'rgba(0, 0, 0, 0.1)' }]}>
                    <View style={[[GlobalStyle.centeredContent, { flex: 1, gap: wp(1) }]]}>
                        <CustomText font='bold' size={16}>{stats.total}</CustomText>
                        <CustomText font='medium' size={12}>Total</CustomText>
                    </View>
                    <View style={[[GlobalStyle.centeredContent, { flex: 1, gap: wp(1) }]]}>
                        <CustomText font='bold' size={16}>{stats.best_streak}</CustomText>
                        <CustomText font='medium' size={12}>Best Streak</CustomText>
                    </View>
                    <View style={[[GlobalStyle.centeredContent, { flex: 1, gap: wp(1) }]]}>
                        <CustomText font='bold' size={16}>{stats.streak}</CustomText>
                        <CustomText font='medium' size={12}>Streak</CustomText>
                    </View>
                </View>

                <TouchableWithoutFeedback onPress={() => { }}>
                    <View style={[GlobalStyle.rowContainerVCenteredSpaced, { paddingVertical: hp(2.02), borderBottomWidth: 0.5, borderColor: 'rgba(0, 0, 0, 0.2)' }]}>
                        <View style={{}}>
                            <CustomText font='medium' size={13} color={colors.BLACK.secondary}>Reminder</CustomText>
                            <CustomText style={{ marginTop: hp(0.81) }} font='semibold' size={15}>Daily, 12:30PM</CustomText>
                        </View>
                        <Feather name='chevron-right' size={20} color={colors.BLACK.secondary} />
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { }}>
                    <View style={[GlobalStyle.rowContainerVCenteredSpaced, { paddingVertical: hp(2.02) }]}>
                        <View style={{}}>
                            <CustomText font='medium' size={13} color={colors.BLACK.secondary}>Notifications</CustomText>
                            <CustomText style={{ marginTop: hp(0.81) }} font='semibold' size={15}>Enabled</CustomText>
                        </View>
                        <Feather name='chevron-right' size={20} color={colors.BLACK.secondary} />
                    </View>
                </TouchableWithoutFeedback>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <Button backgroundColor={isComplete ? accentVariant : accent} label={isComplete ? 'Undo' : 'Complete'} onPress={() => { handleComplete() }} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    purpleContainer: {
        backgroundColor: '#8B80F8',
        paddingTop: hp(0),
        paddingBottom: hp(6),
        paddingHorizontal: wp(4),
        justifyContent: 'space-between',
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: '#FFF',
        paddingHorizontal: wp(4),
        marginTop: -hp(3),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    }
})

export default HabitDetails;