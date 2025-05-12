// import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { RiderDashboard } from './RiderDashboard';
import Verification from './Verification';
// import DeliveryItems from './DeliveryItems';
import { DrawerNavigator } from './DrawerNavigator';
import TrackOrders from './TrackOrders';
import { FoodItemsDelivery } from './FoodItemsDelivery';
import { DrinkItemsDelivery } from './DrinkItemsDelivery';
import { OrderDeliver } from './OrderDeliver';
import DeliveryItems from './DeliveryItems';
// import { FoodItemsDelivery } from './FoodItemsDelivery';
// import { DrinkItemsDelivery } from './DrinkItemsDelivery';
const App2 = () => {
    const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
        <Stack.Navigator >
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="RiderDashboard" component={RiderDashboard} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Verification" component={Verification} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="TrackOrders" component={TrackOrders} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="OrderDeliver" component={OrderDeliver} options={{
                headerShown: true,
            }}/>
            <Stack.Screen name="FoodItemsDelivery" component={FoodItemsDelivery} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="DrinkItemsDelivery" component={DrinkItemsDelivery} options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="DeliveryItems" component={DeliveryItems} options={{
                headerShown: false,
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App2;
