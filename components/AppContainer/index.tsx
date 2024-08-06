import React, { useEffect } from 'react';
import { View } from 'react-native';
import GlobalStyle from '../../style/GlobalStyle';
import ModalWrapper from '../ModalWrapper';
import { useModal } from '../../utils/ModalContext';

const AppContainer = ({ children }: any) => {

    const { modal } = useModal();

    return (
        <View style={{ flex: 1 }}>
            {children}
            {
                modal &&
                <View style={[GlobalStyle.modalContainer, {}]}>
                    <ModalWrapper>
                        {modal}
                    </ModalWrapper>
                </View>
            }
        </View>
    )
}

export default AppContainer;