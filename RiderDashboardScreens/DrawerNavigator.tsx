// import { View, Text } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RiderDashboard } from './RiderDashboard';
import DeliveryItems from './DeliveryItems';
import TrackOrders from './TrackOrders';
import { OrderDeliver } from './OrderDeliver';


export const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="RiderDashboard" component={RiderDashboard}/>
        <Drawer.Screen name="DeliveryItems" component={DeliveryItems}/>
        <Drawer.Screen name="TrackOrders" component={TrackOrders}/>
        {/* <Drawer.Screen name="OrderDeliver" component={OrderDeliver}/> */}
    </Drawer.Navigator>
  );
};
