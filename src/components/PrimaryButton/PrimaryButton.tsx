import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {content} from './PrimaryButton.content';
import {colors} from '../../utils/colors';

type PrimaryButtonType = {
  title: string;
  onPress: (callback: unknown) => void;
};

const PrimaryButton = ({title, onPress}: PrimaryButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={content.testID}
      style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark.primary.default,
    alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 48,
    width: '100%',
  },
  text: {
    color: colors.dark.tertiary.default,
    fontSize: 20,
    fontFamily: 'Arboria-Medium',
  },
});

export default PrimaryButton;
