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
import VerifyEmailScreen from '../screens/VerifyEmail/VerifyEmail';
import NewPasswordScreen from '../screens/NewPassword/NewPassword';
import OtpPhoneScreen from '../screens/OtpPhone/OtpPhone';
import OtpVerificationScreen from '../screens/OtpVerification/OtpVerification';

export enum RoutesEnum {
  Login = 'Login',
  SignUp = 'SignUp',
  SignUpProfileSelection = 'SignUpProfileSelection',
  TermsAndConditions = 'TermsAndConditions',
  PasswordReset = 'PasswordReset',
  VerifyEmail = 'VerifyEmail',
  NewPassword = 'NewPassword',
  OtpPhone = 'OtpPhone',
  OtpVerification = 'OtpVerification',
}

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  SignUpProfileSelection: undefined;
  TermsAndConditions: undefined;
  PasswordReset: undefined;
  VerifyEmail: undefined;
  NewPassword: undefined;
  OtpPhone: undefined;
  OtpVerification: undefined;
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
        <Stack.Screen
          name={RoutesEnum.VerifyEmail}
          component={VerifyEmailScreen}
        />
        <Stack.Screen
          name={RoutesEnum.NewPassword}
          component={NewPasswordScreen}
        />
        <Stack.Screen name={RoutesEnum.OtpPhone} component={OtpPhoneScreen} />
        <Stack.Screen
          name={RoutesEnum.OtpVerification}
          component={OtpVerificationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
