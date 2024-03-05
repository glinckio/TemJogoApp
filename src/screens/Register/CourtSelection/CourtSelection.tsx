import React, {useRef, useState} from 'react';
import Template from '../../../components/Template/Template';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {content} from './CourtSelection.content';
import {colors} from '../../../utils/colors';
import CourtCard from './components/CourtCard/CourtCard';

const CourtSelectionScreen = () => {
  const courtRef = useRef(new Animated.Value(0));
  const [courtClicked, setCourtClicked] = useState(false);
  const courtImage = require('../../../assets/img/defaultCourt.png');
  const coloredCourtImage = require('../../../assets/img/coloredCourtImage.png');

  const sandCourtRef = useRef(new Animated.Value(0));
  const [sandCourtClicked, setSandCourtClicked] = useState(false);
  const sandCourtImage = require('../../../assets/img/sandCourt.png');
  const coloredSandCourtImage = require('../../../assets/img/coloredSandCourt.png');

  const syntheticCourtRef = useRef(new Animated.Value(0));
  const [syntheticCourtClicked, setSyntheticCourtClicked] = useState(false);
  const syntheticCourtImage = require('../../../assets/img/syntheticCourt.png');
  const coloredSyntheticCourtImage = require('../../../assets/img/coloredSyntheticCourt.png');

  const anotherCourtRef = useRef(new Animated.Value(0));
  const [anotherCourtClicked, setAnotherCourtClicked] = useState(false);
  const anotherCourtImage = require('../../../assets/img/anotherCourts.png');
  const coloredAnotherCourtImage = require('../../../assets/img/coloredAnotherCourts.png');

  //TO DO: move duplicated code to a single file
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
          <Text style={styles.title}>{content.title}</Text>
          <View style={styles.section}>
            <CourtCard
              onPress={() => {
                setCourtClicked(true);
                fadeIn(courtRef.current);
              }}
              isClicked={courtClicked}
              coloredImage={coloredCourtImage}
              image={courtImage}
              ref={courtRef}
              label={content.defaultCourt}
            />
            <CourtCard
              onPress={() => {
                setSandCourtClicked(true);
                fadeIn(sandCourtRef.current);
              }}
              isClicked={sandCourtClicked}
              coloredImage={coloredSandCourtImage}
              image={sandCourtImage}
              ref={sandCourtRef}
              label={content.sandCourt}
            />
          </View>
          <View style={styles.section}>
            <CourtCard
              onPress={() => {
                setSyntheticCourtClicked(true);
                fadeIn(syntheticCourtRef.current);
              }}
              isClicked={syntheticCourtClicked}
              coloredImage={coloredSyntheticCourtImage}
              image={syntheticCourtImage}
              ref={syntheticCourtRef}
              label={content.syntheticCourt}
            />
            <CourtCard
              onPress={() => {
                setAnotherCourtClicked(true);
                fadeIn(anotherCourtRef.current);
              }}
              isClicked={anotherCourtClicked}
              coloredImage={coloredAnotherCourtImage}
              image={anotherCourtImage}
              ref={anotherCourtRef}
              label={content.anotherCourts}
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={() => {}} title={content.buttonText} />
        </View>
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 60,
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    color: colors.dark.primary.default,
    textTransform: 'uppercase',
    fontFamily: 'MonumentExtended-Ultrabold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 55,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 20,
  },
  buttonContainer: {
    paddingLeft: 33,
    paddingRight: 33,
  },
});

export default CourtSelectionScreen;
