import React, { useMemo } from 'react';
import { View, ScrollView, useWindowDimensions, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import LessonCard from '../../components/LessonCard';
import moment from 'moment';
import MonthlyTips from '../../data/arrays';
import GlobalStyle from '../../style/GlobalStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

type Props = ScreenProps;

const Learn: React.FC<Props> = ({ navigation }) => {

    const { height } = useWindowDimensions();

    const { t } = useTranslation();

    const tip = useMemo(() => {
        var day = moment().date() - 1;
        if (day > 14) { day = Math.floor(day / 2); }
        return MonthlyTips[day];
    }, []);

    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} style={{ backgroundColor: '#ECF0F1' }} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <CustomText textAlign="center" font="bold" size={17} letterSpacing={0.5}>{t('learnPageHeader1')}</CustomText>
            </SafeAreaView>

            {/* Header */}
            <View style={{ marginTop: hp(2) }}>
                <CustomText font="semibold" size={14}>{t('learnPageHeader2')}?</CustomText>
                <CustomText font="regular" size={13} color={colors.BLACK.secondary}>{t('learnPageHeader3')}</CustomText>
            </View>

            {/* Introduction course */}
            <LessonCard style={{ marginTop: hp(2) }} source={require('../../assets/images/tent-background.png')} title={t('learnPageLine1')} description={`10 - 15 MIN - ${t('learnPageLine2')}`} onPress={() => { navigation.navigate('LessonList'); }} />

            <View style={{ marginTop: hp(2) }}>
                <CustomText font="semibold" size={14}>{t('learnPageLine3')}</CustomText>
                <CustomText font="regular" size={13} color={colors.BLACK.secondary}>{t('learnPageLine4')}</CustomText>
            </View>

            <LessonCard style={{ marginTop: hp(2) }} source={require('../../assets/images/desert-sunrise-background.png')} title={t('miniLessonNavHeader1')} description={`2 - 5 MIN - ${t('learnPageLine2')}`} onPress={() => { navigation.navigate('MiniLessonNav'); }} />

            <View style={{ marginTop: hp(2) }}>
                <CustomText font="semibold" size={14}>{t('learnPageLine7')}</CustomText>
                <CustomText font="regular" size={13} color={colors.BLACK.secondary}>{t('learnPageLine11')}</CustomText>
            </View>

            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Statistics'); }}>
                <View style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    elevation: 5,
                    height: height / 5.5,
                    marginTop: hp(2),
                }}>
                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} source={require('../../assets/images/cloud-background.png')}>
                        <View style={{ flex: 1, padding: 20, justifyContent: 'flex-end' }}>
                            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                                <View>
                                    <CustomText font="semibold" size={14}>{t('learnPageLine8')}</CustomText>
                                    <CustomText font="regular" size={13} color={colors.BLACK.secondary}>{t('learnPageLine9')}</CustomText>
                                </View>
                                <View style={{ borderRadius: 25, backgroundColor: colors.BLACK.primary, padding: 10, alignSelf: 'flex-start' }}>
                                    <CustomText font="semibold" size={14} color={'#FFF'}>{t('learnPageLine6')}</CustomText>
                                </View>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>

            <CustomText style={{ marginTop: hp(2) }} font="semibold" size={14}>{t('learnPageLine10')}</CustomText>

            {tip &&
                <View style={{
                    backgroundColor: '#fcf5eb',
                    borderRadius: 10,
                    elevation: 5,
                    height: height / 8,
                    marginTop: hp(2),
                }}>
                    <ImageBackground imageStyle={{ borderRadius: wp(2.5) }} style={{ height: '100%', width: '100%', justifyContent: 'center', paddingHorizontal: wp(5) }} source={require('../../assets/images/epoxy-cloud-background.png')}>
                        <CustomText font="semibold" size={14}>{tip.title}</CustomText>
                        <CustomText style={{ marginTop: hp(0.5) }} font="medium" size={13} color={colors.BLACK.secondary}>{tip.description}</CustomText>
                    </ImageBackground>
                </View>
            }
        </ScrollView >
    );
};

export default Learn;
