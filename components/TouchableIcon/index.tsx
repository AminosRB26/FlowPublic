import React from 'react';
import { StyleProp, TextStyle, TouchableWithoutFeedback, useWindowDimensions } from 'react-native';
import colors from '../../style/colors';
import Feather from 'react-native-vector-icons/Feather';

interface Props {
    name?: string;
    color?: string;
    size?: number;
    onPress?: (() => void);
    renderIcon?: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

const TouchableIcon: React.FC<Props> = ({
    name = '',
    color = colors.BLACK.primary,
    size = 24,
    onPress = () => { },
    renderIcon = undefined,
    style = {}
}) => {

    const { width } = useWindowDimensions();
    const scale = width / 390;

    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            {renderIcon ? renderIcon : <Feather style={[style, { zIndex: 1 }]} name={name} size={size * scale} color={color} />}
        </TouchableWithoutFeedback>
    )
}

export default TouchableIcon;