import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {content} from './InfoMessage.content';

type InfoMessageTypes = {
  message?: string;
  error?: boolean;
};

const InfoMessage = ({message, error}: InfoMessageTypes) => {
  const {theme} = useRootState();

  return (
    <Text
      testID={content.testID}
      style={[
        styles.text,
        {color: error ? 'red' : colors[theme].tertiary.default},
      ]}>
      {message}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Arboria-Book',
    fontSize: 12,
    marginLeft: 22,
    marginTop: 4,
  },
});

export default InfoMessage;
