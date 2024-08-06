import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import CustomText from '../../components/CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GlobalStyle from '../../style/GlobalStyle';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import StackHeader from '../../components/StackHeader';
import Feather from 'react-native-vector-icons/Feather';
import { getLessons } from '../../utils/asyncFunctions';
import { useFocusEffect } from '@react-navigation/native';
import useUserHabits from '../../hooks/user/useUserHabits';

interface Props extends ScreenProps { }

const Statistics: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();

    const { userId } = useSelector((state: any) => state.user as User);

    const habits = useUserHabits(userId);

    const [lessons, setLessons] = useState<number>(0);

    useFocusEffect(
        React.useCallback(() => {
            const fetchLessons = async () => {
                try {
                    const lessonData = await getLessons();
                    const totalCompleted = lessonData.reduce((acc, cur) => {
                        return cur.completed ? acc + 1 : acc;
                    }, 0);

                    setLessons(totalCompleted);
                } catch (error) {
                    console.error('Error fetching lessons:', error);
                }
            };

            fetchLessons();
        }, [])
    );

    const _renderItem: React.FC<{ label: string; body: string; onPress?: (() => void); }> = ({
        label,
        body,
        onPress,
    }) => {
        return (
            <TouchableWithoutFeedback onPress={() => { onPress && onPress(); }}>
                <View style={[GlobalStyle.rowContainerVCenteredSpaced, { paddingVertical: hp(2.02), borderBottomWidth: 0.5, borderColor: 'rgba(0, 0, 0, 0.2)' }]}>
                    <View style={{}}>
                        <CustomText font="medium" size={13}>{label}</CustomText>
                        <CustomText style={{ marginTop: hp(1) }} font="bold" size={20}>{body}</CustomText>
                    </View>
                    <Feather name="chevron-right" size={20} />
                </View>
            </TouchableWithoutFeedback>
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#FFF', paddingTop: hp(2), paddingHorizontal: wp(4), paddingBottom: hp(2) }}>
            <StackHeader label={t('Your Statistics')} body="An overview of your progression" />

            <_renderItem label="Habits" body={habits.length.toString()} onPress={() => { navigation.navigate('Habits'); }} />
            <_renderItem label="Lessons completed" body={lessons.toString()} onPress={() => { }} />
            <_renderItem label="Best day streak" body="0" onPress={() => { }} />
            <_renderItem label="Most successful habit" body="0" onPress={() => {
                // Navigate to specific habit
            }} />
            <_renderItem label="Time spent practicing" body="0" onPress={() => { }} />
        </View>
    );
};

export default Statistics;
