import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DrawerNavigator from './DrawerNavigator';
import { OrderFood } from './OrderFood';
import TrackOrder from './TrackOrder';
import { OrderDrinks } from './OrderDrinks';
import { Outgoing } from './Outgoing';
import { CancelOrder } from './CancelOrder';
import { Home } from './Home';
// import { OrderManagementHeader } from './OrderManagementHeader';

const Stack = createNativeStackNavigator();
export const App3 = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}
          options={{
              headerShown: false,
          }}
          />
        <Stack.Screen name="Home" component={Home}
            options={{
                headerShown: false,
            }}
            />
            {/* <Stack.Screen name="OrderManagementHeader" component={OrderManagementHeader}
            options={{
                headerShown: false,
            }}
            /> */}
            <Stack.Screen name="TrackOrder" component={TrackOrder}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="OrderFood" component={OrderFood}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="OrderDrinks" component={OrderDrinks}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="Outgoing" component={Outgoing}
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="CancelOrder" component={CancelOrder}
            options={{
                headerShown: false,
            }}
            />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
