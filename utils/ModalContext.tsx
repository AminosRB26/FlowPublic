import React, { useContext, useState, ReactNode, useEffect } from 'react';

type Modal = ReactNode | null;

interface ModalContextProps {
    modal: Modal;
    pushModal: (component: Modal) => void;
    closeModal: () => void;
}

interface ModalProviderProps {
    children: ReactNode;
}

export const ModalContext = React.createContext<ModalContextProps>({
    modal: null,
    pushModal: () => { },
    closeModal: () => { },
});

export const useModal = () => {
    return useContext(ModalContext);
}

const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {

    const [modal, setModal] = useState<Modal>(null);

    useEffect(() => {
        console.log('[Modal]', `New modal ${JSON.stringify(modal)} pushed to context`);
    }, [modal])

    return (
        <ModalContext.Provider
            value={{
                modal,
                pushModal: modal => setModal(modal),
                closeModal: () => setModal(null)
            }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;