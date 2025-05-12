// components/OrderSheet.js
import React, { forwardRef, useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const OrderSheet = forwardRef((props, ref) => {
  const snapPoints = useMemo(() => ['50%', '75%', '95%'], []);

  return (
      <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
      >
      <BottomSheetView style={styles.sheetContent}>
        <Text style={styles.sheetTitle}>20 Running Orders</Text>
        {/* You can map through props.orders here */}
        <View style={styles.orderItem}>
          <View style={styles.imagePlaceholder} />
          <View style={styles.orderDetails}>
            <Text style={styles.mealLabel}>#Breakfast</Text>
            <Text style={styles.itemTitle}>Chicken Thai Biryani</Text>
            <Text>ID: 32053</Text>
            <Text>$60</Text>
          </View>
          <View style={styles.actions}>
            <Text style={styles.openButton}>open</Text>
            <Text style={styles.cancelButton}>Cancel</Text>
          </View>
        </View>
      </BottomSheetView>
    </BottomSheet>

  );
});

export default OrderSheet;

const styles = StyleSheet.create({
  sheetContent: {
    padding: 20,
  },
  sheetTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imagePlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#a0aec0',
    marginRight: 12,
  },
  orderDetails: {
    flex: 1,
  },
  mealLabel: {
    color: '#e53e3e',
    fontWeight: 'bold',
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 50,
  },
  openButton: {
    backgroundColor: 'red',
    color: '#fff',
    paddingHorizontal: 12,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 4,
  },
  cancelButton: {
    borderColor: 'red',
    borderWidth: 1,
    paddingHorizontal: 12,
    borderRadius: 8,
    overflow: 'hidden',
    color: 'red',
  },
});
