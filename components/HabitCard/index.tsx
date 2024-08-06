import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import CustomText from '../CustomText';
import { formatDateToDDMMYYYY } from '../../utils/strings';

interface Props extends Habit {
    dateStartedText: string;
    frequencyText: string;
    onPress?: Function;
}

const HabitCard: React.FC<Props> = ({
    title = '',
    description = '',
    createdTimestamp = '',
    dateStartedText = '',
    weeklyFrequency = 0,
    frequencyText = '',
    onPress = () => { }
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <CustomText font='semibold' size={16}>{title}</CustomText>
                    </View>
                    <CustomText style={{ marginTop: hp(1) }} font='medium' size={14} color={colors.BLACK.secondary}>{description}</CustomText>
                    <View style={[GlobalStyle.rowContainerVCentered, { marginTop: hp(0.5) }]}>
                        <View style={{ backgroundColor: '#f5f5f5', borderRadius: 10, padding: wp(2), alignSelf: 'flex-start', marginTop: hp(1), flexDirection: 'column' }}>
                            <CustomText textAlign='center' font='bold' size={13} color={colors.GREEN.primary}>{formatDateToDDMMYYYY(new Date(createdTimestamp))}</CustomText>
                            <CustomText textAlign='center' font='regular' size={12} color={colors.GREEN.primary}>{dateStartedText}</CustomText>
                        </View>
                        <View style={{ backgroundColor: '#f5f5f5', borderRadius: 10, padding: wp(2), alignSelf: 'flex-start', marginTop: hp(1), flexDirection: 'column', marginLeft: wp(2) }}>
                            <CustomText textAlign='center' font='bold' size={13} color={colors.GREEN.primary}>{weeklyFrequency}x</CustomText>
                            <CustomText textAlign='center' font='regular' size={12} color={colors.GREEN.primary}>{frequencyText}</CustomText>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.2, justifyContent: 'center' }}>
                    <View style={{ alignSelf: 'center' }}><Feather name='chevron-right' size={20} color='#115e65' /></View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        borderRadius: 20,
        borderWidth: 0,
        borderStyle: 'dashed',
        borderColor: '#c0c0c0',
        paddingVertical: hp(2),
        paddingLeft: wp(5),
        marginTop: hp(3),
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
    }
})

export default HabitCard;