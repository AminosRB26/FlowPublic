import React from 'react';
import { View, useWindowDimensions, ImageBackground, TouchableWithoutFeedback, ImageBackgroundProps } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';

interface Props extends ImageBackgroundProps {
    onBackPress?: (() => void);
    onEdit?: (() => void);
}

const BackgroundCard: React.FC<Props> = ({
    onBackPress = () => { },
    onEdit,
    ...props
}) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    return (
        <ImageBackground {...props} imageStyle={{ borderRadius: wp(2.5) }} style={{ width: '100%', aspectRatio: '16/9' }}>
            <View style={{ flex: 1, padding: hp(3) }}>
                <View style={[GlobalStyle.rowContainerVCenteredSpaced]}>
                    <TouchableWithoutFeedback onPress={() => { onBackPress() }}>
                        <View style={{ borderRadius: 50, backgroundColor: colors.BLACK.primary, padding: wp(2.5), alignSelf: 'flex-start', elevation: 4 }}>
                            <Feather name='arrow-left' size={22 * scale} color={colors.WHITE.secondary} />
                        </View>
                    </TouchableWithoutFeedback>
                    {
                        onEdit &&
                        <TouchableWithoutFeedback onPress={() => { onEdit() }}>
                            <View style={{ borderRadius: 50, backgroundColor: colors.BLACK.primary, padding: 10, alignSelf: 'flex-start', elevation: 4 }}>
                                <Feather name='edit' size={22 * scale} color={colors.WHITE.secondary} />
                            </View>
                        </TouchableWithoutFeedback>
                    }
                </View>
            </View>
        </ImageBackground>

    )
}

export default BackgroundCard;