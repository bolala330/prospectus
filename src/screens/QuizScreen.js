import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Alert,
  Modal, TextInput, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';

// Hardcoded recommended courses (one per answer category)
const courseSuggestions = [
  {
    name: 'Diploma in Creative Advertising',
    description: 'Develop creative concepts and campaigns for brands.',
  },
  {
    name: 'Diploma in Graphic Design',
    description: 'Master visual communication and digital design.',
  },
  {
    name: 'Diploma in Fashion and Apparel Design',
    description: 'Learn fashion illustration, pattern making and garment construction.',
  },
  {
    name: 'Diploma in Interior Design',
    description: 'Create functional and aesthetic interior spaces.',
  },
  {
    name: 'Diploma in Multimedia Design',
    description: 'Combine graphics, animation and interactive media.',
  },
  {
    name: 'Degree in Software Engineering with Multimedia',
    description: 'Build software with rich media and interactive elements.',
  },
];

const questions = [
  {
    question: 'Which of these activities sounds most appealing to you?',
    options: [
      'Designing a brand logo or a fashion collection',
      'Writing a news article or filming a short video',
      'Sketching a building floor plan',
      'Planning a business strategy or managing a team',
      'Organising a wedding or a conference',
      'Developing a mobile app or a website',
    ],
  },
  {
    question: 'What kind of work environment do you prefer?',
    options: [
      'Creative studio with other designers',
      'Newsroom or TV production set',
      'Architecture firm or construction site',
      'Corporate office or startup hub',
      'Luxury hotel or resort',
      'Tech company with cutting‑edge tools',
    ],
  },
  {
    question: 'Which skill would you most like to develop?',
    options: [
      'Illustration and visual storytelling',
      'Public speaking and video editing',
      '3D modeling and sustainable design',
      'Digital marketing and branding',
      'Event coordination and catering',
      'Coding and cybersecurity',
    ],
  },
  {
    question: 'What type of projects excite you the most?',
    options: [
      'Creating a complete brand identity',
      'Producing a documentary or podcast',
      'Designing an eco‑friendly building',
      'Launching a new product or service',
      'Planning a music festival',
      'Building an AI‑powered app',
    ],
  },
];

export default function QuizScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Application modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
  };

  const handleApply = (course) => {
    setSelectedCourse(course);
    setModalVisible(true);
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
      `Thank you, ${fullName}!\nYou have applied for ${selectedCourse.name}. We will contact you at ${email} or ${phone}.`,
      [
        {
          text: 'OK',
          onPress: () => {
            setModalVisible(false);
            resetForm();
            setSelectedCourse(null);
          },
        },
      ]
    );
  };

  const handleOptionPress = (optionIndex) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (currentIndex + 1 < questions.length) {
      // Move to next question
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz finished – calculate most frequent answer
      const freq = [0, 0, 0, 0, 0, 0];
      newAnswers.forEach(idx => freq[idx]++);
      let bestIdx = 0;
      for (let i = 1; i < freq.length; i++) {
        if (freq[i] > freq[bestIdx]) bestIdx = i;
      }
      const recommended = courseSuggestions[bestIdx];

      // Show recommendation alert
      Alert.alert(
        'Your Recommended Course',
        `Based on your answers, we suggest:\n\n${recommended.name}\n\n${recommended.description}`,
        [
          {
            text: 'Try Again',
            onPress: () => {
              setCurrentIndex(0);
              setAnswers([]);
            },
            style: 'cancel',
          },
          {
            text: 'Apply Now',
            onPress: () => handleApply(recommended),
          },
        ]
      );
    }
  };

  const currentQuestion = questions[currentIndex];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Career Guide Quiz</Text>
      <Text style={styles.progress}>
        Question {currentIndex + 1} of {questions.length}
      </Text>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.option}
          onPress={() => handleOptionPress(idx)}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      {/* Application Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
          resetForm();
          setSelectedCourse(null);
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.modalContainer}
        >
          <ScrollView contentContainerStyle={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Apply for {selectedCourse?.name || 'Course'}
            </Text>

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
                  setSelectedCourse(null);
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center', color: '#2a7f62' },
  progress: { fontSize: 16, textAlign: 'center', marginBottom: 20, color: '#666' },
  question: { fontSize: 18, marginBottom: 20, fontWeight: '500', paddingHorizontal: 10 },
  option: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionText: { fontSize: 16 },

  // Modal styles
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