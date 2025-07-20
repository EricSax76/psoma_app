import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function SobreScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Sobre PSOMA</Text>

      <Text style={styles.paragraph}>
        PSOMA no es una red social, ni un diario emocional, ni una app de productividad.
        No necesitas contarle nada a nadie. Solo necesitas estar.
      </Text>

      <Text style={styles.paragraph}>
        Aquí no se rastrea tu ubicación. No se almacenan tus pensamientos. No se te empuja
        a hablar, ni a mejorar, ni a salir de nada.
      </Text>

      <Text style={styles.paragraph}>
        PSOMA nace para ofrecer un espacio respetuoso donde simplemente puedas sentir, sin
        distracciones, sin etiquetas, sin juicios.
      </Text>

      <Text style={styles.paragraph}>
        ¿Cómo funciona? Tú eliges cómo te sientes. La app adapta su lenguaje y presencia
        según tu estado. Si estás en modo "Vegetal", te dejamos en paz. Si estás en modo
        "Flujo", te acompañamos.
      </Text>

      <Text style={styles.italic}>
        No hace falta que te registres. No hace falta que expliques nada. Solo estar ya es suficiente.
      </Text>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#fafafa',
    flex: 1,
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
    color: '#111',
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
    lineHeight: 22,
  },
  italic: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#666',
    marginTop: 8,
  },
});
