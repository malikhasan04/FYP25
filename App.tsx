import 'react-native-gesture-handler';
// import {NavigationContainer} from '@react-navigation/native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
// import { App1 } from './screens/App1';
// import { RiderDashboard } from './RiderDashboardScreens/RiderDashboard';
// import App2 from './RiderDashboardScreens/App2';
import { App3 } from './OrderManagementScreens/App3';
// import { StatusScreen } from './screens/StatusScreen';
// import {Home} from './screens/Home';
// import { DrawerMenu } from './screens/DrawerMenu';
// import {Location} from './components/Location';
// import BottomSheetExample from './screens/BottomSheetExample';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {FoodOrders} from './screens/FoodOrders';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Headers} from './components/Headers';
// import Order from './screens/Order';



// const Drawer = createDrawerNavigator();
// const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <>
      {/* <App1/> */}
      {/* <App2/> */}
      <App3/>
      {/* <StatusScreen/> */}
      {/* <NavigationContainer>
      <Stack.Navigator
        // drawerMenu={(props) => <DrawerMenu {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FoodOrders" component={FoodOrders}/>
        <Stack.Screen name="Order" component={Order}/>
      </Stack.Navigator>
    </NavigationContainer> */}
    </>
  );
};

export default App;
