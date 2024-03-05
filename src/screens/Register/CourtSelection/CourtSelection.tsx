import React, {useRef, useState} from 'react';
import Template from '../../../components/Template/Template';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {Animated, ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {content} from './CourtSelection.content';
import {colors} from '../../../utils/colors';
import CourtCard from './components/CourtCard/CourtCard';

const CourtSelectionScreen = () => {
  const courtImage = require('../../../assets/img/defaultCourt.png');
  const coloredCourtImage = require('../../../assets/img/coloredCourtImage.png');

  const sandCourtImage = require('../../../assets/img/sandCourt.png');
  const coloredSandCourtImage = require('../../../assets/img/coloredSandCourt.png');

  const syntheticCourtImage = require('../../../assets/img/syntheticCourt.png');
  const coloredSyntheticCourtImage = require('../../../assets/img/coloredSyntheticCourt.png');

  const anotherCourtImage = require('../../../assets/img/anotherCourts.png');
  const coloredAnotherCourtImage = require('../../../assets/img/coloredAnotherCourts.png');

  const handlePressCourt = (court: any) => {};

  return (
    <Template testID={content.testID}>
      <TopHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text style={styles.title}>{content.title}</Text>
          <View style={styles.section}>
            <CourtCard
              onPress={handlePressCourt}
              coloredImage={coloredCourtImage}
              image={courtImage}
              label={content.defaultCourt}
            />
            <CourtCard
              onPress={handlePressCourt}
              coloredImage={coloredSandCourtImage}
              image={sandCourtImage}
              label={content.sandCourt}
            />
          </View>
          <View style={styles.section}>
            <CourtCard
              onPress={handlePressCourt}
              coloredImage={coloredSyntheticCourtImage}
              image={syntheticCourtImage}
              label={content.syntheticCourt}
            />
            <CourtCard
              onPress={handlePressCourt}
              coloredImage={coloredAnotherCourtImage}
              image={anotherCourtImage}
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
