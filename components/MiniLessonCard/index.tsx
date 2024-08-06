import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp, useWindowDimensions, View, TouchableWithoutFeedback } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import colors from '../../style/colors';
import GlobalStyle from '../../style/GlobalStyle';
import CustomText from '../CustomText';

interface Props {
    image: ImageSourcePropType;
    title?: string;
    description?: string;
    imageStyle?: StyleProp<ImageStyle>;
    onPress?: (() => void);
}

const MiniLessonCard: React.FC<Props> = ({
    image,
    title = '',
    description = '',
    imageStyle = {},
    onPress = () => { }
}) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            <View style={{ width: (width - wp(12)) * 0.5, }}>
                <Image style={[{ height: (width - wp(12)) * 0.28125, aspectRatio: '16/9', borderRadius: wp(2.5) }, imageStyle]} resizeMode='cover' source={image} />
                <View style={{ flex: 1, paddingHorizontal: wp(1), paddingVertical: hp(1) }}>
                    <View style={[GlobalStyle.rowContainer]}>
                        <FontAwesome style={{ marginTop: hp(0.2) }} name='unlock' size={16 * scale} color={colors.BLACK.primary} />
                        <CustomText style={{ marginLeft: wp(1) }} font='bold' size={14}>{title}</CustomText>
                    </View>
                    <CustomText style={{ marginTop: hp(0.5) }} font='semibold' size={12} color={colors.BLACK.secondary}>{description}</CustomText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MiniLessonCard;