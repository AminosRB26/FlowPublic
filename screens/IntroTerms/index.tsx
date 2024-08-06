import React, { useState } from 'react';
import { Alert, ScrollView, TouchableWithoutFeedback, View } from 'react-native';
import CustomText from '../../components/CustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import GlobalStyle from '../../style/GlobalStyle';
import Checkbox from '../../components/Checkbox';
import TermsWriting from '../../components/TermsWriting';
import { SafeAreaView } from 'react-native-safe-area-context';

const IntroTerms: React.FC<ScreenProps> = (props) => {

    const [confirm, setConfirm] = useState<boolean>(false);

    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} style={{ backgroundColor: '#ecf0f1' }} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>Terms & Conditions</CustomText>
            </SafeAreaView>

            <TermsWriting />

            <View style={{ marginTop: hp(2) }}>
                <CustomText font='medium'>Before you continue you must accept our terms and conditions</CustomText>
                <View style={[GlobalStyle.rowContainerVCentered, { marginTop: hp(1) }]}>
                    <Checkbox selected={confirm} onChangeValue={(val: boolean) => { setConfirm(val) }} />
                    <CustomText style={{ marginLeft: wp(1) }} font='medium'>I have read and agree to the terms and conditions</CustomText>
                </View>
            </View>

            <TouchableWithoutFeedback onPress={() => { confirm ? props.navigation.navigate('IntroPrivacy') : Alert.alert('Terms & Conditions', 'You must accept the terms and conditions before continuing') }}>
                <View style={{ height: hp(7), backgroundColor: '#FDA361', borderRadius: wp(2.5), justifyContent: 'center', alignItems: 'center', marginTop: hp(2) }}>
                    <CustomText font='bold' size={15} color={'#FFF'}>Continue</CustomText>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

export default IntroTerms;