/* eslint-disable react-native/no-inline-styles */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Icon from '@react-native-vector-icons/fontawesome6';

const TrackOrder = ({navigation}: any) => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);
  return (
    <>
    <View style={styles.title}>
      <TouchableOpacity onPress={() => navigation.goBack('Home')}>
        <View style={styles.button}>
            <Icon style={styles.icon} name="angle-left" color={'white'} size={16} iconStyle="solid"/>
        </View>
      </TouchableOpacity>
      <Text style={styles.titleText}>Track Order</Text>
    </View>
      <GestureHandlerRootView>
        <BottomSheet
          snapPoints={snapPoints}
          index={0}
          >
            <BottomSheetView>
              <View style={styles.BottomSheetScreen}>

              <View style={styles.main}>
                <Image
                source={{ uri: 'https://via.placeholder.com/50' }}
                style={styles.image}
                />
                <View>
                <Text style={styles.heading}>Uttaro Coffee House</Text>
                <Text style={styles.smallHeading}>Ordered at 06 sep, 10:00pm</Text>
                </View>
              </View>
              <View style={styles.quantity}>
                <View>
                <Text>2x  Burgers</Text>
                </View>
                <View>
                <Text>2x  Sandwich</Text>
                </View>
              </View>
              <View style={styles.time}>
                <Text style={styles.timeText}>20 min</Text>
                <Text style={styles.timeDeliveryText}>ESTIMATED DELIVERY TIME</Text>
              </View>
              <View style={styles.mealPrep}>
                <View style={styles.icons}>
                  <View>
                    <Icon name="circle-check" color={'red'} size={15} iconStyle="solid"/>
                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Icon name="sun" color={'red'} size={15} iconStyle="solid"/>
                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Icon name="circle-check" color={'red'} size={15} iconStyle="solid"/>
                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Icon name="circle-check" color={'red'} size={15} iconStyle="solid"/>
                    <View style={styles.line}></View>
                  </View>
                  <View>
                    <Icon name="circle-check" color={'red'} size={15} iconStyle="solid"/>
                  </View>
                </View>
                <View style={styles.trackText}>
                  <Text style={styles.iconText}>Your order has been placed.</Text>
                  <Text style={styles.iconText}>The restaurant is preparing your order.</Text>
                  <Text style={styles.iconText}>Your order has been picked up for delivery.</Text>
                  <Text style={styles.iconText}>Order arriving soon.</Text>
                  <TouchableOpacity
                //   onPress={() => navigation.navigate(OrderDeliver)}
                  >
                    <Text style={{paddingBottom: 20}}>Confirm Order.</Text>
                  </TouchableOpacity>
                </View>
              </View>

              </View>
              <View style={styles.contact}>
                <View>
                  <Image style={styles.contactImage}/>
                </View>
                <View>
                  <Text>User 001.</Text>
                  <Text>Courier</Text>
                </View>
                <View style={styles.contactIcons}>
                  <TouchableOpacity>
                    <View style={{paddingRight: 10}}>
                      <View style={styles.contactPhone}>
                        <Icon name="phone" size={20} color={'white'} iconStyle="solid"/>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.contactMessage}>
                      <Icon name="facebook-messenger" size={20} color={'red'} iconStyle="brand"/>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </BottomSheetView>
          </BottomSheet>
      </GestureHandlerRootView>
    </>
  );
};

export default TrackOrder;

const styles = StyleSheet.create({
  BottomSheetScreen:{
    padding: 20,
  },
  title:{
    flexDirection: 'row',
  },
  titleText:{
    fontSize: 20,
    paddingTop: 30,
    paddingLeft: 0,
  },
  icon:{
    padding: 18,
    paddingRight: 0,
  },
  button:{
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'black',
    margin: 20,
  },
  main:{
    flexDirection: 'row',
  },
  image: {
    width: 50,
    height: 50,
    backgroundColor: '#a0aec0',
    borderRadius: 6,
    marginRight: 10,
  },
  heading:{
    fontSize: 18,
    fontWeight: '500',
  },
  smallHeading:{
    fontSize: 13,
    fontWeight: '300',
  },
  quantity:{
    paddingLeft: 62,
    paddingTop: 10,
  },
  time:{
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  },
  timeText:{
    fontSize: 30,
    fontWeight: '800',
  },
  timeDeliveryText:{
    fontSize: 16,
  },
  line:{
    width: 1.5,
    backgroundColor: 'red',
    height: 23,
    marginHorizontal: 7,
    marginVertical: 0,
  },
  mealPrep: {
    flexDirection: 'row',
  },
  trackText:{
    paddingLeft: 20,
  },
  icons:{
    paddingTop: 3,
  },
  iconText:{
    paddingBottom: 20,
  },
  contact:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 30,
    width: '100%',
    height: 94,
    borderWidth: 0.2,
    borderTopColor: 'black',
    borderBottomColor: 'white',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    alignItems: 'center',
  },
  contactImage: {
    width: 60,
    height: 60,
    backgroundColor: '#a0aec0',
    borderRadius: 60 / 2,
    marginRight: 10,
  },
  contactPhone:{
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 50 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactMessage:{
    width: 50,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50 / 2,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIcons:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
