import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Habits from '../../screens/Habits';
import Learn from '../../screens/Learn';
import Settings from '../../screens/Settings';
import TabBar from './tabbar';

const Tab = createBottomTabNavigator();

const Tabs = () => {

    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={TabBar}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Habits" component={Habits} />
            <Tab.Screen name="Learn" component={Learn} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
};

export default Tabs;
