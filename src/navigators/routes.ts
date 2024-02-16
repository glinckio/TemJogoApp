import React from 'react';
import {Stack} from './StackNavigator';
import LoginScreen from '../screens/Login/Login';

export const routes: React.ComponentProps<typeof Stack.Screen>[] = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
];
