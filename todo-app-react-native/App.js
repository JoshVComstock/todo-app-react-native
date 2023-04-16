import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Nav  from './components/Nav';
import { colors } from './styles/Colors';

export default function App() {
  return (
    <View style={styles.container}>
     <Nav/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary100,
  },
});
