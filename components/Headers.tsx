import {View, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Icon from '@react-native-vector-icons/fontawesome6';
import {ProfilePic} from './ProfilePic';
import {Location} from './Location';
// import {Home} from '../screens/Home';

export const Headers = ({navigation}: any) => {
  return (
    <View style={styles.headerContainer}>
        <TouchableOpacity
        onPress={() => navigation.toggleDrawer()}
        style={styles.menuButton}
        >
        <Icon name="bars" size={20} color="#000" iconStyle="solid" />
      </TouchableOpacity>

      <View style={styles.locationContainer}>
        <Location />
      </View>

      <View>
        <ProfilePic />
        <View />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    // backgroundColor: '#F2F2F2',
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  menuButton: {
    padding: 5,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  locationSubtitle: {
    fontSize: 10,
    color: '#666',
    marginTop: 2,
  },
  profilePlaceholder: {
    width: 30,
    alignItems: 'flex-end',
  },
});
