import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { colors } from '../styles/color';
import Nav from '../components/Home/Nav';
import Calendar from '../components/Home/Calendar';

const Home = () => {
  return (
    <View style={styles.container}>
      <Nav />
      <Calendar />
      <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary100,
  },
});

export default Home;
