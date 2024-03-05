import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {useRootState} from '../../../context/RootContext';
import Template from '../../../components/Template/Template';
import {colors} from '../../../utils/colors';
import {content} from './SignUpProfileSelection.content';
import ProfileSelection from './components/ProfileSelection/ProfileSelection';

const SignUpProfileSelectionScreen = () => {
  const {theme} = useRootState();
  // const [selectedProfiles, setSelectedProfiles] = useState<any[]>([]);

  const courtImage = require('../../../assets/img/court.png');
  const coloredCourtImage = require('../../../assets/img/colored-court.png');

  const playerImage = require('../../../assets/img/player.png');
  const coloredPlayerImage = require('../../../assets/img/colored-player.png');

  const handlePressProfile = () => {};

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
          onPress={handlePressProfile}
          coloredImage={coloredCourtImage}
          image={courtImage}
          label={content.courtLabel}
        />
        <ProfileSelection
          onPress={handlePressProfile}
          coloredImage={coloredPlayerImage}
          image={playerImage}
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
