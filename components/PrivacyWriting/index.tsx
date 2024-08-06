import React from 'react';
import { View } from 'react-native';
import CustomText from '../CustomText';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import PrivacyStrings from '../../data/privacy.json';

const PrivacyWriting: React.FC<any> = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: hp(2) }}>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line1}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line2}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line3}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line4}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line5}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Cookies</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line6}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line7}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Service Providers</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line8}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line9}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Links To Other Sites</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line10}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Changes To This Privacy Policy</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line11}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line12}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Contact Us</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{PrivacyStrings.line13}</CustomText>
            </View>
        </View>
    )
}

export default PrivacyWriting;