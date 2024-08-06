import React from 'react';
import { View, Image, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import DraggableFlatList, {
    ScaleDecorator,
} from 'react-native-draggable-flatlist';
import CustomText from '../../components/CustomText';
import HabitItem from '../../components/HabitItem';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableIcon from '../../components/TouchableIcon';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useUserHabits from '../../hooks/user/useUserHabits';

interface Props extends ScreenProps { }

const Habits: React.FC<Props> = ({ navigation }) => {

    const { height } = useWindowDimensions();

    const { t } = useTranslation();
    const { userId } = useSelector((state: any) => state.user as User);

    const habits = useUserHabits(userId);

    const renderItem = ({ item, drag, isActive }: any) => {
        return (
            <ScaleDecorator>
                <TouchableWithoutFeedback
                    onLongPress={drag}
                    onPress={() => { navigation.navigate('HabitDetails', item); }}
                    disabled={isActive}
                >
                    <View>
                        <HabitItem {...item} />
                    </View>
                </TouchableWithoutFeedback>
            </ScaleDecorator>
        );
    };

    const onDragEnd = (habits: Habit[]) => {
        // setHabits(habits);
        // saveHabits(habits);
    };

    return (
        <View style={{ flex: 1, paddingTop: hp(2), backgroundColor: colors.WHITE.primary }} >
            <SafeAreaView style={[GlobalStyle.rowContainerVCenteredSpaced, { paddingHorizontal: wp(5), paddingBottom: hp(1) }]}>
                <CustomText font="bold" size={18} letterSpacing={0.5}>{t('habitPageHeader1')}</CustomText>
                <TouchableIcon name="plus-circle" size={20} onPress={() => { navigation.navigate('CreateHabit'); }} />
            </SafeAreaView>

            <DraggableFlatList
                data={habits}
                showsVerticalScrollIndicator={false}
                containerStyle={GlobalStyle.FlexGrow}
                contentContainerStyle={GlobalStyle.FlexGrow}
                keyExtractor={(item) => item.id}
                onDragEnd={({ data }) => onDragEnd(data)}
                renderItem={renderItem}
                ListEmptyComponent={() => {
                    return (
                        <View style={{ paddingHorizontal: wp(10), marginTop: hp(1) }}>
                            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                                <Image style={{ height: height / 2.5, width: height / 2.5, alignSelf: 'center' }} resizeMode="cover" source={require('../../assets/images/tent-empty-list.png')} />
                            </View>
                            <View style={{ marginTop: hp(1) }}>
                                <CustomText textAlign="center" font="semibold" size={16} letterSpacing={0.5}>{t('homePageLine8')}</CustomText>
                                <CustomText style={{ marginTop: hp(0.5) }} textAlign="center" font="medium" letterSpacing={0.5}>{t('homePageLine9')}</CustomText>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

export default Habits;
