import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetalhesScreen({ navigation, route }) {
  // Parâmetros enviados pela tela anterior
  const { nome, curso } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Detalhes</Text>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Curso: {curso}</Text>

      {/* goBack volta para a tela anterior (desempilha) */}
      <Button title="Voltar" onPress={() => navigation.goBack()} />

      <View style={styles.espaco} />

      {/* popToTop volta direto para a primeira tela do Stack */}
      <Button title="Voltar para o início" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  texto: { fontSize: 18, marginBottom: 8 },
  espaco: { height: 12 },
});
