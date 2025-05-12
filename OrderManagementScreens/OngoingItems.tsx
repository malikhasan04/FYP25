import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

export const OngoingItems = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View>
          <Image
            source={{uri: 'https://via.placeholder.com/50'}}
            style={styles.image}
          />
        </View>
        <View style={styles.second}>
          <Text style={styles.title}>Chicken Thai Biryani</Text>
          <View style={styles.breakfast}>
            <Text style={styles.breakfastText}>Breakfast</Text>
          </View>
          <View style={styles.reviews}>
            <Icon name="star" size={13} color={'red'} iconStyle="solid" />
            <Text style={styles.Rating}>4.9</Text>
            <Text style={styles.text}>(10 Reviews)</Text>
          </View>
        </View>
        <View style={styles.third}>
          <View>
            <TouchableOpacity style={styles.option}>
              <Icon
                style={styles.icons}
                name="circle"
                size={5}
                iconStyle="solid"
              />
              <Icon
                style={styles.icons}
                name="circle"
                size={5}
                iconStyle="solid"
              />
              <Icon name="circle" size={5} iconStyle="solid" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.price}>$60</Text>
          </View>
          <View>
            <Text style={[styles.text, styles.delivery]}>Delivery</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    padding: 20,
    paddingTop: 50,
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: '#a0aec0',
    borderRadius: 12,
    marginRight: 10,
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  second: {
    paddingRight: 20,
    paddingLeft: 0,
    alignItems: 'flex-start',
  },
  third: {
    paddingLeft: 0,
    alignItems: 'flex-end',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  breakfast: {
    backgroundColor: 'pink',
    borderRadius: 12,
    alignSelf: 'flex-start',
    padding: 3,
    paddingHorizontal: 10,
    marginTop: 8,
  },
  breakfastText: {
    color: 'red',
    fontSize: 12,
    fontWeight: '500',
  },
  reviews: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 115,
    marginTop: 8,
  },
  Rating: {
    color: 'red',
    fontWeight: 'bold',
  },
  text: {
    fontWeight: '300',
    fontSize: 12,
  },
  option: {
    flexDirection: 'row',
    marginTop: 15,
  },
  icons: {
    paddingRight: 2,
    // paddingLeft: 5,
  },
  price: {
    fontWeight: '900',
    fontSize: 16,
    marginTop: 12,
  },
  delivery: {
    marginTop: 12,
  },
});
