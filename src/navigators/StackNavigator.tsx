import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Login/Login';
import SignUpProfileSelectionScreen from '../screens/Register/SignUpProfileSelection/SignUpProfileSelection';
import SignUpScreen from '../screens/Register/SignUp/SignUp';
import TermsAndConditionsScreen from '../screens/Register/TermsAndConditions/TermsAndConditions';
import PasswordResetScreen from '../screens/PasswordReset/PasswordReset';
import VerifyEmailScreen from '../screens/Register/VerifyEmail/VerifyEmail';
import NewPasswordScreen from '../screens/NewPassword/NewPassword';
import OtpPhoneScreen from '../screens/Register/OtpPhone/OtpPhone';
import OtpVerificationScreen from '../screens/Register/OtpVerification/OtpVerification';
import CourtInformationScreen from '../screens/Register/CourtInformation/CourtInformation';
import PlayerInformationScreen from '../screens/Register/PlayerInformation/PlayerInformation';
import CourtScheduleScreen from '../screens/Register/CourtSchedule/CourtSchedule';
import CourtSelectionScreen from '../screens/Register/CourtSelection/CourtSelection';

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
  CourtInformation = 'CourtInformation',
  PlayerInformation = 'PlayerInformation',
  CourtSchedule = 'CourtSchedule',
  CourtSelection = 'CourtSelection',
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
  CourtInformation: undefined;
  PlayerInformation: undefined;
  CourtSchedule: undefined;
  CourtSelection: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export type NavigationProps = NativeStackScreenProps<RootStackParamList>;

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RoutesEnum.CourtSelection}
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
        <Stack.Screen
          name={RoutesEnum.CourtInformation}
          component={CourtInformationScreen}
        />
        <Stack.Screen
          name={RoutesEnum.PlayerInformation}
          component={PlayerInformationScreen}
        />
        <Stack.Screen
          name={RoutesEnum.CourtSchedule}
          component={CourtScheduleScreen}
        />
        <Stack.Screen
          name={RoutesEnum.CourtSelection}
          component={CourtSelectionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
