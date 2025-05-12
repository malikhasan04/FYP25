import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';

export const ProfilePic = () => {
  return (
    <View>
     <TouchableOpacity>
     <Image
        style={styles.profilePic}
        />
     </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#001C55',
    },
});
