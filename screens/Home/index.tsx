import React, { useState, useMemo } from 'react';
import { ScrollView, useWindowDimensions, View, StyleSheet, TouchableWithoutFeedback, Image, BackHandler } from 'react-native';
import CustomText from '../../components/CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import HabitCard from '../../components/HabitCard';
import MiniLessonCard from '../../components/MiniLessonCard';
import { useFocusEffect } from '@react-navigation/native';
import { getLessons } from '../../utils/asyncFunctions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useMiniLessons from '../../utils/useMiniLessons';
import { generateLessonGetterMap } from '../../lessons';
import useUserHabits from '../../hooks/user/useUserHabits';

interface Props extends ScreenProps { }

const Home: React.FC<Props> = ({ navigation }) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    const { t } = useTranslation();
    const { streak, userId } = useSelector((state: any) => state.user as User);

    const habits = useUserHabits(userId);

    const [lessonsCompleted, setLessonsCompleted] = useState(0);

    const habit = useMemo(() => habits ? habits[0] : undefined, [habits]);

    const quickLessons = useMiniLessons();

    const getData = async () => {
        var lessons = await getLessons();
        const total = lessons.reduce((acc, cur) => (cur.completed ? acc + 1 : acc), 0);

        setLessonsCompleted(total);
    };

    const handleNavigateLesson = async (id: string) => {
        const lesson = generateLessonGetterMap('en')[id]();

        lesson && navigation.navigate('Lesson', lesson);
    };

    function shuffleArray<T>(array: T[]): T[] {
        const newArray = array.slice();

        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }

        return newArray;
    }

    useFocusEffect(() => {
        getData();

        const BackSub = BackHandler.addEventListener('hardwareBackPress', () => true);
        return () => BackSub.remove();
    });

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: colors.GREEN.primary }} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{ paddingHorizontal: wp(4), paddingTop: hp(0.5), paddingBottom: hp(4) }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <CustomText font="bold" size={24} color={'rgba(255, 255, 255, 0.8)'} letterSpacing={0.5}>Epoxy</CustomText>
                    <View style={[GlobalStyle.rowContainerVCentered, { backgroundColor: '#fff', borderRadius: 50, paddingHorizontal: wp(5), paddingVertical: hp(1.2), elevation: 4 }]}>
                        <Image style={{ height: hp(3), width: hp(3), marginRight: wp(2) }} source={require('../../assets/icons/gem.png')} />
                        <CustomText font="bold" size={16} color={colors.BLACK.primary}>{streak.current} </CustomText>
                        <CustomText font="medium" size={14} letterSpacing={0.5} color={colors.BLACK.primary}>Streak</CustomText>
                    </View>
                </View>

                <View style={{ marginTop: hp(2) }}>
                    <CustomText font="medium" size={16} color={'rgba(255, 255, 255, 0.8)'}>{t('homePageHeader1')},</CustomText>
                    <CustomText font="bold" size={20} color={'rgba(255, 255, 255, 0.8)'} >{t('homePageHeader2')}</CustomText>
                </View>
                <View style={[GlobalStyle.rowContainerVCentered, { marginTop: hp(2) }]}>
                    <View style={[styles.statContainer, { marginRight: wp(1) }]}>
                        <View style={styles.statIconContainer}>
                            <Feather name="file-text" size={20 * scale} color={'#FFF'} />
                        </View>
                        <View style={{ flex: 1, paddingLeft: wp(2) }}>
                            <CustomText font="bold" size={t('homePageLine1').length || t('homePageLine2').length >= 10 ? 14 : 15} color={'#FFF'} >{lessonsCompleted} {t('homePageLine1')}</CustomText>
                            <CustomText font="medium" size={13} color={'rgba(255, 255, 255, 0.5)'}>{t('homePageLine3')}</CustomText>
                        </View>
                    </View>
                    <View style={[styles.statContainer, { marginLeft: wp(1) }]}>
                        <View style={styles.statIconContainer}>
                            <Feather name="watch" size={20 * scale} color={'#FFF'} />
                        </View>
                        <View style={{ flex: 1, paddingLeft: wp(2) }}>
                            <CustomText font="bold" size={t('homePageLine1').length || t('homePageLine2').length >= 10 ? 14 : 15} color={'#FFF'} >{habits.length} {t('homePageLine2')}</CustomText>
                            <CustomText font="medium" size={13} color={'rgba(255, 255, 255, 0.5)'}>{t('homePageLine4')}</CustomText>
                        </View>
                    </View>
                </View>
            </SafeAreaView>

            <View style={[styles.whiteContainer]}>
                <View style={[GlobalStyle.rowContainerVCenteredSpaced]}>
                    <CustomText font="bold" size={17}>{t('homePageLine6')}</CustomText>
                    <TouchableWithoutFeedback onPress={() => { navigation.navigate('Tabs', { screen: 'Habits' }); }}>
                        <View>
                            <CustomText font="regular" size={14} color={colors.GREEN.primary}>{t('homePageLine7')}</CustomText>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

                {
                    habit ?
                        <HabitCard {...habit} description={habit.description.length == 0 ? t('homePageLine17') : habit.description} dateStartedText={t('homePageLine15')} frequencyText={t('homePageLine16')} onPress={() => { navigation.navigate('HabitDetails', habit); }} />
                        :
                        <View style={{ paddingHorizontal: wp(4), paddingVertical: hp(1), paddingBottom: hp(2), borderWidth: 1, borderColor: '#c0c0c0', borderStyle: 'dashed', borderRadius: 20, marginTop: hp(3) }}>
                            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                <Image style={{ height: hp(15), aspectRatio: 1, alignSelf: 'center' }} resizeMode="cover" source={require('../../assets/images/tent-empty-list.png')} />
                            </View>
                            <CustomText font="semibold" size={16} textAlign="center">{t('homePageLine8')}</CustomText>
                            <CustomText font="regular" size={14} textAlign="center">{t('homePageLine9')}</CustomText>
                            <TouchableWithoutFeedback onPress={() => { navigation.navigate('CreateHabit'); }}>
                                <View style={{ backgroundColor: '#e5e5e5', borderRadius: 10, padding: 10, alignSelf: 'flex-start', marginTop: hp(2), flexDirection: 'column' }}>
                                    <CustomText font="bold" size={14} color={'#115e65'}>{t('homePageLine10')}</CustomText>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                }

                <CustomText style={{ marginTop: hp(3) }} font="bold" size={17}>{t('homePageLine11')}</CustomText>

                {
                    quickLessons &&
                    <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: hp(1) }]}>
                        {
                            Array.from(shuffleArray(quickLessons)).slice(0, 2).map(lesson => {
                                return (
                                    <MiniLessonCard key={lesson.uuid} {...lesson} onPress={() => { handleNavigateLesson(lesson.uuid); }} />
                                );
                            })
                        }
                    </View>
                }
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    whiteContainer: {
        flex: 1,
        paddingTop: hp(2),
        paddingHorizontal: wp(5),
        paddingBottom: hp(3),
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    statContainer: {
        flex: 1,
        height: hp(8),
        backgroundColor: '#115E65',
        borderRadius: wp(4),
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: wp(2),
        paddingRight: wp(1),
    },
    statIconContainer: {
        flex: 1,
        height: hp(6),
        borderRadius: wp(4),
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: hp(6),
        maxWidth: wp(14),
    },
});

export default Home;
