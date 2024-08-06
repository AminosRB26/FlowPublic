import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BackgroundCard from '../../components/BackgroundCard';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import DropDownPicker from 'react-native-dropdown-picker';
import fonts from '../../style/fonts';
import { saveLanguage } from '../../utils/asyncFunctions';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { languageToLocale } from '../../utils/strings';

interface Props extends ScreenProps { }

const BasicSettings: React.FC<Props> = ({ navigation }) => {

    const { t, i18n } = useTranslation();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(i18n.language);

    const [items, setItems] = useState([
        { label: 'English', value: 'English' },
        { label: 'Spanish', value: 'Spanish' },
        { label: 'German', value: 'German' },
        { label: 'Portuguese', value: 'Portuguese' },
        { label: 'Italian', value: 'Italian' },
        { label: 'Russian', value: 'Russian' },
        { label: 'French', value: 'French' },
    ]);

    const onChangeLanguage = (language: string) => {
        i18n.changeLanguage(languageToLocale(language));
        setValue(language);
        saveLanguage(language);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE.secondary, paddingTop: hp(2), paddingBottom: hp(2), paddingHorizontal: wp(3) }}>
            <BackgroundCard source={require('../../assets/images/settings-background.png')} onBackPress={() => { navigation.goBack() }} />

            <View style={{ paddingVertical: hp(2), borderBottomWidth: 0.5, borderColor: colors.BLACK.secondary }}>
                <CustomText font='bold' size={17} letterSpacing={0.5}>{t('basicSettingsHeader1')}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='regular' size={14} color={colors.BLACK.secondary}>{t('basicSettingsHeader2')}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14}>{t('basicSettingsHeader3')}</CustomText>
            </View>

            <View style={{ paddingVertical: hp(3) }}>
                <View style={{ justifyContent: 'space-between' }}>
                    <CustomText font='semibold' size={15} letterSpacing={0.5}>{t('basicSettingsHeader6')}</CustomText>
                    <DropDownPicker
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                        setItems={setItems}
                        labelStyle={styles.dropDownText}
                        onChangeValue={(val) => { onChangeLanguage(val || 'English') }}
                        textStyle={styles.dropDownText}
                        dropDownContainerStyle={styles.dropDownContainer}
                        style={styles.dropDownStyle}
                        containerStyle={{ marginTop: hp(2) }}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    dropDownStyle: {
        backgroundColor: colors.WHITE.primary,
        borderWidth: 0
    },
    dropDownText: {
        fontFamily: fonts.QUICKSAND.medium,
        color: colors.BLACK.primary
    },
    dropDownContainer: {
        borderWidth: 0
    }
})

export default BasicSettings;