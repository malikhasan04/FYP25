import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {OrderManagementHeader} from './OrderManagementHeader';
import { Outgoing } from './Outgoing';
import { Ongoing } from './Ongoing';
import History from './History';

export const Home = ({navigation}: any) => {
  const [activeTab, setActiveTab] = useState('outgoing');
//   const [tabSelection, setTabSelection] = useState(activeTab);
  const HandlePress = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <View>
        <OrderManagementHeader navigation={navigation} />
      </View>
      <View style={styles.container}>
        <View style={styles.tabsContainer}>
          <TouchableOpacity onPress={() =>
                // setActiveTab('outgoing')
                HandlePress('outgoing')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'outgoing' && styles.activeTabText,
              ]}>
              outgoing
            </Text>
            {activeTab === 'outgoing' && <View style={styles.underline}/>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress('ongoing')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'ongoing' && styles.activeTabText,
              ]}>
              ongoing
            </Text>
            {activeTab === 'ongoing' && <View style={styles.underline}/>}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => HandlePress('History')}>
            <Text
              style={[
                styles.tabText,
                activeTab === 'History' && styles.activeTabText,
              ]}>
              History
            </Text>
            {activeTab === 'History' && <View style={styles.underline}/>}
          </TouchableOpacity>
        </View>
        <ScrollView>
            {/* <Ongoing/> */}
            {activeTab === 'outgoing' && <Outgoing navigation={navigation}/>}
            {activeTab === 'ongoing' && <Ongoing/> && <Ongoing/>}
            {activeTab === 'History' && <History/>}
            {/* <History/> */}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tabsContainer: {
      flexDirection: 'row',
      gap: 20,
      justifyContent: 'center',
      paddingBottom: 10,
  },
  tabText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#FF4D4D', // Red color
    fontWeight: 'bold',
  },
  underline: {
    height: 2,
    backgroundColor: '#FF4D4D',
    marginTop: 4,
    borderRadius: 1,
  },
});
