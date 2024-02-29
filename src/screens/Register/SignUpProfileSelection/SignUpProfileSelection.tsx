import React, {useRef, useState} from 'react';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {useRootState} from '../../../context/RootContext';
import Template from '../../../components/Template/Template';
import {colors} from '../../../utils/colors';
import {content} from './SignUpProfileSelection.content';
import ProfileSelection from './components/ProfileSelection/ProfileSelection';

const SignUpProfileSelectionScreen = () => {
  const {theme} = useRootState();

  const courtRef = useRef(new Animated.Value(0));
  const [courtClicked, setCourtClicked] = useState(false);
  const courtImage = require('../../../assets/img/court.png');
  const coloredCourtImage = require('../../../assets/img/colored-court.png');

  const playerRef = useRef(new Animated.Value(0));
  const [playerClicked, setPlayerClicked] = useState(false);
  const playerImage = require('../../../assets/img/player.png');
  const coloredPlayerImage = require('../../../assets/img/colored-player.png');

  const fadeIn = ref => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(ref, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      // move to another screen
    }, 500);
  };

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
        <ProfileSelection
          onPress={() => {
            setCourtClicked(true);
            fadeIn(courtRef.current);
          }}
          isClicked={courtClicked}
          coloredImage={coloredCourtImage}
          image={courtImage}
          ref={courtRef}
          label={content.courtLabel}
        />
        <ProfileSelection
          onPress={() => {
            setPlayerClicked(true);
            fadeIn(playerRef.current);
          }}
          isClicked={playerClicked}
          coloredImage={coloredPlayerImage}
          image={playerImage}
          ref={playerRef}
          label={content.playerLabel}
        />
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
});

export default SignUpProfileSelectionScreen;
