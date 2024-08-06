import React, { useEffect } from 'react';
import { View } from 'react-native';
import colors from '../../style/colors';
import { isIntroComplete } from '../../utils/asyncFunctions';
import CustomText from '../../components/CustomText';

const Splash: React.FC<ScreenProps> = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            handleNavigate();
        }, 3000);
    })

    const handleNavigate = async () => {
        const complete = await isIntroComplete();
        navigation.navigate(complete ? 'Tabs' : 'IntroTerms');
    }

    return (
        <View style={{ flex: 1, backgroundColor: colors.GREEN.primary, justifyContent: 'center', alignItems: 'center' }}>
            <CustomText font='bold' size={32} color={'rgba(255, 255, 255, 0.8)'}>Epoxy</CustomText>
        </View>
    )
}

export default Splash;