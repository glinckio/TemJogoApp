import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import TopHeader from '../../components/TopHeader/TopHeader';
import {useRootState} from '../../context/RootContext';
import Template from '../../components/Template/Template';
import {colors} from '../../utils/colors';
import {content} from './SignUpProfileSelection.content';

const SignUpProfileSelectionScreen = () => {
  const {theme} = useRootState();

  return (
    <Template testID={content.testID}>
      <TopHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={[styles.text, {color: colors[theme].tertiary.default}]}>
            {content.yourRegistration}
          </Text>
          <Text style={[styles.text, {color: colors[theme].tertiary.default}]}>
            {content.willBe}
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../assets/img/court.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={styles.image}
            source={require('../../assets/img/player.png')}
          />
        </TouchableOpacity>
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },
  text: {
    fontFamily: 'MonumentExtended-Ultrabold',
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    width: 230,
    height: 230,
  },
});

export default SignUpProfileSelectionScreen;
