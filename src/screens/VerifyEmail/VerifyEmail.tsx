import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Template from '../../components/Template/Template';
import {content} from './VerifyEmail.content';
import {colors} from '../../utils/colors';
import {useRootState} from '../../context/RootContext';
import {RoutesEnum} from '../../navigators/StackNavigator';

const VerifyEmailScreen = ({navigation}: any) => {
  const {theme} = useRootState();

  return (
    <Template>
      <View style={styles.container}>
        <View style={styles.emailContainer}>
          <Image
            style={styles.img}
            source={require('../../assets/img/email-template.png')}
          />
          <Text style={[styles.title, {color: colors[theme].tertiary.default}]}>
            {content.title}
          </Text>
          <Text
            style={[styles.longText, {color: colors[theme].secondary.gray}]}>
            {content.longText}
          </Text>
        </View>
      </View>
      <View style={styles.tryAnotherEmail}>
        <View>
          <Text style={styles.text}>
            Não recebeu o e-mail? Verifique seu filtro de spam, ou
            <Text
              onPress={() => navigation.navigate(RoutesEnum.PasswordReset)}
              style={[styles.text, styles.highlightText]}>
              {' '}
              tente outro endereço de e-mail
            </Text>
          </Text>
        </View>
      </View>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Arboria-Bold',
    marginTop: 46,
  },
  longText: {
    fontSize: 14,
    fontFamily: 'Arboria-Book',
    textAlign: 'center',
    marginTop: 12,
  },
  emailContainer: {
    flex: 1,
    paddingLeft: 48,
    paddingRight: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tryAnotherEmail: {
    paddingLeft: 42,
    paddingRight: 42,
    alignItems: 'center',
    backgroundColor: colors.dark.secondary.dark,
    paddingTop: 30,
    paddingBottom: 30,
    borderTopLeftRadius: 38,
    borderTopRightRadius: 38,
  },
  text: {
    fontSize: 14,
    fontFamily: 'Arboria-Book',
    textAlign: 'center',
    color: colors.dark.secondary.gray,
  },
  highlightText: {
    color: colors.dark.primary.default,
    fontFamily: 'Arboria-Book',
  },
  img: {
    width: 190,
    height: 190,
  },
});

export default VerifyEmailScreen;
