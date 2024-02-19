import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/Login';
import SignUpProfileSelectionScreen from '../screens/SignUpProfileSelection/SignUpProfileSelection';
import SignUpScreen from '../screens/SignUp/SignUp';
import TermsAndConditionsScreen from '../screens/TermsAndConditions/TermsAndConditions';
import PasswordResetScreen from '../screens/PasswordReset/PasswordReset';

export enum RoutesEnum {
  Login = 'Login',
  SignUp = 'SignUp',
  SignUpProfileSelection = 'SignUpProfileSelection',
  TermsAndConditions = 'TermsAndConditions',
  PasswordReset = 'PasswordReset',
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  SignUpProfileSelection: undefined;
  TermsAndConditions: undefined;
  PasswordReset: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnum.PasswordReset}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={RoutesEnum.Login} component={LoginScreen} />
        <Stack.Screen name={RoutesEnum.SignUp} component={SignUpScreen} />
        <Stack.Screen
          name={RoutesEnum.SignUpProfileSelection}
          component={SignUpProfileSelectionScreen}
        />
        <Stack.Screen
          name={RoutesEnum.TermsAndConditions}
          component={TermsAndConditionsScreen}
        />
        <Stack.Screen
          name={RoutesEnum.PasswordReset}
          component={PasswordResetScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
