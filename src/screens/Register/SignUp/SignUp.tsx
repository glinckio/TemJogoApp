import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Template from '../../../components/Template/Template';
import {content} from './SignUp.content';
import TopHeader from '../../../components/TopHeader/TopHeader';
// import {launchImageLibrary} from 'react-native-image-picker';
import InputTextField from '../../../components/InputTextField/InputTextField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import TermsAndConditions from '../../../components/TermsAndConditions/TermsAndConditions';
import {RoutesEnum} from '../../../navigators/StackNavigator';
import {colors} from '../../../utils/colors';
import {useRootState} from '../../../context/RootContext';

const SignUpScreen = ({navigation}: any) => {
  // const [image, setImage] = useState<string | undefined>();
  const {theme} = useRootState();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <Template testID={content.testID}>
      <TopHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text
            style={[styles.textTitle, {color: colors[theme].tertiary.default}]}>
            {content.title}
          </Text>
          <Text
            style={[styles.longText, {color: colors[theme].secondary.gray}]}>
            {content.text}
          </Text>
          <View style={styles.formContainer}>
            <InputTextField
              text={name}
              onChangeText={setName}
              placeholder={content.fields.name}
            />
            <InputTextField
              text={email}
              onChangeText={setEmail}
              placeholder={content.fields.email}
            />
            <InputTextField
              text={password}
              onChangeText={setPassword}
              placeholder={content.fields.password}
              password
            />
            <InputTextField
              text={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder={content.fields.confirmPassword}
              password
            />
            <View style={styles.termsAndConditionsContainer}>
              <TermsAndConditions navigation={navigation} />
            </View>
          </View>
        </View>
        <PrimaryButton
          onPress={() => navigation.navigate(RoutesEnum.SignUpProfileSelection)}
          title={content.buttonText}
        />
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 130,
    paddingLeft: 46,
    paddingRight: 46,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  buttonImage: {
    width: 230,
    borderRadius: 250,
    marginTop: 70,
    marginBottom: 48,
  },
  image: {
    width: 230,
    height: 230,
    borderRadius: 230,
  },
  nextButtonContainer: {
    width: '100%',
    marginTop: 48,
  },
  termsAndConditionsContainer: {
    marginTop: 6,
  },
  textTitle: {
    fontSize: 24,
    fontFamily: 'Arboria-Bold',
  },
  longText: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: 'Arboria-Book',
  },
  formContainer: {
    marginTop: 24,
    gap: 12,
    alignItems: 'center',
  },
});

export default SignUpScreen;
