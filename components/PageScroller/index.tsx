import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import GlobalStyle from '../../style/GlobalStyle';
import TouchableIcon from '../../components/TouchableIcon';
import Button from '../../components/Button';
import colors, { hexToRBGA } from '../../style/colors';
import TouchableCustomText from '../../components/TouchableCustomText';
import * as Icons from '../../assets/icons';

const PageScroller: React.FC<PageScrollerProps> = ({
    hideHeader = false,
    onComplete = () => { },
    onDestroy = () => { },
    children,
    primaryColor,
    primaryBackgroundColor,
}) => {

    const progress = useSharedValue(0);

    const { width } = useWindowDimensions();

    const [index, setIndex] = useState(0);

    const PAGE_COUNT = useMemo(() => React.Children.count(children), [children])

    const vStyle = useAnimatedStyle(() => { return { transform: [{ translateX: progress.value * -width }] } })
    const sStyle = useAnimatedStyle(() => { return { width: withSpring((progress.value + 1) * (100 / PAGE_COUNT)) } })

    const handleContinue = useCallback(() => {

        const nextScreenIndex = index + 1;

        // Scrolling complete
        if (nextScreenIndex === (PAGE_COUNT)) {
            onComplete();
            return;
        }

        progress.value = withTiming(nextScreenIndex);
        setIndex(nextScreenIndex);

    }, [PAGE_COUNT, progress.value, index])

    const handleBack = useCallback(() => {
        const prevScreenIndex = index - 1;

        if (prevScreenIndex >= 0) {
            progress.value = withTiming(index - 1);
            setIndex(prevState => prevState - 1);
        } else {
            onDestroy();
        }
    }, [PAGE_COUNT, progress.value, index])

    return (
        <View style={{ flex: 1, backgroundColor: primaryBackgroundColor, justifyContent: 'space-between' }}>
            {/* Header  */}
            {
                !hideHeader &&
                <View style={[styles.header]}>
                    <View style={[GlobalStyle.rowContainerVCenteredSpaced]}>
                        <TouchableIcon renderIcon={<Icons.ChevronLeft stroke={primaryColor} />} size={20} onPress={() => { handleBack() }} color={colors.BLACK.primary} />
                        <TouchableCustomText font='medium' onPress={() => { handleContinue() }} color={primaryColor}>{'Skip'}</TouchableCustomText>
                    </View>
                    <View style={styles.slider}>
                        <Animated.View style={[sStyle, styles.sliderColor]} />
                    </View>
                </View>
            }
            {/* Content  */}
            <Animated.View style={[vStyle, styles.content, { width: width }]}>
                {children}
            </Animated.View>
            {/* Footer  */}
            <View style={[styles.footer]}>
                <Button label={(index + 1) === PAGE_COUNT ? 'Finish' : 'Continue'} onPress={() => { handleContinue() }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        justifyContent: 'flex-end',
        height: hp(10),
        paddingHorizontal: wp(5),
        paddingBottom: hp(2),
    },
    content: {
        flexDirection: 'row',
        height: hp(80),
    },
    footer: {
        height: hp(10),
        paddingHorizontal: wp(5),
        justifyContent: 'flex-start',
        paddingBottom: hp(2),
    },
    slider: {
        position: 'absolute',
        alignSelf: 'center',
        width: 100,
        height: 6,
        borderRadius: 50,
        backgroundColor: hexToRBGA(colors.PURPLE.primary, '0.2'),
        overflow: 'hidden',
        top: hp(6)
    },
    sliderColor: {
        height: '100%',
        backgroundColor: colors.PURPLE.primary,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    }
})

export default PageScroller;