import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import TrackOrder from './TrackOrder';
import { CancelOrder } from './CancelOrder';

export const OrderFood = ({navigation}: any) => {
  const [FoodPrice, setFoodPrice] = useState(['Food', 'Drink']);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Food</Text>
      <View style={styles.topRow}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50' }}
          style={styles.image}
        />
        <View style={styles.info}>
          <Text style={styles.title}>Pizza Hut</Text>
          <View style={styles.row}>
            <Text style={styles.price}>$35.25</Text>
            <Text style={styles.separator}>|</Text>
            <Text style={styles.items}>03 Items</Text>
          </View>
        </View>
        <Text style={styles.orderId}>#162432</Text>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.approveBtn} onPress={() => navigation.navigate(TrackOrder)}>
          <Text style={styles.approveText}>Track Order</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.outStockBtn} onPress={() => navigation.navigate(CancelOrder)}>
          <Text style={styles.outStockText}>cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    // elevation: 1,
  },
  heading:{
    paddingBottom: 10,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#a0aec0',
    borderRadius: 6,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    color: '#2d3748',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    color: '#4a5568',
  },
  separator: {
    marginHorizontal: 8,
    color: '#a0aec0',
  },
  items: {
    fontSize: 12,
    color: '#a0aec0',
  },
  orderId: {
    fontSize: 12,
    color: '#718096',
    textDecorationLine: 'underline',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    gap: 10,
  },
  approveBtn: {
    backgroundColor: '#ff4d4f',
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  approveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  outStockBtn: {
    borderWidth: 1,
    borderColor: '#ff4d4f',
    flex: 1,
    paddingVertical: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  outStockText: {
    color: '#ff4d4f',
    fontSize: 12,
    fontWeight: '600',
  },
});
