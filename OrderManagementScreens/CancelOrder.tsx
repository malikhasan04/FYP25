import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView, Dimensions, Modal, Image } from 'react-native';
import Icon from '@react-native-vector-icons/fontawesome6';
import { Home } from './Home';

const reasonsList = [
  'Late delivery',
  'Can not contact to the driver',
  'Driver denied to come to pickup',
  'Displayed wrong address',
  'Unfavorable price',
  'I want to order another restaurant',
  'I just want to cancel the order',
];

const { width } = Dimensions.get('window');
export const CancelOrder = ({navigation}: any) => {
  const [selectedReason, setSelectedReason] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack('Outgoing')}>
        <Icon name="angle-left" size={24} color="black" iconStyle="solid"/>
      </TouchableOpacity>
      <Text style={styles.heading}>Please select reasons</Text>
      {reasonsList.map((reason, index) => (
        <TouchableOpacity
          key={index}
          style={styles.checkboxRow}
          onPress={() => setSelectedReason(reason)}
        >
          <View style={[styles.checkbox, selectedReason === reason && styles.checkedBox]}>
            {selectedReason === reason && <Icon name="check" size={16} color="white" iconStyle="solid"/>}
          </View>
          <Text style={styles.reasonText}>{reason}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.otherText}>Other</Text>
      <TextInput
        style={styles.input}
        placeholder="Do you have any message to the restaurant"
        placeholderTextColor="#999"
        value={message}
        onChangeText={setMessage}
        multiline
      />
      <TouchableOpacity style={styles.sendButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
      <Modal
      visible={modalVisible}
      animationType="fade"
      transparent
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Image
            source={require('../asset/loudly-crying-face.1024x1024.png')}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.title}>We are sorry that your order{'\n'}had been canceled</Text>
          <Text style={styles.subtitle}>
            We will continue improving our service and pleasing you in the next order.
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Home)}>
            <Text style={styles.buttonText}>Back to homepage</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedBox: {
    backgroundColor: '#4B3F72', // Dark purple checkbox
    borderColor: '#4B3F72',
  },
  reasonText: {
    fontSize: 14,
    color: '#333',
  },
  otherText: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    fontSize: 14,
  },
  input: {
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
    minHeight: 80,
    textAlignVertical: 'top',
    fontSize: 14,
    color: '#333',
  },
  sendButton: {
    backgroundColor: '#FF4D4D',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#F2F2F2',
    width: width * 0.85,
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
