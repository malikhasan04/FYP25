import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from './Home';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home}
        options={{ headerShown: false }}
        />
        {/* <Drawer.Screen name="TrackOrder" component={TrackOrder}
        options={{ headerShown: false }}
        /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
