interface PageScrollerProps extends Partial<ThemeReduxObj> {
    hideHeader?: boolean;
    onComplete?: (() => void);
    onDestroy?: (() => void);
    children?: any;
}