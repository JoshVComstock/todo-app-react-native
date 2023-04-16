import { useFonts } from 'expo-font';
import Home from './screens/Home';

export default function App() {
  const [fonts] = useFonts({
    'Dongle': require('./assets/fonts/Dongle-Light.ttf'),
  });

  return (
    <Home />
  );
}

