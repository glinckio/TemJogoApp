import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes} from './routes';

type RootStackParamList = {
  Login: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {routes.map(routeConfig => (
          <Stack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
