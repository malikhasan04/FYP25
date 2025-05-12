import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';

export const Location = () => {
  return (
    <View>
        <Text>Location</Text>
        <View style={styles.container}>
        <Text>Halal Lab office
        </Text>
        <TouchableOpacity>
            <Icon style={styles.button} name="caret-down" size={19} iconStyle="solid"/>
            </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
    button: {
        paddingLeft: 2,
        paddingTop: 1.5,
    },
    container: {
        flexDirection: 'row',
    },
});
