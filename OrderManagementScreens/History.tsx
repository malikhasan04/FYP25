import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';

const OrderItem = ({ type, status, restaurant, price, date, items, orderId }: any) => {
  const statusColor = status === 'Completed' ? 'green' : 'red';

  return (
    <View style={styles.itemContainer}>
      <View style={styles.headerRow}>
        <Text style={styles.type}>{type}</Text>
        <Text style={[styles.status, { color: statusColor }]}>{status}</Text>
      </View>
      <View style={styles.contentRow}>
        <View style={styles.imageBox} />
        <View style={styles.textInfo}>
          <Text style={styles.restaurant}>{restaurant}</Text>
          <Text style={styles.price}>${price}</Text>
          <Text style={styles.meta}>{date}  |  {items} Items</Text>
        </View>
        <Text style={styles.orderId}>#{orderId}</Text>
      </View>
      <View style={styles.btnRow}>
        <TouchableOpacity style={styles.rateBtn}>
          <Text style={styles.rateText}>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.reorderBtn}>
          <Text style={styles.reorderText}>Re-Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default function History() {
  return (
    <ScrollView style={styles.container}>
      <OrderItem type="Food" status="Completed" restaurant="Pizza Hut" price="35.25" date="29 JAN, 12:30" items="03" orderId="162432" />
      <OrderItem type="Drink" status="Completed" restaurant="McDonald" price="40.15" date="30 JAN, 12:30" items="02" orderId="242432" />
      <OrderItem type="Drink" status="Canceled" restaurant="Starbucks" price="10.20" date="30 JAN, 12:30" items="01" orderId="240112" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 15,
  },
  itemContainer: {
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    padding: 15,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  type: {
    fontSize: 14,
    fontWeight: '500',
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageBox: {
    width: 55,
    height: 55,
    borderRadius: 10,
    backgroundColor: '#a0aec0',
    marginRight: 12,
  },
  textInfo: {
    flex: 1,
  },
  restaurant: {
    fontSize: 15,
    fontWeight: '700',
    color: '#000',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 2,
  },
  meta: {
    fontSize: 12,
    color: '#7d7d7d',
  },
  orderId: {
    fontSize: 12,
    textDecorationLine: 'underline',
    color: '#7d7d7d',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  rateBtn: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ff4d4f',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginRight: 10,
  },
  reorderBtn: {
    flex: 1,
    backgroundColor: '#ff4d4f',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  rateText: {
    color: '#ff4d4f',
    fontWeight: '600',
  },
  reorderText: {
    color: '#fff',
    fontWeight: '600',
  },
});
