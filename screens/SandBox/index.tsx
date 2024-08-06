import { View, StyleSheet } from 'react-native';
import React from 'react';
import DatePicker from '../../components/TimePicker';

const SandBox = () => {
    return (
        <View style={styles.root}>
            <DatePicker />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SandBox;
