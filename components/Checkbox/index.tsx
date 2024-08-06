import React from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, useWindowDimensions } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../style/colors';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

type Props = {
    onChangeValue?: Function,
    selected?: boolean
}

const Checkbox: React.FC<Props> = ({
    selected = false,
    onChangeValue = () => { }
}) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    return (
        <TouchableWithoutFeedback onPress={() => { onChangeValue(!selected) }}>
            <View style={[styles.container, { borderColor: selected ? '#FDA361' : colors.BLACK.primary, backgroundColor: selected ? '#FDA361' : 'transparent' }]}>
                <Feather name='check' size={12 * scale} color={selected ? '#FFF' : 'transparent'} />
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        height: hp(2.25),
        width: hp(2.25),
        borderRadius: wp(1)
    }
})

export default Checkbox;