import { Button, StyleSheet, Text, View } from 'react-native';

// "navigation" é enviado automaticamente pelo Stack para cada tela
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Home</Text>
      <Text style={styles.texto}>Esta é a primeira tela do Stack.</Text>

      {/* navigate empilha uma nova tela e pode enviar parâmetros */}
      <Button
        title="Ir para Detalhes"
        onPress={() => navigation.navigate('Detalhes', { nome: 'Maria', curso: 'ADS' })}
      />

      <View style={styles.espaco} />

      <Button title="Ir para Sobre" onPress={() => navigation.navigate('Sobre')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 16, marginBottom: 24 },
  espaco: { height: 12 },
});
