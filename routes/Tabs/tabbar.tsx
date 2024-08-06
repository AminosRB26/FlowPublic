import React from 'react';
import { Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import HomeSVG from '../../assets/icons/home.svg';
import ChartSVG from '../../assets/icons/candlestick-chart.svg';
import CaseSVG from '../../assets/icons/large-suitcase.svg';
import SettingsSVG from '../../assets/icons/settings.svg';
import colors from '../../style/colors';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const TabBar = ({ state, navigation, accent = colors.GREEN.primary }: any) => {

    return (
        <View style={styles.tabContainer}>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Home'); }}>
                <View style={styles.tabButton}>
                    <HomeSVG stroke={state.index === 0 ? accent : colors.BLACK.secondary} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Habits'); }}>
                <View style={styles.tabButton}>
                    <ChartSVG stroke={state.index === 1 ? accent : colors.BLACK.secondary} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('CreateHabit'); }}>
                <View style={styles.tabButton}>
                    <View style={styles.centerButton}>
                        <Image style={{ height: hp(5), width: hp(5) }} source={require('../../assets/icons/epoxy-logo-icon.png')} />
                    </View>
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Learn'); }}>
                <View style={styles.tabButton}>
                    <CaseSVG stroke={state.index === 2 ? accent : colors.BLACK.secondary} />
                </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={() => { navigation.navigate('Settings'); }}>
                <View style={styles.tabButton}>
                    <SettingsSVG stroke={state.index === 3 ? accent : colors.BLACK.secondary} />
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: hp(7.5),
        width: '100%',
        backgroundColor: '#FFF',
    },
    tabButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerButton: {
        overflow: 'hidden',
        borderRadius: 50,
        backgroundColor: '#44B29C',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
        borderWidth: 2,
        borderColor: '#fcf5eb',
        height: hp(8.5),
        width: hp(8.5),
        marginTop: -hp(3),
    },
});

export default TabBar;
