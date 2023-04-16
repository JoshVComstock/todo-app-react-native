import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { size } from '../../styles/size';
import { colors } from '../../styles/color';
import CalendarTable from './CalendarTable';

const Calendar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abril 2022</Text>
      <CalendarTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 32,
    paddingRight: 32,
  },  
  title: {
    fontSize: size.heading200,
    color: colors.white,
    fontFamily: "Dongle",
    fontWeight: 500
  }
});

export default Calendar;
