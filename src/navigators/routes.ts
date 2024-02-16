import React from 'react';
import {Stack} from './StackNavigator';
import LoginScreen from '../screens/Login';

export const routes: React.ComponentProps<typeof Stack.Screen>[] = [
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      headerShown: false,
    },
  },
];
