import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Video } from 'expo-av';

export default function VideoScreen({ route }) {
  const { course } = route.params;
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={{ uri: course.video }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
      <Text style={styles.title}>{course.name} - Overview</Text>
      <Text style={styles.description}>{course.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16 },
  video: { width: '100%', height: 250 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 16 },
  description: { fontSize: 16, color: '#ccc', marginTop: 8 },
});