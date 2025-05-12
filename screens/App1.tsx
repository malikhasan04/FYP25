// import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FoodOrders} from './FoodOrders';
import {Home} from './Home';
import {Headers} from '../components/Headers';
import DrawerNavigator from '../components/DrawerNavigator';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {StatusScreen} from './StatusScreen';
import { AssignRiders } from './AssignRiders';
import { RiderApprovalScreen } from './RiderApprovalScreen';

export type RootStackParamList = {
  Home: undefined,
  Location: undefined,
  FoodOrders: undefined,
  Order: undefined,
  Headers: undefined,
  DrawerNavigator: undefined,
  StatusScreen: undefined,
  AssignRiders: undefined,
  RiderApprovalScreen: undefined,
};
const Drawer = createDrawerNavigator<RootStackParamList>();

export const App1 = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        // drawerMenu={(props) => <DrawerMenu {...props} />}
        screenOptions={{
          headerShown: false,
        }}>
        <Drawer.Screen name="Home" component={Home} />
        {/* <Drawer.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
        {/* <Drawer.Screen name="Headers" component={Headers} /> */}
        {/* <Drawer.Screen name="Location" component={Location} /> */}
        <Drawer.Screen name="FoodOrders" component={FoodOrders} />
        <Drawer.Screen name="StatusScreen" component={StatusScreen} />
        <Drawer.Screen name="AssignRiders" component={AssignRiders}/>
        <Drawer.Screen name="RiderApprovalScreen" component={RiderApprovalScreen}/>
        {/* <Drawer.Screen name="StatusScreen" component={StatusScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
