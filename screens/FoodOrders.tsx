import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useEffect, useState } from 'react';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';
import {Headers} from '../components/Headers';
import { Food } from '../components/Food';
import { Drinks } from '../components/Drinks';
import { Home } from './Home';

// type FoodOrderProps = NativeStackScreenProps<RootStackParamList, 'FoodOrders'>;

export const FoodOrders = ({navigation}: any) => {
  const [FoodType, setFoodType] = useState(['Food', 'Drink']);
  useEffect(() => {

  }, [])
  return (
    <>
      <Headers navigation={navigation} />
   <ScrollView style={styles.container}>
      <View >
        <Text style={styles.Text}>Food</Text>
        <Food/>
        <Drinks/>
        <Drinks/>
      </View>
    </ScrollView>
    <TouchableOpacity style={styles.buttonView} onPress={() => navigation.navigate(Home)}>
      <Text style={styles.backButton}>back</Text>
    </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    height: '5%',
    // width: '70%',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  Text:{
    padding: 22,
    paddingBottom: 0,
  },
  backButton:{
    color: 'white',
    fontSize: 20,
    // height: 253,
  },
  buttonView:{
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 35,
    marginBottom: 45,
  },
});
