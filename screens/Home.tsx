import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Headers} from '../components/Headers';
import {Revenue} from './Revenue';
import Order from './Order';
import {Reviews} from '../components/Reviews';
import {Notification} from '../components/Notification';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import DashboardScreen from './DashboardScreen';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';
// import DrawerNavigator from '../components/DrawerNavigator';
// import {FoodOrders} from './FoodOrders';

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export const Home = ({navigation}: any) => {
  return (
    <>
      <ScrollView style={styles.container}>
        {/* <DrawerNavigator/> */}
        <Headers navigation={navigation}/>
        <View style={styles.contt}>
          <Order navigation={navigation} />
          <Revenue />
          <Reviews />
          <Notification navigation={navigation}/>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textColor}>back to home tab</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    backgroundColor: '#F2F2F2',
  },
  contt: {

    padding: 15,
    // paddingTop: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 30,
    // width: 200,
  },
  textColor: {
    color: 'white',
    fontSize: 18,
  },
});
