import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { StatusScreen } from './StatusScreen';
import { Home } from './Home';
import { Headers } from '../components/Headers';

export const RiderApprovalScreen = ({navigation}: any) => {
  const riders = [
    {
      id: '1',
      name: 'name 1',
      details: 'location | mail',
      code: '#162432',
    },
    {
      id: '2',
      name: 'name 2',
      details: 'location | mail',
      code: '#242432',
    },
    {
      id: '3',
      name: 'name 3',
      details: 'locations | mail',
      code: '#240112',
    },
  ];

  return (
    <>
    <Headers navigation={navigation}/>
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {riders.map((rider, index) => (
          <View key={rider.id} style={styles.riderCard}>
            <Text style={styles.riderTitle}>Rider {index + 1}</Text>
            <Text style={styles.riderName}>{rider.name}</Text>
            <Text style={styles.riderDetails}>{rider.details}</Text>
            <Text style={styles.riderCode}>{rider.code}</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.approveButton}>
                <Text style={styles.ApprovebuttonText}>Approve</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.rejectButton}>
                <Text style={styles.buttonText}>
                  {index === 2 ? 'out of reject' : 'reject'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(Home)}>
        <Text style={styles.backButtonText}>back</Text>
      </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'F2F2F2',
    padding: 40,
  },
  scrollContainer: {
    paddingBottom: 70,
  },
  riderCard: {
    // backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // elevation: 2,
  },
  riderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  riderName: {
    fontSize: 14,
    marginBottom: 3,
    color: '#555',
  },
  riderDetails: {
    fontSize: 12,
    marginBottom: 3,
    color: '#777',
  },
  riderCode: {
    fontSize: 12,
    marginBottom: 10,
    color: '#999',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  approveButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
    flex: 1,
    marginRight: 5,
  },
  rejectButton: {
    backgroundColor: 'white',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'red',
    flex: 1,
    marginLeft: 5,
  },
  buttonText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  ApprovebuttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  backButton: {
    position: 'absolute',
    bottom: 20,
    left: 15,
    right: 15,
    backgroundColor: 'red',
    padding: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    textTransform: 'lowercase',
  },
});