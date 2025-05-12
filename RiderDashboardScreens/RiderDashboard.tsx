/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Verification from './Verification';
// import Icon from '@react-native-vector-icons/fontawesome6';

export const RiderDashboard = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.HeadingView}>
        <Text style={styles.heading}>Rider Signup!</Text>
        <Text style={styles.text}>Add Rider Details</Text>
      </View>
      {/* <View style={styles.imageContainer}>
        <Image
        source={{}}
        style={styles.image}
        />
        <Icon name="pen" color={'red'} size={20} iconStyle="solid" style={styles.edit} />
      </View> */}
      <View>
        <Text style={styles.email}>EMAIL</Text>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        style={[styles.input, styles.disabledInput]}
        onChangeText={(emailData) => setEmail(emailData)}
        placeholder="example@gmail.com"
        placeholderTextColor={'black'}
        />
      </View>
      <View>
        <Text style={styles.username}>SELLER USERNAME</Text>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={username}
        style={[styles.input, styles.disabledInput]}
        onChangeText={(userNameData) => setUsername(userNameData)}
        placeholder="xyz-abc"
        placeholderTextColor={'black'}
        />
      </View>
      <View>
        <Text style={styles.password}>PASSWORD</Text>
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        style={[styles.input, styles.disabledInput]}
        onChangeText={(passwordData) => setPassword(passwordData)}
        placeholder="********"
        placeholderTextColor={'black'}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Verification)}>
          <Text style={styles.buttonText}>Verification</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F2F2F2',
        padding: 40,
    },
    HeadingView:{
      // paddingBottom: 10,
    },
    heading:{
      fontSize: 22,
      fontWeight: 'bold',
      paddingBottom: 10,
    },
    text:{
      fontSize: 15,
      paddingBottom: 80,
    },
    // image:{
    //   width: 90,
    //   height: 90,
    //   borderRadius: 90 / 2,
    //   backgroundColor: 'gray',
    // },
    // imageContainer:{
    //   flexDirection: 'row',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   paddingTop: 70,
    //   paddingLeft: 23,
    // },
    // edit:{
    //   // paddingLeft: 30,
    //   paddingTop: 34,
    // },
    input: {
      height: 50,
      borderWidth: 2,
      borderColor: '#E0E0E0',
      borderRadius: 10,
      paddingHorizontal: 16,
      fontSize: 16,
      backgroundColor: 'white',
    },
    disabledInput: {
      backgroundColor: '#F5F5F5',
      color: '#333',
    },
    email:{
      paddingBottom: 10,
    },
    username:{
      paddingTop: 60,
      paddingBottom: 10,
    },
    password:{
      paddingTop: 60,
      paddingBottom: 10,
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
