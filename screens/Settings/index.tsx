import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import SettingsCard from '../../components/SettingsCard';

const Settings: React.FC<ScreenProps> = ({ navigation }) => {

    const { t } = useTranslation();

    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: wp(4), paddingTop: hp(2), paddingBottom: hp(2), backgroundColor: '#F5F5F5' }}>
            <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>{t('settingsPageHeader')}</CustomText>

            <View style={{ marginTop: hp(4), gap: hp(2.02) }}>
                <SettingsCard title={t('themeConfigurationHeader')} description={t('themeConfigLine1')} onPress={() => { navigation.navigate('Theme') }} />
                <SettingsCard title={t('basicSettingsHeader')} description={t('basicSettingsLine1')} onPress={() => { navigation.navigate('BasicSettings') }} />
                <SettingsCard title={t('legalHeader')} description={t('legalLine1')} onPress={() => { navigation.navigate('Legal') }} />
            </View>
        </SafeAreaView>
    );
}

export default Settings;