import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {content} from './GoogleButton.content';
import {colors} from '../../utils/colors';

const GoogleButton = () => {
  return (
    <TouchableOpacity testID={content.testID} style={styles.button}>
      <Image
        style={styles.icon}
        source={require('../../assets/icons/google.png')}
      />
      <Text style={styles.text}>{content.label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.dark.tertiary.default,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 18,
    paddingBottom: 18,
    borderRadius: 48,
    flexDirection: 'row',
    gap: 15,
  },
  text: {
    color: colors.dark.secondary.default,
    fontSize: 15,
    fontFamily: 'Arboria-Medium',
  },
  icon: {
    width: 16,
    height: 16,
  },
});

export default GoogleButton;
