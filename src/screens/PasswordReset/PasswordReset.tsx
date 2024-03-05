import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Template from '../../components/Template/Template';
import TopHeader from '../../components/TopHeader/TopHeader';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import {content} from './PasswordReset.content';
import {RoutesEnum} from '../../navigators/StackNavigator';
import VariantInputTextField from '../../components/VariantInputTextField/VariantInputTextField';

const PasswordResetScreen = () => {
  const [email, setEmail] = useState<string>('');
  const {theme} = useRootState();

  return (
    <Template testID={content.testID}>
      <TopHeader navigateToScreen={RoutesEnum.Login} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text
          style={[styles.textTitle, {color: colors[theme].tertiary.default}]}>
          {content.title}
        </Text>
        <Text style={[styles.longText, {color: colors[theme].secondary.gray}]}>
          {content.text}
        </Text>
        <View style={styles.inputContainer}>
          <Text
            style={[
              styles.inputLabelText,
              {color: colors[theme].secondary.gray},
            ]}>
            {content.fields.email}
          </Text>
          <VariantInputTextField text={email} onChangeText={setEmail} />
        </View>
        <PrimaryButton onPress={() => {}} title={content.sendStructions} />
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 130,
    paddingLeft: 46,
    paddingRight: 46,
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
  inputContainer: {
    marginTop: 30,
  },
  inputLabelText: {
    fontSize: 16,
    fontFamily: 'Arboria-Book',
    marginLeft: 18,
    marginBottom: 12,
  },
});

export default PasswordResetScreen;
