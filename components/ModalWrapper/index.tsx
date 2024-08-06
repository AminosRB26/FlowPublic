import React, { useEffect } from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import GlobalStyle from '../../style/GlobalStyle';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const ModalWrapper = ({ children }: any) => {

    const { height } = useWindowDimensions();

    const progress = useSharedValue(1);

    const vStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: progress.value * height
                }
            ]
        }
    })

    useEffect(() => {
        progress.value = withTiming(0, { duration: 150 });
    })

    return (
        <Animated.View style={[vStyle, GlobalStyle.modalCard, styles.container]}>
            {children}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 10001,
        paddingTop: 0,
        paddingBottom: 0,
        borderRadius: wp(2),
        overflow: 'hidden'
    }
})

export default ModalWrapper;