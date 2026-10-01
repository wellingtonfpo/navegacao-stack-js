import { Button, StyleSheet, Text, View } from 'react-native';

export default function SobreScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Sobre</Text>
      <Text style={styles.texto}>App de exemplo de navegação com Stack.</Text>

      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 8 },
  texto: { fontSize: 16, marginBottom: 24, textAlign: 'center' },
});
