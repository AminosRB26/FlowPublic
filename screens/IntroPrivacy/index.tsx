import React, { useState } from 'react';
import { View, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Checkbox from '../../components/Checkbox';
import CustomText from '../../components/CustomText';
import PrivacyWriting from '../../components/PrivacyWriting';
import TouchableIcon from '../../components/TouchableIcon';
import GlobalStyle from '../../style/GlobalStyle';

const IntroPrivacy: React.FC<ScreenProps> = ({ navigation }) => {

    const [confirm, setConfirm] = useState<boolean>(false);

    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} style={{ backgroundColor: '#ecf0f1' }} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <TouchableIcon style={{ position: 'absolute', left: 0, bottom: 0 }} name='chevron-left' size={20} onPress={() => { navigation.goBack() }} />
                <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>Privacy Policy</CustomText>
            </SafeAreaView>

            <PrivacyWriting />

            <View style={{ marginTop: hp(2) }}>
                <CustomText font='medium'>Before you continue you must accept our privacy policy</CustomText>
                <View style={[GlobalStyle.rowContainerVCentered, { marginTop: hp(1) }]}>
                    <Checkbox selected={confirm} onChangeValue={(val: boolean) => { setConfirm(val) }} />
                    <CustomText style={{ marginLeft: wp(1) }} font='medium'>I have read and agree to the privacy policy</CustomText>
                </View>
            </View>

            <TouchableWithoutFeedback onPress={() => { confirm ? navigation.navigate('Login') : Alert.alert('Privacy Policy', 'You must accept our privacy policy before continuing') }}>
                <View style={{ height: hp(7), backgroundColor: '#FDA361', borderRadius: wp(2.5), justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>
                    <CustomText font='bold' size={15} color={'#FFF'}>Continue</CustomText>
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    )
}

export default IntroPrivacy;