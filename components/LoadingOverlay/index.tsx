import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated'

const Loader = () => {

    const progress = useSharedValue(0);

    const vStyle = useAnimatedStyle(() => ({}), [progress]);

    return (
        <Animated.View style={[vStyle]}>

        </Animated.View>
    )
}

const LoadingOverlay = () => {
    return (
        <View style={[StyleSheet.absoluteFillObject, { backgroundColor: 'rgba(0, 0, 0, 0.25)', justifyContent: 'center', alignItems: 'center' }]}>

        </View>
    )
}

export default LoadingOverlay