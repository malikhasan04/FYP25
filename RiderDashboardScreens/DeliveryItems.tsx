import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FoodItemsDelivery } from './FoodItemsDelivery';
import { DrinkItemsDelivery } from './DrinkItemsDelivery';
// import DrawerNavigator from './DrawerNavigator'


const DeliveryItems = ({navigation}: any) => {
    const [activeTab, setActiveTab] = useState('toDeliver');
  return (
    <View style={styles.container}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() => setActiveTab('toDeliver')}>
            <Text style={[styles.tabText, activeTab === 'toDeliver' && styles.activeTabText]}>
              to deliver
            </Text>
            {activeTab === 'toDeliver' && <View style={styles.underline} />}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('completed')}>
            <Text style={[styles.tabText, activeTab === 'completed' && styles.activeTabText]}>
              completed
            </Text>
            {activeTab === 'completed' && <View style={styles.underline} />}
          </TouchableOpacity>
        </View>
        <FoodItemsDelivery navigation={navigation}/>
      <DrinkItemsDelivery navigation={navigation}/>
    </View>
  );
};

export default DeliveryItems;

const styles = StyleSheet.create({
    container:{
        padding: 30,
    },
    tabsContainer: {
        flexDirection: 'row',
        gap: 20,
      },
      tabText: {
        fontSize: 14,
        color: '#999',
        textAlign: 'center',
      },
      activeTabText: {
        color: '#FF4D4D', // Red color
        fontWeight: 'bold',
      },
      underline: {
        height: 2,
        backgroundColor: '#FF4D4D',
        marginTop: 4,
        borderRadius: 1,
      },
});
