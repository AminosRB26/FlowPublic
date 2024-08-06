import React, { useCallback, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../../components/CustomText';
import LessonCard from '../../components/LessonCard';
import { getLessons } from '../../utils/asyncFunctions';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableIcon from '../../components/TouchableIcon';
import { useFocusEffect } from '@react-navigation/native';
import { getTimeTranslation, getTitleTranslation } from './functions';
import { useTranslation } from 'react-i18next';
import colors from '../../style/colors';
import { generateLessonGetterMap } from '../../lessons';
import { LessonImageMap } from '../../constants/lessons';

interface Props extends ScreenProps { }

const LessonList: React.FC<Props> = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    const [lessons, setLessons] = useState<any[] | null>(null);

    const init = async () => {
        var response = await getLessons();
        setLessons(response);
    };

    const handleNavigate = useCallback(async (id: string) => {
        const map = generateLessonGetterMap(i18n.language);
        const lessonContent = map[id]();

        if (lessonContent) {
            navigation.navigate('Lesson', lessonContent);
        } else {
            console.error('Failed to fetch lesson content');
        }
    }, [i18n.language, navigation]);

    useFocusEffect(
        React.useCallback(() => {
            init();
        }, [])
    );

    return (
        <View style={styles.root}>
            <SafeAreaView style={{ paddingHorizontal: wp(4.5), paddingBottom: hp(2.02) }}>
                <TouchableIcon style={{ marginLeft: -wp(1.5) }} name="chevron-left" size={24} color="#33415C" onPress={() => { navigation.goBack(); }} />
                <CustomText style={{ marginTop: hp(0.5) }} font="bold" size={17} >{t('homePageLine1')}</CustomText>
                <CustomText style={{ marginTop: hp(0.5) }} font="medium" size={13} color={colors.BLACK.secondary}>{t('createPageHeader2')}</CustomText>
            </SafeAreaView>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={lessons}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => {
                    return (
                        <LessonCard  {...item} title={getTitleTranslation(item.title, t)} source={LessonImageMap[item.id]} description={`${getTimeTranslation(item.title, t)} COURSE`} type={t('lessonNavHeader12')} onPress={() => { handleNavigate(item.id); }} />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#ECF0F1',
        paddingTop: hp(2),
    },
    listContainer: {
        paddingTop: hp(0.8),
        paddingBottom: hp(2),
        alignItems: 'center',
        paddingHorizontal: wp(4.5),
        gap: hp(3),
    },
});

export default LessonList;
