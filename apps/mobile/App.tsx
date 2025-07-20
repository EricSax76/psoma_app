import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PSOMA</Text>
      <Text style={styles.subtitle}>Una app para sentir sin que te molesten.</Text>
      <Text style={styles.subtitleSmall}>En PSOMA no tienes que hablar. Solo sentir.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar como anónimo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary}>
        <Text style={styles.buttonSecondaryText}>Leer más sobre PSOMA</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
  },
  title: {
    fontSize: 42,
    fontWeight: '600',
    marginBottom: 24,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitleSmall: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#666',
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 32,
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  buttonSecondary: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 32,
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
});

