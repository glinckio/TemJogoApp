import React, {useState} from 'react';
import Template from '../../../components/Template/Template';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../../utils/colors';
import {useRootState} from '../../../context/RootContext';
import {content} from './OtpPhone.content';
import VariantInpuTextField from '../../../components/VariantInpuTextField/VariantInpuTextField';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const OtpPhoneScreen = () => {
  const {theme} = useRootState();
  const [phone, setPhone] = useState('');

  return (
    <Template>
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
          <View style={styles.inputContainer}>
            <VariantInpuTextField
              placeholder={content.fields.phone}
              onChangeText={setPhone}
              text={phone}
            />
          </View>
        </View>
        <PrimaryButton onPress={() => {}} title={content.buttonText} />
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
});

export default OtpPhoneScreen;
