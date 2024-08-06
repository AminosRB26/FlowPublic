import React from 'react';
import { ImageBackground, View, TouchableWithoutFeedback, StyleProp, ViewStyle, ImageBackgroundProps } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import CustomText from '../CustomText';

interface Props extends ImageBackgroundProps {
    title?: string;
    description?: string;
    completed?: boolean;
    onPress?: (() => void);
    style?: StyleProp<ViewStyle>;
}

const LessonCard: React.FC<Props> = ({
    title = '',
    description = '',
    completed = false,
    onPress = () => { },
    style = {},
    ...props
}) => {

    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            <View style={[{ backgroundColor: '#FFF', borderRadius: wp(2.5), elevation: 5, overflow: 'hidden', width: '100%', aspectRatio: '16/9' }, style]}>
                <ImageBackground {...props} style={{ height: '100%', width: '100%' }}>
                    <View style={{ flex: 1, padding: hp(2.5), justifyContent: 'flex-start' }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.BLACK.primary, padding: wp(2.5), alignSelf: 'flex-end', elevation: 4 }}>
                            <Feather name='arrow-right' size={24} color='#ecf0f1' />
                        </View>
                        <View style={{ borderRadius: wp(1.5), backgroundColor: '#FCF5EB', padding: wp(2), position: 'absolute', bottom: 0, margin: hp(1.21) }}>
                            <View style={[GlobalStyle.rowContainerVCenteredSpaced]}>
                                <CustomText font='bold' size={13} letterSpacing={0.5}>{title}</CustomText>
                                <Feather name={'check'} size={14} color={completed ? '#48C9B0' : 'transparent'} />
                            </View>
                            <CustomText style={{ marginTop: hp(0.25) }} font='medium' size={11} letterSpacing={0.5}>{description}</CustomText>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default LessonCard;