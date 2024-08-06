interface ScreenProps {
    navigation?: any;
    route?: any;
}

type ScreenStrings = typeof import("../translations/english")
    | typeof import("../translations/german")
    | typeof import("../translations/spanish")
    | typeof import("../translations/italian")
    | typeof import("../translations/russian")
    | typeof import("../translations/portuguese")
    | typeof import("../translations/french");

declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from "react-native-svg";
    const content: React.FC<SvgProps>;
    export default content;
}

declare module '@env' {
    export const API_BASE: string;
    export const TEST_BANNER_ID: string;
    export const SETTINGS_BANNER_ID: string;
    export const THEME_BANNER_ID: string;
    export const STAT_TRACKER_BANNER_ID: string;
    export const HABIT_DETAILS_BANNER_ID: string;
    export const INTERSTITIAL_ID: string;
    export const REWARDED_ID: string;
}

type Locale = 'en' | 'es' | 'de' | 'pt' | 'it' | 'ru' | 'fr';