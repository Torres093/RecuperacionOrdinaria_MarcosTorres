import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import InfoScreen from './src/screens/InfoScreen';
const App = () => {
  return (
    <View style={styles.container}>
      <InfoScreen />
      <StatusBar style="auto" />
    </View>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
