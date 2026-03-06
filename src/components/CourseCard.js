import React, { useState } from 'react';
import {
  View, Text, Image, TouchableOpacity, StyleSheet, Alert,
  Modal, TextInput, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import { useRatings } from '../context/RatingContext';
import Icon from 'react-native-vector-icons/Ionicons';

export default function CourseCard({ course, onPressVideo }) {
  const { getRating, rateCourse } = useRatings();
  const rating = getRating(course.id);

  // Modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleApplyPress = () => {
    setModalVisible(true);
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
  };

  const handleSubmit = () => {
    if (!fullName.trim()) {
      Alert.alert('Error', 'Please enter your full name.');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email.');
      return;
    }
    if (!email.includes('@') || !email.includes('.')) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }
    if (!phone.trim()) {
      Alert.alert('Error', 'Please enter your phone number.');
      return;
    }

    Alert.alert(
      'Application Submitted',
      `Thank you, ${fullName}!\nYou have successfully applied for ${course.name}. We will contact you at ${email} or ${phone}.`,
      [
        {
          text: 'OK',
          onPress: () => {
            setModalVisible(false);
            resetForm();
          },
        },
      ]
    );
  };

  return (
    <>
      <View style={styles.card}>
        <Image source={{ uri: course.image }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.name}>{course.name}</Text>
          <Text style={styles.description}>{course.description}</Text>

          <View style={styles.ratingRow}>
            <Text style={styles.ratingText}>Rating: {rating} / 6</Text>
            <TouchableOpacity onPress={() => rateCourse(course.id)} style={styles.rateButton}>
              <Icon name="star" size={20} color="#FFD700" />
              <Text style={styles.rateText}>Rate</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity onPress={onPressVideo} style={styles.videoButton}>
              <Icon name="videocam" size={20} color="#fff" />
              <Text style={styles.buttonText}>Watch Video</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleApplyPress} style={styles.applyButton}>
              <Icon name="document-text" size={20} color="#fff" />
              <Text style={styles.buttonText}>Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Application Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          resetForm();
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>Apply for {course.name}</Text>

            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={fullName}
              onChangeText={setFullName}
            />

            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Phone Number"
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => {
                  setModalVisible(false);
                  resetForm();
                }}
              >
                <Text style={styles.modalButtonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.modalButton, styles.submitButton]}
                onPress={handleSubmit}
              >
                <Text style={styles.modalButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  image: { width: '100%', height: 120 },
  content: { padding: 12 },
  name: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  description: { fontSize: 14, color: '#666', marginBottom: 8 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  ratingText: { fontSize: 14 },
  rateButton: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', padding: 6, borderRadius: 4 },
  rateText: { marginLeft: 4, fontSize: 14 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  videoButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2a7f62',
    padding: 10,
    borderRadius: 4,
    marginRight: 8,
  },
  applyButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff6b6b',
    padding: 10,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: { color: '#fff', marginLeft: 8, fontWeight: 'bold' },

  // Modal Styles
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
    width: '90%',
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  cancelButton: {
    backgroundColor: '#aaa',
  },
  submitButton: {
    backgroundColor: '#2a7f62',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});