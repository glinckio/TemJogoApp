import React, {useState} from 'react';
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

const LoginScreen = ({navigation}: any) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const {theme} = useRootState();

  return (
    <Template>
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
                <PrimaryButton title={content.loginButton} />
              </View>
              <TouchableOpacity>
                <Text
                  style={[
                    styles.forgotPassword,
                    {color: colors[theme].tertiary.default},
                  ]}>
                  {content.forgotYourPassword}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.signUpContainer}>
            <View style={styles.noAccountContainer}>
              <Text
                style={[
                  styles.noAccountText,
                  {color: colors[theme].tertiary.default},
                ]}>
                {content.dontHaveAnAccount}
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate(RoutesEnum.SignUp)}>
                <Text
                  style={[
                    styles.signUptext,
                    {color: colors[theme].primary.default},
                  ]}>
                  {content.signUp}
                </Text>
              </TouchableOpacity>
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
  },
  signUptext: {
    fontFamily: 'Arboria-Bold',
  },
});

export default LoginScreen;
