import React, {useState} from 'react';
import Template from '../../components/Template/Template';
import TopHeader from '../../components/TopHeader/TopHeader';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {content} from './OtpVerification.content';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import OtpForm from '../../components/OtpForm/OtpForm';

const OtpVerificationScreen = () => {
  const {theme} = useRootState();

  return (
    <Template testID={content.testID}>
      <TopHeader />
      <View style={styles.container}>
        <View>
          <Text
            style={[styles.textTitle, {color: colors[theme].tertiary.default}]}>
            {content.title}
          </Text>
          <Text
            style={[styles.longText, {color: colors[theme].secondary.gray}]}>
            {content.text}
          </Text>
          <View style={styles.inputContainer}>
            <OtpForm />
            <Text
              style={[
                styles.dontReceiveCodetext,
                {color: colors[theme].tertiary.default},
              ]}>
              {content.dontReceiveCode}{' '}
              <Text style={[styles.hightLightText, {}]}>
                {content.resendCode}
              </Text>
            </Text>
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
    marginTop: 130,
    paddingLeft: 46,
    paddingRight: 46,
    paddingBottom: 104,
    justifyContent: 'space-between',
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
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 50,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
    marginTop: 12,
  },
  sendInstructionsContainer: {
    marginTop: 12,
  },
  dontReceiveCodetext: {
    marginTop: 14,
    fontFamily: 'Arboria-Book',
  },
  hightLightText: {
    color: colors.dark.primary.default,
  },
});

export default OtpVerificationScreen;
