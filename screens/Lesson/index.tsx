import React, { useMemo, useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, ImageBackground, useWindowDimensions } from 'react-native';
import { completeLesson } from '../../utils/asyncFunctions';
import Feather from 'react-native-vector-icons/Feather';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableCustomText from '../../components/TouchableCustomText';
import { useTranslation } from 'react-i18next';
import { Section } from '../../types/lesson';

type Props = ScreenProps;

const Lesson: React.FC<Props> = ({ navigation, route }) => {

    const { image, screens, uuid } = route.params;

    const { height } = useWindowDimensions();
    const { t } = useTranslation();

    const accent = 'salmon';

    const [screenIndex, setScreenIndex] = useState(0);

    const screen = useMemo(() => screens[screenIndex], [screenIndex, screens]);
    const sections = useMemo(() => screen.sections, [screen, screenIndex])

    const onNext = async () => {
        if (screenIndex === (screens.length - 1)) {
            await completeLesson(uuid)
            navigation.goBack();
        } else {
            setScreenIndex(screenIndex + 1);
        }
    }

    const onBack = () => screenIndex !== 0 ? setScreenIndex(screenIndex - 1) : navigation.goBack();

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: height / 4, elevation: 5, backgroundColor: '#FFF', borderRadius: 10 }} source={image}>
                    <View style={{ flex: 1, padding: 20, justifyContent: 'flex-start' }}>
                        <TouchableWithoutFeedback onPress={() => { navigation.goBack() }}>
                            <View style={{ borderRadius: 50, backgroundColor: colors.BLACK.primary, padding: 10, alignSelf: 'flex-start', elevation: 4 }}>
                                <Feather name='arrow-left' size={24} color='#ecf0f1' />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </ImageBackground>
                <View style={{ borderBottomColor: '#454545', borderBottomWidth: 0.5, paddingVertical: 20 }}>
                    <CustomText font='semibold' size={17}>{screen.name}</CustomText>
                    <CustomText style={{ marginTop: hp(1) }} font='regular' size={14} color={colors.BLACK.secondary}>{screen.type}</CustomText>
                    <CustomText style={{ marginTop: hp(1) }} font='medium' size={14}>{screen.intro}</CustomText>
                </View>

                {
                    sections.map((section: Section, index: number) => {
                        return (
                            <View key={index} style={{ borderBottomColor: '#454545', borderBottomWidth: 0.5, paddingVertical: hp(2) }}>
                                <CustomText font='semibold' size={17}>{section.header}</CustomText>
                                {
                                    section.paragraphs.map((string, index) => {
                                        return (
                                            <CustomText key={index} style={{ marginTop: hp(1) }}>{string}</CustomText>
                                        )
                                    })
                                }
                            </View>
                        )
                    })
                }

                <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: hp(2) }]}>
                    <TouchableCustomText font='medium' size={13} color={accent} onPress={() => { onBack() }}>{screenIndex != 0 ? t('lessonButton2') : t('lessonButton1')}</TouchableCustomText>
                    <TouchableCustomText font='medium' size={13} color={accent} onPress={() => { onNext() }}>{screenIndex == 0 && screens.length > 1 ? t('lessonButton3') : t('lessonButton4')}</TouchableCustomText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Lesson;