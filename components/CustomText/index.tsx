import React, { useEffect, useMemo } from 'react';
import { Text, useWindowDimensions } from 'react-native';
import colors from '../../style/colors';
import fonts from '../../style/fonts';
import { CustomTextProps } from './types';

const CustomText: React.FC<CustomTextProps> = ({
    family = 'QUICKSAND',
    font = 'regular',
    letterSpacing = 0,
    textAlign = 'auto',
    color = colors.BLACK.primary,
    style = {},
    size = 14,
    children = '',
    ...props
}) => {

    const { width } = useWindowDimensions();

    const scale = width / 390;

    const TextFont = useMemo(() => fonts[family][font], [font, family]);

    return (
        <Text {...props} style={[{ ...style, fontFamily: TextFont, fontSize: size * scale, color, textAlign, letterSpacing }]}>
            {children}
        </Text>
    )
}

export default CustomText;