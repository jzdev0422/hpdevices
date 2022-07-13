import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Drivers, Home, Printers, Test } from './src/pages';

const Stack = createNativeStackNavigator();

const App = () => {  
  LogBox.ignoreLogs(['Remote debugger']);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Printers" component={Printers} />
        <Stack.Screen name="Drivers" component={Drivers} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;