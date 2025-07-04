import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {RoutesEnum} from '../../navigators/StackNavigator';
import {content} from './TopHeader.content';

type TopHeaderTypes = {
  light?: boolean;
  navigateToScreen?: string;
};

const TopHeader = ({light, navigateToScreen}: TopHeaderTypes) => {
  const {theme} = useRootState();
  const navigation = useNavigation();
  const lightIcon = require('../../assets/icons/fi-rr-angle-small-left-light.png');
  const defaultIcon = require('../../assets/icons/fi-rr-angle-small-left.png');

  return (
    <View style={styles.container} testID={content.testID}>
      <TouchableOpacity
        onPress={() =>
          navigateToScreen
            ? navigation.navigate(RoutesEnum[navigateToScreen as never])
            : navigation.goBack()
        }
        style={styles.arrowLeft}>
        <Image
          style={styles.inputIcon}
          source={light ? lightIcon : defaultIcon}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={[
            styles.text,
            {
              color: light
                ? colors[theme].secondary.default
                : colors[theme].tertiary.default,
            },
          ]}>
          {content.title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingLeft: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputIcon: {
    width: 32,
    height: 32,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -47,
  },
  text: {
    fontFamily: 'MonumentExtended-Ultrabold',
    fontSize: 20,
  },
  arrowLeft: {
    zIndex: 1,
  },
});

export default TopHeader;
