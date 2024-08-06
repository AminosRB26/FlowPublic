const BLACK = {
    primary: '#111',
    // primary: '#08253F',
    secondary: 'rgba(0, 0, 0, 0.55)',
    // secondary: 'rgba(8, 37, 63, 0.55)',
}

const ORANGE = {
    primary: '#FDA361'
}

const BLUE = {
    primary: '#057DCD',
    secondary: '#43B0F1',
    tertiary: '#A5E2FF'
}

const GREEN = {
    primary: '#136971',
    secondary: '#e7f0f0'
}

const WHITE = {
    primary: '#FFFFFF',
    secondary: '#ECF0f1'
}

const colors = {
    BLACK,
    ORANGE,
    BLUE,
    GREEN,
    WHITE
}

export const hexToRGB = (hex: string) => {
    var r = '0';
    var g = '0';
    var b = '0';

    // 3 digits
    if (hex.length == 4) {
        r = "0x" + hex[1] + hex[1];
        g = "0x" + hex[2] + hex[2];
        b = "0x" + hex[3] + hex[3];

        // 6 digits
    } else if (hex.length == 7) {
        r = "0x" + hex[1] + hex[2];
        g = "0x" + hex[3] + hex[4];
        b = "0x" + hex[5] + hex[6];
    }

    return "rgba(" + +r + "," + +g + "," + +b + ")";
}

export const hexToRBGA = (hex: string, a: string) => {
    var rgb = hexToRGB(hex);
    rgb = rgb.substring(0, rgb.length - 1);
    rgb = rgb + ',' + a + ')';

    return rgb;
}

export default colors;