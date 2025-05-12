import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import BottomSheetExample from './BottomSheetExample';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { FoodOrders } from './screens/FoodOrders';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';

// type OrderProps = NativeStackScreenProps<RootStackParamList, 'Order'>;

const Order = ({navigation}: any) => {
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  // const [showFoodOrders, setShowFoodOrders] = useState(false);
  // const Stack = createNativeStackNavigator<RootStackParamList>();

  const handleOrderPress = () => {
    setShowBottomSheet(prev => !prev);
  };
  // const handleOrderRequestPress = () => {
  //   setShowFoodOrders(prev => !prev);
  // };
  return (
    <>
      <View style={styles.row}>
        <TouchableOpacity onPress={handleOrderPress}>
          <View>
            <StatCard number={20} label={'Running Orders'} />
          </View>
        </TouchableOpacity>
        {/* <Button title="go" /> */}

        <TouchableOpacity onPress={() => navigation.navigate('FoodOrders')}>
        <View>
          <StatCard number={'05'} label={'Order Requests'} />
        </View>
        </TouchableOpacity>
        {/* </TouchableOpacity> */}
      </View>
      {showBottomSheet && <BottomSheetExample handleOrderPress />}
    </>
  );
};

// const OrderRequest = () => {
//   return (
//     <View>
//         <BottomSheet
//         visible={showBottomSheet}
//         onClose={() => setShowBottomSheet(false)}
//         keyboardAware
//         bottomSheerColor="#FFFFFF"
//         initialPosition={'50%'} //200, 300
//         snapPoints={['50%', '100%']}
//         isBackDrop={true}
//         isBackDropDismissByPress={true}
//         isRoundBorderWithTipHeader={true}
//         // backDropColor="red"
//         // isModal
//         // containerStyle={{backgroundColor:"red"}}
//         // tipStyle={{backgroundColor:"red"}}
//         // headerStyle={{backgroundColor:"red"}}
//         // bodyStyle={{backgroundColor:"red",flex:1}}
//         header={
//           <View>
//             <Text style={styles.text}>Header</Text>
//           </View>
//         }
//         body={
//           <View style={styles.body}>
//             <Text style={styles.text}>Body</Text>
//           </View>
//         }
//         />
//           <Text>
//             Hello
//           </Text>
//     </View>
//   );
// };

const StatCard = ({number, label}: any) => {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statNumber}>{number}</Text>
      <Text style={styles.statLabel}>{label.toUpperCase()}</Text>
    </View>
  );
};

export default Order;

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
  statNumber: {fontSize: 24, fontWeight: 'bold'},
  statLabel: {fontSize: 12, color: '#777', marginTop: 5},
  bottom: {
    backgroundColor: '#FFFFF',
  },
});
