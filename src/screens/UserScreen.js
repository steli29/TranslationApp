import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SettingsScreen from './SettingsScreen';
import TranslationScreen from './TranslationScreen';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const Tab = createBottomTabNavigator();
const UserScreen = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Translation') {
            iconName = 'language';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Translation" component={TranslationScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default UserScreen;
