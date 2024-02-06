import React from 'react';
import {Stack} from './StackNavigator';
import HelloScreen from '../screens/Hello';

export const routes: React.ComponentProps<typeof Stack.Screen>[] = [
  {
    name: 'Hello',
    component: HelloScreen,
  },
];
