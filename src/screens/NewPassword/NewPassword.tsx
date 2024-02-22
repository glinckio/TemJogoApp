import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Template from '../../components/Template/Template';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {content} from './NewPassword.content';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import VariantInpuTextField from '../../components/VariantInpuTextField/VariantInpuTextField';
import TopHeader from '../../components/TopHeader/TopHeader';
import {RoutesEnum} from '../../navigators/StackNavigator';

const NewPasswordScreen = () => {
  const {theme} = useRootState();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  return (
    <Template testID={content.testID}>
      <TopHeader navigateToScreen={RoutesEnum.PasswordReset} />
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={[styles.title, {color: colors[theme].tertiary.default}]}>
            {content.title}
          </Text>
          <Text
            style={[styles.longText, {color: colors[theme].secondary.gray}]}>
            {content.longText}
          </Text>
          <View style={styles.fieldsContainer}>
            <VariantInpuTextField
              text={password}
              onChangeText={setPassword}
              label={content.fields.password}
              info={content.howManyCharacters}
              password
              error
            />
            <VariantInpuTextField
              text={passwordConfirmation}
              onChangeText={setPasswordConfirmation}
              label={content.fields.confirmPassword}
              password
            />
          </View>
        </View>
        <PrimaryButton onPress={() => {}} title={content.buttonText} />
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 48,
    paddingRight: 48,
    paddingBottom: 102,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arboria-Bold',
    marginTop: 46,
  },
  longText: {
    fontSize: 14,
    fontFamily: 'Arboria-Book',
    marginTop: 12,
  },
  formContainer: {
    marginTop: 100,
  },
  fieldsContainer: {
    marginTop: 24,
    gap: 12,
  },
});

export default NewPasswordScreen;
