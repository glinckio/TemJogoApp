import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {content} from './VariantInputTextField.content';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import InfoMessage from '../InfoMessage/InfoMessage';

type VariantInputTextFieldType = {
  icon?: React.JSX.Element;
  label?: string;
  text: string;
  password?: boolean;
  info?: string;
  error?: boolean;
  placeholder?: string;
  onChangeText: (str: string) => void;
};

const VariantInputTextField = ({
  icon,
  label,
  text,
  onChangeText,
  password,
  info,
  error,
  placeholder,
}: VariantInputTextFieldType) => {
  const [hide, setHide] = useState(true);
  const {theme} = useRootState();
  const hideIcon = require('../../assets/icons/fi-rr-eye-closed.png');
  const showIcon = require('../../assets/icons/fi-rr-eye.png');

  return (
    <View testID={content.testID}>
      {label && (
        <Text style={[styles.label, {color: colors[theme].tertiary.default}]}>
          {label}
        </Text>
      )}
      <View
        style={[
          styles.container,
          {borderColor: colors[theme].tertiary.default},
        ]}>
        {icon && (
          <View style={styles.icon} testID={content.iconTestId}>
            {icon}
          </View>
        )}
        <TextInput
          style={[styles.input, {color: colors[theme].tertiary.default}]}
          value={text}
          secureTextEntry={hide ?? true}
          onChangeText={onChangeText}
          placeholder={placeholder ?? ''}
          placeholderTextColor={colors[theme].secondary.light}
          testID={content.inputTestID}
        />
        {password && (
          <TouchableOpacity
            onPress={() => setHide(!hide)}
            testID={content.hideShowIconButton}>
            <Image
              style={styles.showHideIcon}
              source={hide ? hideIcon : showIcon}
            />
          </TouchableOpacity>
        )}
      </View>
      <InfoMessage error={error} message={info} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 48,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 22,
    paddingRight: 22,
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
    flex: 1,
  },
  showHideIcon: {
    width: 16,
    height: 16,
  },
  label: {
    fontSize: 16,
    marginLeft: 22,
    marginBottom: 8,
    fontFamily: 'Arboria-Book',
  },
});

export default VariantInputTextField;
