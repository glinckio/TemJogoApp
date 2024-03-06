import React from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {useRootState} from '../../context/RootContext';
import {colors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';

type TemplateTypes = {
  children: React.ReactNode;
  testID?: string;
  light?: boolean;
};

const Template = ({children, light, testID}: TemplateTypes) => {
  const {theme} = useRootState();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      testID={testID}>
      <SafeAreaView
        edges={['right', 'left', 'top']}
        style={[
          styles.container,
          {
            backgroundColor: light
              ? colors[theme].tertiary.default
              : colors[theme].secondary.default,
          },
        ]}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Template;
