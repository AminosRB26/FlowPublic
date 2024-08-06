import React from 'react'
import { ColorValue, View } from 'react-native'
import CustomText from '../CustomText';
import GlobalStyle from '../../style/GlobalStyle';
import TouchableCustomText from '../TouchableCustomText';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../style/colors';
import { useModal } from '../../utils/ModalContext';

interface Action {
    label: string;
    onPress: (() => void);
    color?: ColorValue;
}

interface Props {
    message?: string;
    optionalParams?: string[];
    actionParams?: Action[];
    closeModalOnAction?: boolean;
}

const AlertModal: React.FC<Props> = ({
    message,
    optionalParams,
    actionParams,
    closeModalOnAction = true,
}) => {

    const { closeModal } = useModal();

    const handleAction = (action: (() => void)) => {
        action();
        console.log('[Modal]', 'Closing modal as default response after action, to disable this pass prop closeModalOnAction={false}')
        closeModalOnAction && closeModal();
    }

    return (
        <View style={{ backgroundColor: '#FFF', padding: hp(2.02) }}>
            {message && <CustomText font='semibold' size={14} >{message}</CustomText>}
            {
                optionalParams && optionalParams.map((str, index) => {
                    return (
                        <CustomText key={index} style={{ marginTop: hp(0.5) }} font='medium' size={12}>{str}</CustomText>
                    )
                })
            }
            <View style={[GlobalStyle.rowContainerVCenteredSpaced, { marginTop: hp(2.02) }]}>
                {
                    actionParams && actionParams.map(({ label, onPress, color }, index) => {
                        return (
                            <TouchableCustomText key={index} color={color || colors.GREEN.primary} font='medium' size={13} onPress={() => { handleAction(onPress) }}>{label}</TouchableCustomText>
                        )
                    })
                }
            </View>
        </View>
    )
}

export default AlertModal;