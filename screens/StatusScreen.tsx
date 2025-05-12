import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';
import { Image } from 'react-native';
import { Home } from './Home';
import {AssignRiders} from './AssignRiders';

export const StatusScreen = ({navigation}: any) => {

    const Separator = () => {
        return(
        <View style={styles.separator}/>
    );
    };
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.Text}>Set Status</Text>

        <Text style={styles.SecondText}>Preparing</Text>
        <View style={styles.row}>
          <Icon name="receipt" size={20} color={'black'} iconStyle={'solid'} />
          {/* <Text style={styles.size}>.....</Text> */}
          <View style={[styles.row, styles.dotIcons]}>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
          </View>

          <Icon name="bowl-rice" size={20} iconStyle="solid"/>
          <View style={[styles.row, styles.dotIcons]}>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
          </View>

          <Icon name="person-running" size={20} iconStyle="solid"/>
          <View style={[styles.row, styles.dotIcons]}>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
            <View style={[styles.row, styles.icons]}>
            <Icon name="circle" size={5} iconStyle="solid"/>
            </View>
          </View>
          <Icon name="circle-check" size={20} iconStyle="regular"/>
        </View>
        <View style={[styles.row, styles.paddingBottom]}>
            <Text>Assign Rider</Text>
            <View style={styles.angleicon}>
                <Icon name="angle-right" iconStyle='solid' onPress={() => navigation.navigate(AssignRiders)}/>
            </View>
        </View>
      </View>
      <View style={[styles.FoodItem, styles.row, {justifyContent: 'space-between'}]}>
        <Image
         source={{ uri: 'https://via.placeholder.com/50' }}
        style={styles.image}
        />
        <View style={styles.foodName}>
            <Text style={styles.FontSize}>Food Item</Text>
            <Text style={{paddingTop: 5}}>happy not angry</Text>
        </View>
        <Text style={[styles.FontSize,]}>$Price</Text>
      </View>
      <Separator/>
      
      <View style={styles.FoodDescription}>
        <View style={[styles.row, styles.paddingBottom]}>
            <Text style={[styles.description, styles.FoodQuantity]}>Quantity (4 items)</Text>
            <Text style={[styles.description, styles.fontweight]}>$Price</Text>
        </View>
        <View style={[styles.row, styles.paddingBottom]}>
            <Text style={[styles.description, {paddingRight: 161}]}>Shipping Fee:</Text>
            <Text style={[styles.description, styles.fontweight]}>$Price</Text>
        </View>
        <View style={[styles.row, styles.paddingBottom]}>
            <Text style={[styles.description, {paddingRight: 194}]}>Voucher:</Text>
            <Text style={[styles.description, styles.fontweight]}>$Price</Text>
        </View>
        <View style={[styles.row, styles.paddingBottom]}>
            <Text style={[styles.description, {paddingRight: 150}, styles.fontweight]}>Total Payment:</Text>
            <Text style={[styles.description, styles.fontweight, {color: 'red'}]}>$23</Text>
        </View>

        <Separator/>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
            <Text style={[styles.FontSize, styles.fontweight]}>Payment Method</Text>
            <Text>Cash</Text>
        </View>

        <Separator/>

        <View style={[styles.row, {justifyContent: 'space-between'}, styles.paddingBottom]}>
            <Text>Order code</Text>
            <Text>DFSD-FADF_3FDSA</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}, styles.paddingBottom]}>
            <Text>Receiver</Text>
            <Text>Receiver's Name</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}, styles.paddingBottom]}>
            <Text>Phone Number</Text>
            <Text>03202323454</Text>
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}, styles.paddingBottom]}>
            <Text>Address</Text>
            <View style={styles.contain}>
                <Text>89 pham van dong , mai dich, cau giay, ha nai, viet nam</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate(Home)}
        >
            <Text style={styles.buttonText}>Assign and Deliver</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F2F2F2',
    padding: 40,
  },
  main: {
    // justifyContent: 'center',
    // alignItems: 'center',
    alignItems: 'flex-start',
  },
  Text: {
    fontSize: 20,
    fontWeight: '700',
    paddingBottom: 15,
  },
  SecondText: {
    fontSize: 16,
    paddingBottom: 15,

  },
  row: {
    flexDirection: 'row',
  },
  size: {
    fontSize: 20,
    // alignItems: 'center',
  },
  icons:{
    paddingTop: 15,
    paddingRight: 3,
    paddingLeft: 5,
    paddingBottom: 15,
  },
  dotIcons:{
    paddingLeft: 5,
    paddingRight: 5,
  },
  angleicon:{
    padding: 5,
  },
  FoodItem:{
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: 'gray',
  },
  paddingBottom:{
    paddingBottom: 15,
  },
  foodName:{
    paddingLeft: 15,
  },
//   strikeThrough:{
//     textDecorationLine: 'underline',
//     color: 'black',
//   },
  separator: {
    height: 0.5,
    backgroundColor: 'gray', // light gray
    marginVertical: 10, // space above and below
  },
  description:{
    fontSize: 16,
  },
  FoodDescription:{

  },
  FoodQuantity:{
    paddingRight: 130,
  },
  FontSize:{
    fontSize: 16,
  },
  fontweight:{
    fontWeight: 'bold',
  },
  contain:{
    width: '50%',
    paddingLeft: 22,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: 'red',
    borderRadius: 15,
    margin: 35,
    marginBottom: 45,
  },
  buttonText:{
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
});
