import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import CustomText from '../CustomText';
import { CustomTextProps } from '../CustomText/types';

interface Props extends CustomTextProps {
    onPress?: (() => void);
}

const TouchableCustomText: React.FC<Props> = ({
    children,
    onPress = () => { },
    ...props
}) => {
    return (
        <TouchableWithoutFeedback onPress={() => { onPress() }}>
            <View>
                <CustomText {...props}>
                    {children}
                </CustomText>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default TouchableCustomText;