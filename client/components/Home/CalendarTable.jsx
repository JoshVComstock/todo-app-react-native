import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../../styles/color';
import { size } from '../../styles/size';

const CalendarTable = () => {
  return (
    <View style={styles.table}>
      <View style={[styles.row, styles.rowHead]}>
        <Text style={[styles.day, styles.dayActive]}>D</Text>
        <Text style={styles.day}>L</Text>
        <Text style={styles.day}>M</Text>
        <Text style={styles.day}>M</Text>
        <Text style={styles.day}>J</Text>
        <Text style={styles.day}>V</Text>
        <Text style={styles.day}>S</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.day}>26</Text>
        <Text style={styles.day}>27</Text>
        <Text style={styles.day}>28</Text>
        <Text style={styles.day}>29</Text>
        <Text style={styles.day}>30</Text>
        <Text style={styles.day}>31</Text>
        <Text style={[styles.day, styles.dayActive]}>1</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.day, styles.dayActive]}>2</Text>
        <Text style={[styles.day, styles.dayActive]}>3</Text>
        <Text style={[styles.day, styles.dayActive]}>4</Text>
        <Text style={[styles.day, styles.dayActive]}>5</Text>
        <Text style={[styles.day, styles.dayActive]}>6</Text>
        <Text style={[styles.day, styles.dayActive]}>7</Text>
        <Text style={[styles.day, styles.dayActive]}>8</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.day, styles.dayActive]}>9</Text>
        <Text style={[styles.day, styles.dayActive]}>10</Text>
        <Text style={[styles.day, styles.dayActive]}>11</Text>
        <Text style={[styles.day, styles.dayActive]}>12</Text>
        <Text style={[styles.day, styles.dayActive]}>13</Text>
        <Text style={[styles.day, styles.dayActive]}>14</Text>
        <Text style={[styles.day, styles.dayActive]}>15</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.day, styles.dayActive]}>16</Text>
        <Text style={[styles.day, styles.dayActive]}>17</Text>
        <Text style={[styles.day, styles.dayActive]}>18</Text>
        <Text style={[styles.day, styles.dayActive]}>19</Text>
        <Text style={[styles.day, styles.dayActive]}>20</Text>
        <Text style={[styles.day, styles.dayActive]}>21</Text>
        <Text style={[styles.day, styles.dayActive]}>22</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.day, styles.dayActive]}>23</Text>
        <Text style={[styles.day, styles.dayActive]}>24</Text>
        <Text style={[styles.day, styles.dayActive]}>25</Text>
        <Text style={[styles.day, styles.dayActive]}>26</Text>
        <Text style={[styles.day, styles.dayActive]}>27</Text>
        <Text style={[styles.day, styles.dayActive]}>28</Text>
        <Text style={[styles.day, styles.dayActive]}>29</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.day, styles.dayActive]}>30</Text>
        <Text style={styles.day}>1</Text>
        <Text style={styles.day}>2</Text>
        <Text style={styles.day}>3</Text>
        <Text style={styles.day}>4</Text>
        <Text style={styles.day}>5</Text>
        <Text style={styles.day}>6</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
  },
  row: {
    flexDirection: "row",
    paddingBottom: 8
  },
  rowHead: {
    paddingBottom: 16
  },
  day: {
    flex: 1,
    textAlign: "center",
    color: colors.primary50,
    fontSize: size.heading100,
    fontFamily: "Dongle"
  },
  dayActive: {
    color: colors.white
  }
});

export default CalendarTable;
