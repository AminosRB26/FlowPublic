import { StyleProp, TextProps, TextStyle } from "react-native";
import fonts from "../../style/fonts";

type FontFamilies = keyof typeof fonts;

type FontTypes = keyof typeof fonts.QUICKSAND;

interface CustomTextProps extends TextProps, Pick<TextStyle, 'textAlign' | 'letterSpacing' | 'color'> {
    family?: FontFamilies;
    font?: FontTypes;
    style?: TextStyle;
    size?: number;
}