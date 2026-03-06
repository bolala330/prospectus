import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CourseCard from '../components/CourseCard';

export default function CoursesScreen({ route, navigation }) {
  const { faculty } = route.params;

  const renderCourse = ({ item }) => (
    <CourseCard
      course={item}
      onPressVideo={() => navigation.navigate('Video', { course: item })}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={faculty.courses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  list: { padding: 16 },
});