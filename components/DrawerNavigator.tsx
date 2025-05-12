//  import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Headers} from '../components/Headers';
// import { Home } from './Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Headers" component={Headers} options={{
        headerShown: true,
      }}/>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
