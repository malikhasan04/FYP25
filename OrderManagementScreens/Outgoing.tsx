import { View } from 'react-native';
import React from 'react';
import { OrderFood } from './OrderFood';
import { OrderDrinks } from './OrderDrinks';

export const Outgoing = ({navigation}: any) => {
  return (
    <View>
        <OrderFood navigation={navigation}/>
        <OrderDrinks navigation={navigation}/>
        <OrderDrinks navigation={navigation}/>
    </View>
  );
};
