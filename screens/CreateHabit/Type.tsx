import React from 'react';
import { View, TouchableWithoutFeedback, ImageBackground, StyleSheet, ImageURISource } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../../components/CustomText';

type Props = {
    label?: string,
    selected?: boolean,
    onPress?: Function,
    image?: ImageURISource
}

const Type = ({
    label = '',
    selected = false,
    onPress = () => { },
    image = require('../../assets/images/square-green-moon.png'),
}: Props) => {
    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            <View style={[styles.container, { borderColor: selected ? '#454545' : 'transparent' }]}>
                <ImageBackground imageStyle={{ borderRadius: 10 }} style={{ width: '100%', height: '100%' }} resizeMode='cover' source={image}>
                    <View style={{ flex: 1, paddingHorizontal: 5, paddingVertical: 7 }}>
                        <CustomText font='semibold' letterSpacing={0.5} size={12} color={'#FFF'}>{label}</CustomText>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(15),
        width: wp(44),
        borderRadius: wp(3),
        borderWidth: wp(0.5),
    }
})

export default Type;