import { StyleSheet } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const GlobalStyle = StyleSheet.create({
    scrollContentContainer: {
        flexGrow: 1,
        paddingTop: hp(1),
        paddingBottom: hp(2),
        paddingHorizontal: wp(4),
    },
    rowContainer: {
        flexDirection: 'row',
    },
    rowContainerVCentered: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rowContainerVCenteredSpaced: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    rowContainerVCenteredHCentered: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#FFF',
        elevation: 20,
        shadowColor: 'rgba(0,0,0,0.35)',
    },
    absoluteContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
    modalContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.55)',
        justifyContent: 'center',
        paddingHorizontal: wp(4.5),
    },
    modalCard: {
        borderRadius: 12,
        backgroundColor: '#FFF',
        elevation: 12,
        shadowColor: 'rgba(0, 0, 0, 0.45)',
    },
    Flex: {
        flex: 1,
    },
    FlexGrow: {
        flexGrow: 1,
    },
});

export default GlobalStyle;
