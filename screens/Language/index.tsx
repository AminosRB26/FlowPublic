import React, { useState } from 'react';
import { View, ScrollView, useWindowDimensions } from 'react-native';
import CustomText from '../../components/CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../style/colors';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import { saveLanguage, saveIntroBool } from '../../utils/asyncFunctions';
import { SafeAreaView } from 'react-native-safe-area-context';
import TouchableIcon from '../../components/TouchableIcon';
import GlobalStyle from '../../style/GlobalStyle';
import Button from '../../components/Button';
import { useTranslation } from 'react-i18next';
import { languageToLocale } from '../../utils/strings';

const Language: React.FC<ScreenProps> = ({ navigation }) => {

    const { width } = useWindowDimensions();

    const { i18n } = useTranslation();

    const [language, setLanguage] = useState('English');

    const scale = width / 390;

    const handleContinue = async () => {
        saveIntroBool(true);
        i18n.changeLanguage(languageToLocale(language));
        saveLanguage(language);
        navigation.navigate('Tabs');
    }

    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} style={{ backgroundColor: '#ECF0F1' }} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <TouchableIcon style={{ position: 'absolute', left: 0, bottom: 0 }} name='chevron-left' size={20} onPress={() => { navigation.goBack() }} />
                <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>Language</CustomText>
            </SafeAreaView>
            <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: wp(25) }}>
                <View style={{ height: hp(18) }}>
                    <ScrollPicker
                        dataSource={['Spanish', 'English', 'German', 'Portuguese', 'Italian', 'Russian', 'French']}
                        selectedIndex={1}
                        renderItem={(data, index, selected) => {
                            return (
                                <CustomText font={selected ? 'bold' : 'semibold'} size={selected ? 16 * scale : 14 * scale} color={selected ? colors.BLACK.primary : colors.BLACK.secondary}>{data}</CustomText>
                            )
                        }}
                        onValueChange={(data) => { setLanguage(data.toString()) }}
                        wrapperHeight={hp(18)}
                        itemHeight={hp(7)}
                        highlightColor='#d8d8d8'
                        wrapperBackground='transparent'
                    />
                </View>
            </View>

            <Button font='bold' fontSize={15} label='Continue' onPress={() => { handleContinue() }} />

        </ScrollView>
    )
}

export default Language;