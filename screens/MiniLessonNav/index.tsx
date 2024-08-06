import React from 'react';
import { View, FlatList } from 'react-native';
import CustomText from '../../components/CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { miniLessons } from '../../lessons/miniLessons';
import MiniLessonCard from '../../components/MiniLessonCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableIcon from '../../components/TouchableIcon';
import { useTranslation } from 'react-i18next';
import { getDescriptionTranslation, getTitleTranslation } from './functions';
import { generateLessonGetterMap } from '../../lessons';

interface Props extends ScreenProps {}

const MiniLessonNav: React.FC<Props> = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    const handleNavigate = async (id: string) => {
        const lesson = generateLessonGetterMap(i18n.language)[id]();
        lesson && navigation.navigate('Lesson', lesson);
    }

    return (
        <View style={{ flex: 1, paddingTop: hp(2), paddingBottom: hp(4), paddingHorizontal: wp(4) }}>
            <SafeAreaView>
                <TouchableIcon style={{ position: 'absolute', left: 0, bottom: 0 }} name='chevron-left' size={20} onPress={() => { navigation.goBack() }} />
                <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>{t('miniLessonNavHeader1')}</CustomText>
            </SafeAreaView>

            <FlatList
                data={miniLessons}
                style={{ marginTop: hp(2) }}
                numColumns={2}
                contentContainerStyle={{ flexGrow: 1 }}
                columnWrapperStyle={{ justifyContent: 'space-between', marginTop: hp(2) }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <MiniLessonCard {...item} title={getTitleTranslation(item.id, t)} description={getDescriptionTranslation(item.id, t)} onPress={() => { handleNavigate(item.uuid) }} />
                    )
                }}
            />
        </View>
    )
}

export default MiniLessonNav;