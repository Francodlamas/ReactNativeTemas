
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
const Stack = createNativeStackNavigator(); 

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false
    }
    }>

        <Stack.Screen

          name="Home"
          component={Home}
      /> 

      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main