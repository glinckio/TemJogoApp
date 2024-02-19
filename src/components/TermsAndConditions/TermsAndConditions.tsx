import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {content} from './TermsAndConditions.content';
import {colors} from '../../utils/colors';
import {RoutesEnum} from '../../navigators/StackNavigator';

const TermsAndConditions = ({navigation}: any) => {
  return (
    <View testID={content.testID} style={styles.container}>
      <CheckBox
        value={false}
        onValueChange={() => {}}
        style={styles.checkbox}
      />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{content.readAndAgree}</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(RoutesEnum.TermsAndConditions)}>
          <Text style={styles.highlightText}>{content.termsAndConditions}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkbox: {
    width: 16,
    height: 16,
  },
  textContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  text: {
    fontSize: 12,
    fontFamily: 'Arboria-Book',
    color: colors.dark.tertiary.default,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  highlightText: {
    fontSize: 12,
    fontFamily: 'Arboria-Book',
    color: colors.dark.primary.default,
  },
  drawerContainer: {
    flexGrow: 1,
    padding: 25,
  },
  drawerTitleText: {
    fontSize: 20,
    fontFamily: 'Arboria-Bold',
  },
});

export default TermsAndConditions;
