import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerMenu } from './DrawerMenu';
import { Home } from './Home';
import { Location } from '../components/Location';

const Drawer = createDrawerNavigator();

export const Dashboard = () => {
    <NavigationContainer>
    <Drawer.Navigator
      drawerMenu={(props) => <DrawerMenu {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Loction" component={Location} />
    </Drawer.Navigator>
  </NavigationContainer>;
};