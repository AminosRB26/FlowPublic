import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import CustomText from '../CustomText';
import GlobalStyle from '../../style/GlobalStyle';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
    title?: string;
    description?: string;
    onPress?: (() => void);
}

const SettingsCard: React.FC<Props> = ({
    title,
    description,
    onPress,
}) => {

    return (
        <TouchableWithoutFeedback onPress={() => { onPress && onPress() }}>
            <View style={styles.container}>
                <View style={[GlobalStyle.rowContainerVCentered, { flex: 1 }]}>
                    <View style={styles.circle}>
                        <Feather name='file-text' size={24} color={'#FFF'} />
                    </View>
                    <View style={{ flex: 1, paddingLeft: wp(3) }}>
                        <CustomText font='bold' size={14.5}>{title}</CustomText>
                        <CustomText style={{ marginTop: hp(0.5) }} font='medium' size={13} color={colors.BLACK.secondary}>{description}</CustomText>
                    </View>
                </View>

                <Icon name='chevron-right' size={20} color={colors.BLACK.secondary} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: wp(2.5),
        paddingVertical: hp(2.02),
        paddingHorizontal: wp(4.5),
    },
    circle: {
        height: hp(7),
        width: hp(7),
        borderRadius: 50,
        backgroundColor: colors.BLACK.primary,
        justifyContent: 'center',
        alignItems: 'center'
    }
    // container: {
    //     backgroundColor: '#FFF',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     borderRadius: wp(2.5),
    //     elevation: 8,
    //     shadowColor: 'rgba(0, 0, 0, 0.5)',
    //     padding: hp(2),
    //     marginTop: hp(2)
    // },
    // circle: {
    //     height: hp(7),
    //     width: hp(7),
    //     borderRadius: 50,
    //     backgroundColor: colors.BLACK.primary,
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // }
})

export default SettingsCard;