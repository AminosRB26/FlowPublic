import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, StyleProp, ViewStyle, TouchableOpacity } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../style/colors';
import CustomText from '../CustomText';
import { FontTypes } from '../CustomText/types';

type Props = {
    label?: string;
    onPress?: (() => void);
    style?: StyleProp<ViewStyle>;
    fontSize?: number;
    font?: FontTypes;
    color?: string;
    backgroundColor?: string;
}

const Button: React.FC<Props> = ({
    label = '',
    onPress = () => { },
    style = {},
    fontSize = 13,
    font = 'bold',
    color = '#FFF',
    backgroundColor = colors.ORANGE.primary
}) => {
    return (
        <TouchableOpacity onPress={() => { onPress() }}>
            <View style={[styles.container, { backgroundColor }, style]}>
                <CustomText font={font} size={fontSize} color={color} letterSpacing={0.5}>{label}</CustomText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: wp(2.5),
        height: wp(13),
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button;