import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
// import { RiderDashboard } from './RiderDashboard';
// import { DrawerNavigator } from './DrawerNavigator';
// import DrawerNavigator from './DrawerNavigator';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Verification = ({navigation}: any) => {
  return (
    <View>
      <Text>Verification</Text>
    <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
        <Text>Back</Text>
    </TouchableOpacity>
    </View>
  );
};

export default Verification;
