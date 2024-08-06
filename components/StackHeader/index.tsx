import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TouchableIcon from '../TouchableIcon'
import CustomText from '../CustomText'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import colors from '../../style/colors'
import { useNavigation } from '@react-navigation/native'

interface Props {
    label?: string;
    body?: string;
    onArrowPress?: (() => void);
    inline?: boolean;
}

const StackHeader: React.FC<Props> = ({
    label,
    body,
    onArrowPress,
    inline
}) => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={[{
            paddingBottom: inline ? hp(4) : hp(2.02)
        }, inline && { flexDirection: 'row', alignItems: 'center' }]}>
            <TouchableIcon style={{ marginLeft: -wp(1.5) }} name='chevron-left' size={24} color='#33415C' onPress={() => { onArrowPress ? onArrowPress : navigation.goBack() }} />
            <CustomText style={{ marginTop: inline ? -hp(0.5) : hp(0.5), marginLeft: inline ? wp(2.5) : 0 }} font='bold' size={17}>{label}</CustomText>
            {inline && <CustomText style={{ marginTop: hp(0.5) }} font='medium' size={13} color={colors.BLACK.secondary}>{body}</CustomText>}
        </SafeAreaView>
    )
}

export default StackHeader;