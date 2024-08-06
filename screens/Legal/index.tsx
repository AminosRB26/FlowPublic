import React from 'react';
import { View, useWindowDimensions, TouchableWithoutFeedback, ImageBackground, StyleSheet } from 'react-native';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useTranslation } from 'react-i18next';
import StackHeader from '../../components/StackHeader';

const Legal: React.FC<ScreenProps> = ({ navigation }) => {

    const { height } = useWindowDimensions();

    const { t } = useTranslation();

    return (
        <View style={{ flex: 1, backgroundColor: colors.WHITE.secondary, paddingTop: hp(2), paddingBottom: hp(2), paddingHorizontal: wp(4) }}>
            <StackHeader inline label={t('legalNavHeader1')} />

            <View style={{ gap: hp(3) }}>
                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Privacy') }}>
                    <ImageBackground imageStyle={{ borderRadius: wp(2.5) }} style={[styles.image, { height: height / 5 }]} source={require('../../assets/images/square-orange-cloud.png')}>
                        <View style={{ borderRadius: 5, backgroundColor: '#fcf5eb', padding: 10, margin: wp(2.5) }}>
                            <CustomText font='bold' size={13} letterSpacing={0.5}>{t('legalNavHeader2')}</CustomText>
                            <CustomText style={{ marginTop: hp(0.25) }} font='medium' size={11} letterSpacing={0.5}>{t('legalNavHeader3')}{t('legalNavHeader6')}</CustomText>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { navigation.navigate('Terms') }}>
                    <ImageBackground imageStyle={{ borderRadius: wp(2.5) }} style={[styles.image, { height: height / 5 }]} source={require('../../assets/images/square-blue-cloud.png')}>
                        <View style={{ borderRadius: 5, backgroundColor: '#fcf5eb', padding: 10, margin: wp(2.5) }}>
                            <CustomText font='bold' size={13} letterSpacing={0.5}>{t('legalNavHeader4')}</CustomText>
                            <CustomText style={{ marginTop: hp(0.25) }} font='medium' size={11} letterSpacing={0.5}>{t('legalNavHeader5')}{t('legalNavHeader6')}</CustomText>
                        </View>
                    </ImageBackground>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    }
})

export default Legal;