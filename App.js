import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import DetalhesScreen from './src/screens/DetalhesScreen';
import SobreScreen from './src/screens/SobreScreen';

// Cria o Stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer gerencia o estado da navegação
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {/* Cada Stack.Screen registra uma tela */}
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Início' }}
        />
        <Stack.Screen name='Detalhes' component={DetalhesScreen} />
        <Stack.Screen name='Sobre' component={SobreScreen} />
      </Stack.Navigator>
      <StatusBar style='auto' />
    </NavigationContainer>
  );
}
