import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUp/SignUp';
import LoginScreen from '../screens/Login/Login';

export enum RoutesEnum {
  Login = 'Login',
  SignUp = 'SignUp',
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnum.Login}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={RoutesEnum.Login} component={LoginScreen} />
        <Stack.Screen name={RoutesEnum.SignUp} component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
