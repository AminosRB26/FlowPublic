import React from 'react';
import { ScrollView } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/CustomText';
import TermsWriting from '../../components/TermsWriting';
import TouchableIcon from '../../components/TouchableIcon';
import GlobalStyle from '../../style/GlobalStyle';

const Terms: React.FC<ScreenProps> = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={[GlobalStyle.scrollContentContainer, { paddingTop: hp(2) }]} style={{ backgroundColor: '#ecf0f1' }} showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <TouchableIcon style={{ position: 'absolute', left: 0, bottom: 0 }} name='chevron-left' size={20} onPress={() => { navigation.goBack() }} />
                <CustomText textAlign='center' font='bold' size={17} letterSpacing={0.5}>Terms & Conditions</CustomText>
            </SafeAreaView>

            <TermsWriting />

        </ScrollView>
    )
}

export default Terms;