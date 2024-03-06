import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {content} from './OtpForm.content';

const OtpForm = () => {
  const {theme} = useRootState();

  return (
    <View testID={content.testID} style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            color: colors[theme].tertiary.default,
            borderColor: colors[theme].tertiary.default,
          },
        ]}
        maxLength={1}
      />
      <TextInput
        style={[
          styles.input,
          {
            color: colors[theme].tertiary.default,
            borderColor: colors[theme].tertiary.default,
          },
        ]}
        maxLength={1}
      />
      <TextInput
        style={[
          styles.input,
          {
            color: colors[theme].tertiary.default,
            borderColor: colors[theme].tertiary.default,
          },
        ]}
        maxLength={1}
      />
      <TextInput
        style={[
          styles.input,
          {
            color: colors[theme].tertiary.default,
            borderColor: colors[theme].tertiary.default,
          },
        ]}
        maxLength={1}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 24,
  },
  input: {
    width: 52,
    height: 52,
    borderWidth: 1,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Arboria-Book',
  },
});

export default OtpForm;
