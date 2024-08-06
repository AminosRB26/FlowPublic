import { View, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';
import Animated, { useAnimatedGestureHandler, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { PanGestureHandler } from 'react-native-gesture-handler';
import CustomText from '../CustomText';

const TimePicker = () => {

    const { width } = useWindowDimensions();
    const CLOCK_WIDTH = (width / 1.75);
    const CLOCK_RADIUS = CLOCK_WIDTH / 2;
    const CLOCK_CENTER_X = CLOCK_RADIUS;
    const CLOCK_CENTER_Y = CLOCK_RADIUS;
    const BOX_RADIUS = (width * 0.05); // Radius of the movable box

    const x = useSharedValue(CLOCK_CENTER_X);
    const y = useSharedValue(CLOCK_CENTER_Y - (CLOCK_RADIUS - BOX_RADIUS));

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = x.value;
            ctx.startY = y.value;
        },
        onActive: (event, ctx) => {
            const offsetX = ctx.startX + event.translationX - CLOCK_CENTER_X;
            const offsetY = ctx.startY + event.translationY - CLOCK_CENTER_Y;
            const angle = Math.atan2(offsetY, offsetX);

            x.value = CLOCK_CENTER_X + (CLOCK_RADIUS - BOX_RADIUS) * Math.cos(angle);
            y.value = CLOCK_CENTER_Y + (CLOCK_RADIUS - BOX_RADIUS) * Math.sin(angle);
        },
        onEnd: () => {
            // Add any additional logic for when the gesture ends
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: x.value - BOX_RADIUS }, { translateY: y.value - BOX_RADIUS }],
        };
    });

    const times = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];

    return (
        <View style={[styles.clock, { height: CLOCK_WIDTH, width: CLOCK_WIDTH }]}>
            {times.map((time, index) => {
                const angle = ((index * 2 * Math.PI) / times.length) - (Math.PI / 2); // Offset by -Math.PI / 2 to start at the top center
                const textX = CLOCK_CENTER_X + (CLOCK_RADIUS - 20) * Math.cos(angle) - 10; // Adjusting for text width
                const textY = CLOCK_CENTER_Y + (CLOCK_RADIUS - 20) * Math.sin(angle) - 10; // Adjusting for text height

                return (
                    <View style={[styles.text, { left: textX, top: textY }]}>
                        <CustomText key={time} font="medium" family="POPPINS">
                            {time}
                        </CustomText>
                    </View>
                );
            })}
            <PanGestureHandler onGestureEvent={gestureHandler}>
                <Animated.View style={[styles.movableCircle, animatedStyle]} />
            </PanGestureHandler>
        </View>
    );
};

const styles = StyleSheet.create({
    clock: {
        backgroundColor: '#CECECE',
        borderRadius: 200,
    },
    movableCircle: {
        backgroundColor: 'blue',
        height: wp(10),
        width: wp(10),
        borderRadius: 200,
    },
    text: {
        width: wp(5),
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
    },
});

export default TimePicker;
