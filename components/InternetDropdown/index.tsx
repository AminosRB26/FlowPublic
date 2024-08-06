import React, { useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../CustomText';
import netinfo from '@react-native-community/netinfo';

type Props = {
    
}

const InternetDropdown: React.FC<Props> = () => {

    const { width } = useWindowDimensions();

    const offsetY = useSharedValue(-hp(7));

    const vStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateY: offsetY.value }
            ]
        }
    })

    useEffect(() => {
        // Creates a internet listener, which is triggered if internet connection state changes
        netinfo.addEventListener((state) => {
            offsetY.value = withTiming(state.isConnected ? -hp(7) : hp(3), { duration: 700 })
        });
    })

    return (
        <Animated.View style={[vStyle, styles.container, { width: width - wp(6) }]}>
            <CustomText font='medium' size={13}>No Internet Connection</CustomText>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: hp(6),
        borderRadius: 50,
        backgroundColor: '#FFF',
        elevation: 8,
        shadowColor: 'rgba(0, 0, 0, 0.35)',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})

export default InternetDropdown;