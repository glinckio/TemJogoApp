import React from 'react';

import {StyleSheet, TextInput, View} from 'react-native';
import {content} from './InputTextField.content';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';

type InputTextFieldType = {
  icon?: React.JSX.Element;
  placeholder?: string;
  text: string;
  onChangeText: (str: string) => void;
};

const InputTextField = ({
  icon,
  placeholder,
  text,
  onChangeText,
}: InputTextFieldType) => {
  const {theme} = useRootState();

  return (
    <View testID={content.testID} style={styles.container}>
      {icon && <View style={styles.icon}>{icon}</View>}
      <TextInput
        style={[styles.input, {color: colors.dark.tertiary.default}]}
        value={text}
        onChangeText={onChangeText}
        placeholder={placeholder ?? ''}
        placeholderTextColor={colors[theme].secondary.light}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.secondary.dark,
    borderRadius: 48,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 28,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    borderRadius: 48,
    fontSize: 20,
    fontFamily: 'Arboria-Bold',
  },
});

export default InputTextField;
