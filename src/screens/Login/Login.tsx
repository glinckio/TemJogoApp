import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils/colors';
import InputTextField from '../../components/InputTextField/InputTextField';
import {useRootState} from '../../context/RootContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {content} from './Login.content';
import Template from '../../components/Template/Template';
import {RoutesEnum} from '../../navigators/StackNavigator';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const LoginScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {theme} = useRootState();

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // qual API você quer acessar em nome do usuário; o padrão é o email e o perfil
      iosClientId:
        '153269817516-ai6dng9du1l6ltsmoqhkiv3dqi098no6.apps.googleusercontent.com',
      webClientId:
        '153269817516-r34tahmnosrm4pk063bmqcdti2rt712h.apps.googleusercontent.com', // o ID do client do tipo WEB para seu servidor (necessário para verificar o ID do usuário e o acesso off-line)
      offlineAccess: true, // se você deseja acessar a API do Google API em nome do usuário DE SEU SERVIDOR
    });
  }, []);

  const googleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const user = await GoogleSignin.signIn();
      console.log(user);
    } catch (error) {}
  };

  return (
    <Template testID={content.testID}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.formContainer}>
            <View style={styles.logoContainer}>
              <Image source={require('../../assets/img/logo.png')} />
            </View>
            <View style={styles.form}>
              <Text
                style={[
                  styles.formTitle,
                  {color: colors[theme].tertiary.default},
                ]}>
                {content.title}
              </Text>
              <View style={styles.fieldsContainer}>
                <InputTextField
                  text={name}
                  onChangeText={setName}
                  placeholder={content.fields.name}
                  icon={
                    <Image
                      style={styles.inputIcon}
                      source={require('../../assets/icons/fi-rr-envelope.png')}
                    />
                  }
                />
                <InputTextField
                  text={password}
                  onChangeText={setPassword}
                  placeholder={content.fields.password}
                  icon={
                    <Image
                      style={styles.inputIcon}
                      source={require('../../assets/icons/fi-rr-lock.png')}
                    />
                  }
                />
                <PrimaryButton onPress={() => {}} title={content.loginButton} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate(RoutesEnum.PasswordReset)}>
                <Text
                  style={[
                    styles.forgotPassword,
                    {color: colors[theme].tertiary.default},
                  ]}>
                  {content.forgotYourPassword}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginWithContainer}>
              <GoogleButton onPress={googleSignIn} />
            </View>
          </View>
          <View style={styles.signUpContainer}>
            <View style={styles.noAccountContainer}>
              <Text
                style={[
                  styles.noAccountText,
                  {color: colors[theme].secondary.gray},
                ]}>
                {content.dontHaveAnAccount}
              </Text>
              <Text
                style={[
                  styles.signUptext,
                  {color: colors[theme].primary.default},
                ]}
                onPress={() => navigation.navigate(RoutesEnum.SignUp)}>
                {content.signUp}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 50,
    paddingRight: 50,
  },
  logoContainer: {
    alignItems: 'center',
  },
  form: {
    marginTop: 102,
  },
  formTitle: {
    color: colors.dark.tertiary.default,
    fontFamily: 'Arboria-Bold',
    fontSize: 20,
    marginLeft: 26,
    marginBottom: 10,
  },
  forgotPassword: {
    color: colors.dark.tertiary.default,
    fontFamily: 'Arboria-Book',
    fontSize: 12,
    marginLeft: 26,
    marginTop: 10,
  },
  fieldsContainer: {
    gap: 12,
  },
  signUpContainer: {
    alignItems: 'center',
    backgroundColor: colors.dark.secondary.dark,
    paddingTop: 30,
    paddingBottom: 30,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
  inputIcon: {
    width: 16,
    height: 16,
  },
  noAccountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  noAccountText: {
    marginRight: 6,
    fontSize: 12,
  },
  signUptext: {
    fontFamily: 'Arboria-Bold',
  },
  loginWithContainer: {
    marginTop: 42,
  },
});

export default LoginScreen;
