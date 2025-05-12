import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, TextInput, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

export const AssignRiders = ({navigation}: any) => {
  
  const riders = [
    {
      id: '1',
      name: 'Ralph Edwards',
      message: 'Thanks dude.',
    },
    {
      id: '2',
      name: 'Cody Fisher',
      message: 'How is going...?',
    },
    {
      id: '3',
      name: 'Eleanor Pena',
      message: 'Thanks for the awesome food mom...',
    },
  ];

  const renderItem = ({ item }: any) => (
    <View style={styles.riderCard}>
      <View style={styles.avatarPlaceholder} />
      <View style={styles.riderInfo}>
        <Text style={styles.riderName}>{item.name}</Text>
        <Text style={styles.riderMessage}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Riders connected with you</Text>
      
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>add rider contact</Text>
      </TouchableOpacity>
      
      <FlatList
        data={riders}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>SAVE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#666',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  riderCard: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    marginRight: 15,
  },
  riderInfo: {
    flex: 1,
  },
  riderName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  riderMessage: {
    fontSize: 14,
    color: '#666',
  },
  saveButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});