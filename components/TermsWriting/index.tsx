import React from 'react';
import { View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomText from '../CustomText';
import TermStrings from '../../data/terms.json';

const TermsWriting: React.FC<any> = () => {

    return (
        <View style={{ flex: 1 }} >
            <View style={{ marginTop: hp(2) }}>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line1}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line2}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line3}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line4}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line5}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line6}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line7}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line8}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line9}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Changes To This Terms And Conditions</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line10}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={16} letterSpacing={0.5}>Contact Us</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} letterSpacing={0.5}>{TermStrings.line11}</CustomText>
            </View>
        </View>
    )
}

export default TermsWriting;