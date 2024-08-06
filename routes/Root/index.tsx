import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from '../Tabs';
import CreateHabit from '../../screens/CreateHabit';
import Lesson from '../../screens/Lesson';
import Theme from '../../screens/Theme';
import BasicSettings from '../../screens/BasicSettings';
import Legal from '../../screens/Legal';
import Privacy from '../../screens/Privacy';
import Terms from '../../screens/Terms';
import MiniLessonNav from '../../screens/MiniLessonNav';
import HabitDetails from '../../screens/HabitDetails';
import IntroTerms from '../../screens/IntroTerms';
import IntroPrivacy from '../../screens/IntroPrivacy';
import Language from '../../screens/Language';
import Statistics from '../../screens/Statistics';
import Splash from '../../screens/Splash';
import LessonList from '../../screens/LessonList';
import AppContainer from '../../components/AppContainer';
import Login from '../../screens/Login';

const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <AppContainer>
                <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={Splash} />
                    <Stack.Screen name="IntroTerms" component={IntroTerms} />
                    <Stack.Screen name="IntroPrivacy" component={IntroPrivacy} />
                    <Stack.Screen name="Login" component={Login} initialParams={{ type: 'signup' }} />
                    <Stack.Screen name="Language" component={Language} />
                    <Stack.Screen name="Tabs" component={Tabs} />
                    <Stack.Screen name="CreateHabit" component={CreateHabit} />
                    <Stack.Screen name="HabitDetails" component={HabitDetails} />
                    <Stack.Screen name="Statistics" component={Statistics} />
                    <Stack.Screen name="LessonList" component={LessonList} />
                    <Stack.Screen name="MiniLessonNav" component={MiniLessonNav} />
                    <Stack.Screen name="Lesson" component={Lesson} />
                    <Stack.Screen name="Theme" component={Theme} />
                    <Stack.Screen name="BasicSettings" component={BasicSettings} />
                    <Stack.Screen name="Legal" component={Legal} />
                    <Stack.Screen name="Privacy" component={Privacy} />
                    <Stack.Screen name="Terms" component={Terms} />
                </Stack.Navigator>
            </AppContainer>
        </NavigationContainer>
    );
};

export default RootStack;
