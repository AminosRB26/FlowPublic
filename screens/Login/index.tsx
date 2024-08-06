import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React, { useCallback, useState } from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextBox from '../../components/TextBox';
import { createAuthAccount, createAuthLoginAttempt, isUserAuthenticated } from '../../firebase/firebase.user.';
import Button from '../../components/Button';
import { useFocusEffect } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import GlobalStyle from '../../style/GlobalStyle';
import TouchableCustomText from '../../components/TouchableCustomText';
import colors from '../../style/colors';

const Login: React.FC<ScreenProps> = ({ navigation, route }) => {

    const { type } = route.params;

    const [screenType, setScreenType] = useState<string>(type);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleLogin = useCallback(async () => {
        if (email.length > 3 && password.length > 8) {
            const response = await createAuthLoginAttempt(email, password);

            if (response) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tabs' }],
                });
            }
        }
    }, [email, password, navigation]);

    const handleSignup = useCallback(async () => {
        if (email.length > 3 && password === confirmPassword && password.length > 8) {
            const response = await createAuthAccount(email, password);
            if (response) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Tabs' }],
                });
            }
        }
    }, [email, password, confirmPassword, navigation]);

    useFocusEffect(useCallback(() => {
        const response = isUserAuthenticated();
        if (response === true) {
            navigation.navigate('Tabs');
        }
    }, [navigation]));

    return (
        <SafeAreaView style={styles.root}>

            <View>
                <CustomText style={{ marginTop: wp(4) }} family="POPPINS" font="semibold" size={18}>{screenType === 'signup' ? 'Create an Account' : 'Login'}</CustomText>
                <CustomText style={{ marginTop: wp(2) }} family="POPPINS" font="regular" size={12} color={colors.BLACK.secondary} letterSpacing={0.2}>{"Let's get you signed in again"}</CustomText>
            </View>

            <View style={{ marginTop: wp(20), gap: wp(8) }}>
                <TextBox floatingPlaceholder="Email" keyboardType="email-address" placeholder="Your personal email address" value={email} onChangeText={setEmail} />
                <TextBox floatingPlaceholder="Password" secureTextEntry placeholder="Password" value={password} onChangeText={setPassword} />
                {
                    screenType === 'signup' &&
                    <TextBox floatingPlaceholder="Password" secureTextEntry placeholder="Confirm your password" value={confirmPassword} onChangeText={setConfirmPassword} />
                }
            </View>

            <View style={{ gap: wp(6), paddingTop: wp(18) }}>
                <Button label={screenType === 'signup' ? 'Create account' : 'Login'} onPress={() => { screenType === 'signup' ? handleSignup() : handleLogin(); }} />

                {
                    screenType === 'signup' &&

                    <TouchableOpacity>
                        <View style={styles.googleButton}>
                            <Image source={require('../../assets/icons/google-icon.png')} resizeMode="contain" style={{ height: wp(6.2), width: wp(6.2) }} />
                            <CustomText family="POPPINS" size={12} font="semibold">{'Sign up with Google'}</CustomText>
                        </View>
                    </TouchableOpacity>
                }

                <View style={[GlobalStyle.rowContainerVCenteredHCentered, {}]}>
                    <CustomText size={12} font="medium">{screenType === 'signup' ? 'Already have an account?' : "Don't have an account?"} </CustomText>
                    <View style={{}}>
                        <TouchableCustomText font="bold" size={13} onPress={() => { setScreenType(prev => prev === 'signup' ? 'login' : 'signup'); }}>{screenType === 'signup' ? 'Login' : 'Sign Up'}</TouchableCustomText>
                        <View style={styles.accentUnderline} />
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingHorizontal: wp(5),
        paddingTop: wp(10),
        backgroundColor: '#FFF',
        justifyContent: 'space-between',
        paddingBottom: wp(18),
    },
    googleButton: {
        flexDirection: 'row',
        backgroundColor: '#E9EFF4',
        height: wp(13),
        borderRadius: wp(2.5),
        justifyContent: 'center',
        alignItems: 'center',
        gap: wp(2),
    },
    accentUnderline: {
        position: 'absolute',
        left: 0,
        bottom: -wp(1),
        right: 0,
        height: wp(0.5),
        backgroundColor: '#ffc8dd',
    },
});

export default Login;
