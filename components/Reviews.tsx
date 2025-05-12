import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

export const Reviews = () => {

    const HandleOnPress = () => {
        Linking.canOpenURL('');
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text>Reviews</Text>
      <TouchableOpacity onPress={HandleOnPress}>
        <Text style={styles.text}>See all reviews</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Icon name="star" size={20} color={'red'} iconStyle="solid"/>
      <Text style={styles.reviewText}>4.9</Text>
      <Text>Total 20 reviews</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        width: 320,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 5,
    paddingTop: 2,
    margin: 25,
    marginTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    },

    text:{
        color: 'red',
        textDecorationLine: 'underline',
    },
    header:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content:{
        padding: 10,
        paddingTop: 20,
        flexDirection: 'row',
        // justifyContent: 'space-between',
    },
    reviewText:{
        fontSize: 20,
        fontWeight: '900',
        color: 'red',
        paddingRight: 25,
        paddingLeft: 5,
    },
});
