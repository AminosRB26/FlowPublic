import 'react-native-get-random-values';
import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GlobalStyle from '../../style/GlobalStyle';
import { createHabitDoc } from '../../firebase/firebase.habits.';
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';
import Feather from 'react-native-vector-icons/Feather';
import TouchableIcon from '../../components/TouchableIcon';
import TextBox from '../../components/TextBox';
import { useSelector } from 'react-redux';

interface Props extends ScreenProps {}

const CreateHabit: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();
    const { userId } = useSelector((state: any) => state.user as User);

    const [habitDetails, setHabitDetails] = useState<Pick<Habit, 'title' | 'type' | 'weeklyFrequency' | 'description'>>({
        title: '',
        type: 'sleep',
        weeklyFrequency: 1,
        description: ''
    })

    const createHabit = async () => {

        if (habitDetails.title.length < 3) {
            console.log(`[Debug]`, `Title is not long enough, must be atleast 3 characters`);
            return;
        }

        if (!habitDetails.type) {
            console.log(`[Debug]`, `Must select a type`)
            return;
        }

        await createHabitDoc(userId, habitDetails);

        navigation.goBack()
    }

    const accent = 'salmon';

    const TypeComponent: React.FC<{ label: string; description: string; icon: string; type: Habit['type'] }> = ({
        label,
        description,
        icon,
        type
    }) => {
        const isFocused: boolean = habitDetails.type === type;
        return (
            <TouchableWithoutFeedback onPress={() => { setHabitDetails(prev => ({ ...prev, type })) }}>
                <View style={[GlobalStyle.centeredContent, { width: wp(44), height: wp(44), borderWidth: 1, borderColor: 'rgba(17, 17, 17, 0.1)', borderRadius: wp(2.5) }, isFocused && { borderColor: accent }]}>
                    <View style={[GlobalStyle.centeredContent, { height: hp(5), width: hp(5), borderRadius: 50, backgroundColor: 'rgba(17, 17, 17, 0.05)' }, isFocused && { backgroundColor: accent }]}>
                        <Feather name={icon} size={20} color={isFocused ? '#FFF' : '#00132D'} />
                    </View>
                    <CustomText style={{ marginTop: hp(1) }} textAlign='center' font='bold' size={17} color='#00132D'>{label}</CustomText>
                    <CustomText style={{ marginTop: hp(0.5) }} textAlign='center' font='medium' size={12} color='#959E9F'>{description}</CustomText>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <TouchableIcon style={{ marginLeft: -wp(1.5) }} name='chevron-left' size={24} color='#33415C' onPress={() => { navigation.goBack() }} />
                <CustomText style={{ marginTop: hp(0.5) }} font='bold' size={17} >{t('createPageHeader1')}</CustomText>
                <CustomText style={{ marginTop: hp(0.5) }} font='medium' size={13} color={colors.BLACK.secondary}>{t('createPageHeader2')}</CustomText>
            </SafeAreaView>

            <TextBox value={habitDetails.title} onChangeText={(title) => { setHabitDetails(prev => ({ ...prev, title })) }} wrapperStyle={{ marginTop: hp(3) }} placeholderTextColor={'rgba(125, 133, 151, 0.70)'} placeholder='Name' />
            <TextBox value={habitDetails.description} onChangeText={(description) => { setHabitDetails(prev => ({ ...prev, description })) }} wrapperStyle={{ marginTop: hp(3) }} placeholderTextColor={'rgba(125, 133, 151, 0.70)'} placeholder='Description' />

            <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: hp(3) }]}>
                <TypeComponent label='Sleep' description='Keep a habit of sleeping at the same time daily' type={'sleep'} icon='moon' />
                <TypeComponent label='Exercise' description='Keep a habit of sleeping at the same time daily' type={'exercise'} icon='activity' />
            </View>
            <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: wp(4) }]}>
                <TypeComponent label='Meditation' description='Keep a habit of sleeping at the same time daily' type={'meditation'} icon='sun' />
                <TypeComponent label='Learn' description='Keep a habit of sleeping at the same time daily' type={'learn'} icon='book' />
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button backgroundColor={accent} style={{ marginTop: hp(2) }} label={t('createPageHeader14')} onPress={() => { createHabit() }} />
            </View>
        </ScrollView>
    );
}

export default CreateHabit;