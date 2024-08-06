import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, FlatList, Alert } from 'react-native';
import { accentColors } from '../../data/accentColors';
import { saveAccentColor, saveAccentVariantColor } from '../../utils/asyncFunctions';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CustomText from '../../components/CustomText';
import colors from '../../style/colors';
import BackgroundCard from '../../components/BackgroundCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

interface Props extends ScreenProps { }

const Theme: React.FC<Props> = ({ navigation }) => {

    const { t } = useTranslation();

    const accent = 'salmon';

    const onChangeAccent = (key: number) => {
        saveAccentColor(accentColors[key].val);
        saveAccentVariantColor(accentColors[key].variant);
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.WHITE.secondary, paddingTop: hp(2), paddingBottom: hp(2), paddingHorizontal: wp(3) }}>
            <BackgroundCard source={require('../../assets/images/space-background.png')} onBackPress={() => { navigation.goBack() }} />
            <View style={{ paddingVertical: hp(2), borderBottomWidth: 0.5, borderColor: colors.BLACK.secondary }}>
                <CustomText font='bold' size={17} letterSpacing={0.5}>{t('themeConfigurationHeader1')}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='regular' size={14} color={colors.BLACK.secondary}>{t('themeConfigurationHeader2')}</CustomText>
                <CustomText style={{ marginTop: hp(1) }} font='medium' size={14}>{t('themeConfigurationHeader3')}</CustomText>
            </View>
            <View style={{ marginTop: hp(2) }}>
                <CustomText font='semibold' size={15}>{t('themeConfigurationHeader4')}</CustomText>
                <FlatList
                    data={accentColors}
                    numColumns={4}
                    columnWrapperStyle={{ justifyContent: 'space-between', marginTop: wp(3) }}
                    renderItem={({ item }) => {
                        return (
                            <TouchableWithoutFeedback onPress={() => {
                                !item.locked ? onChangeAccent(item.key) :
                                    Alert.alert('Unlock Color', 'Would you like to unlock this color for 30 gems?', [
                                        { text: t('alertNo'), onPress: () => { } },
                                        { text: t('alertYes'), onPress: () => { } }
                                    ]
                                    )
                            }}>
                                <View style={[styles.circle, { backgroundColor: item.val, borderColor: accent === item.val ? colors.BLACK.primary : 'transparent' }]}>
                                    {
                                        item.locked &&
                                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
                                            <CustomText font='medium' letterSpacing={0.5} color={'#FFF'}>Locked</CustomText>
                                        </View>
                                    }
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    circle: {
        height: wp(20),
        width: wp(20),
        borderRadius: 50,
        backgroundColor: '#48C9B0',
        borderWidth: 3,
        borderColor: 'transparent',
        overflow: 'hidden'
    }
})

export default Theme;