import React, {useState} from 'react';

import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {content} from './InputTextField.content';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';

type InputTextFieldType = {
  icon?: React.JSX.Element;
  placeholder?: string;
  text: string;
  password?: boolean;
  style?: any;
  onChangeText: (str: string) => void;
};

const InputTextField = ({
  icon,
  placeholder,
  text,
  onChangeText,
  password,
  style,
}: InputTextFieldType) => {
  const [hide, setHide] = useState(true);
  const {theme} = useRootState();
  const hideIcon = require('../../assets/icons/fi-rr-eye-closed.png');
  const showIcon = require('../../assets/icons/fi-rr-eye.png');

  return (
    <View testID={content.testID} style={[styles.container, style]}>
      {icon && (
        <View style={styles.icon} testID={content.iconTestId}>
          {icon}
        </View>
      )}
      <TextInput
        style={[styles.input, {color: colors.dark.tertiary.default}]}
        value={text}
        secureTextEntry={hide ?? true}
        onChangeText={onChangeText}
        placeholder={placeholder ?? ''}
        placeholderTextColor={colors[theme].secondary.light}
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
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.dark.secondary.dark,
    borderRadius: 48,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 22,
    paddingRight: 22,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
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
});

export default InputTextField;
