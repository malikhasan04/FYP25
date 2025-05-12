import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import BottomSheetExample from '../screens/BottomSheetExample';
import { RiderApprovalScreen } from '../screens/RiderApprovalScreen';

export const Notification = ({navigation}) => {
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const handleOrderPress = () => {
        setShowBottomSheet(prev => !prev);
      };
  return (
    <>
    <View style={styles.row}>
        <TouchableOpacity onPress={handleOrderPress}>
          <View>
          <StatCard number={20} label={'Notification'}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(RiderApprovalScreen)}>
          <View>
          <StatCard number={'05'} label={'Rider Requests'}/>
          </View>
        </TouchableOpacity>
    </View>
    {showBottomSheet &&
        <BottomSheetExample handleOrderPress/>
      }
      </>
  );
};

const StatCard = ({number, label}) => {
    return(
        <View style={styles.statCard}>
            <Text style={styles.statNumber}>{number}</Text>
            <Text style={styles.statLabel}>{label.toUpperCase()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 15,

  },
  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 5,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: { fontSize: 24, fontWeight: 'bold' },
    statLabel: { fontSize: 12, color: '#777', marginTop: 5 },
    bottom: {
    backgroundColor: '#FFFFF',
    },
});
