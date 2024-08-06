import { View, StyleSheet } from 'react-native';
import React from 'react';
import TimePicker from '../TimePicker';
import CustomText from '../CustomText';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const TimePickerModal = () => {
    return (
        <View style={styles.container}>
            <CustomText>Select Time</CustomText>

            <TimePicker />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: wp(88),
        borderRadius: wp(4),
        padding: wp(4),
        backgroundColor: '#FFFFFF',
    },
});

export default TimePickerModal;
