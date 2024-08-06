import { View, TextInput, TextInputProps, StyleSheet, StyleProp, ViewStyle, useWindowDimensions } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import fonts from '../../style/fonts'
import colors from '../../style/colors';
import CustomText from '../CustomText';

interface Props extends TextInputProps {
    wrapperStyle?: StyleProp<ViewStyle>;
    fontSize?: number;
    floatingPlaceholder?: string;
}

const TextBox: React.FC<Props> = ({
    wrapperStyle,
    fontSize = 11.5,
    placeholderTextColor = colors.BLACK.secondary,
    floatingPlaceholder,
    ...props
}) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    return (
        <View style={[styles.wrapper, wrapperStyle]}>
            {
                floatingPlaceholder && <CustomText size={12} family='POPPINS' font='medium' style={{ backgroundColor: '#FFF', position: 'absolute', top: -wp(3), left: wp(2), paddingHorizontal: wp(2) }}>{floatingPlaceholder}</CustomText>
            }
            <TextInput {...props} placeholderTextColor={placeholderTextColor} style={[{ paddingHorizontal: wp(4), fontSize: fontSize * scale, fontFamily: fonts.POPPINS.regular, color: colors.BLACK.primary, paddingVertical: 0 }, props.style]} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        height: wp(13),
        borderWidth: wp(0.375),
        borderColor: 'rgba(0, 0, 0, 0.145)',
        // borderColor: 'rgba(17, 17, 17, 0.1)',
        borderRadius: wp(2),
        justifyContent: 'center'
    }
})

export default TextBox;