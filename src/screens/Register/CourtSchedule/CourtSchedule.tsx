import React, {useState} from 'react';
import Template from '../../../components/Template/Template';
import TopHeader from '../../../components/TopHeader/TopHeader';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import {content} from './CourtSchedule.content';
import DayLine from './components/DayLine/DayLine';
import {colors} from '../../../utils/colors';
import {useRootState} from '../../../context/RootContext';
import Commodity from './components/Commodity/Commodity';

export type DayType = {
  letter: string;
  fullLabel: string;
};

export type DaysListProps = {
  day: string;
  startsAt: string;
  endsAt: string;
};

const dayLines: DayType[] = [
  {
    letter: 'D',
    fullLabel: 'Domingo',
  },
  {
    letter: 'S',
    fullLabel: 'Segunda',
  },
  {
    letter: 'T',
    fullLabel: 'Terça',
  },
  {
    letter: 'Q',
    fullLabel: 'Quarta',
  },
  {
    letter: 'Q',
    fullLabel: 'Quinta',
  },
  {
    letter: 'S',
    fullLabel: 'Sexta',
  },
  {
    letter: 'S',
    fullLabel: 'Sábado',
  },
];

export type CommodityType = {
  label: string;
  value: string;
};

const commodityLines = [
  {
    label: 'Bolas',
    value: 'balls',
  },
  {
    label: 'Bebida',
    value: 'drinks',
  },
  {
    label: 'Lanches',
    value: 'snacks',
  },
  {
    label: 'Churrasqueira',
    value: 'grill',
  },
  {
    label: 'Chuveiro',
    value: 'shower',
  },
  {
    label: 'Estacionamento',
    value: 'parking',
  },
];

const CourtScheduleScreen = () => {
  const {theme} = useRootState();
  const [selectedDays, setSelectedDays] = useState<DaysListProps[]>([]);
  const [selectedCommodity, setSelectedCommodity] = useState<CommodityType[]>(
    [],
  );

  return (
    <Template>
      <TopHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.dayContainer}>
          <Text style={styles.formTitle}>{content.title}</Text>
          <Text
            style={[
              styles.timeText,
              {marginBottom: 0, color: colors[theme].tertiary.default},
            ]}>
            {content.timeText}
          </Text>
          <Text
            style={[
              styles.selectDays,
              {color: colors[theme].tertiary.default},
            ]}>
            {content.selectDays}
          </Text>
          {dayLines.map((day, key) => (
            <DayLine
              key={key}
              selectedDays={selectedDays}
              day={day}
              setSelectedDays={setSelectedDays}
            />
          ))}
          <Text
            style={[styles.timeText, {color: colors[theme].tertiary.default}]}>
            {content.commodity}
          </Text>
        </View>
        <View style={styles.commodityContainer}>
          {commodityLines.map((commodity, key) => (
            <Commodity
              key={key}
              selectedCommodity={selectedCommodity}
              setSelectedCommodity={setSelectedCommodity}
              commodity={commodity}
            />
          ))}
        </View>
        <PrimaryButton onPress={() => {}} title={content.buttonText} />
      </ScrollView>
    </Template>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 46,
    paddingRight: 46,
    paddingBottom: 60,
    justifyContent: 'space-between',
  },
  dayContainer: {
    gap: 6,
  },
  formTitle: {
    color: colors.dark.primary.default,
    textTransform: 'uppercase',
    fontFamily: 'MonumentExtended-Ultrabold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 55,
  },
  timeText: {
    fontFamily: 'Arboria-Medium',
    fontSize: 18,
    marginLeft: 14,
    marginBottom: 12,
    marginTop: 24,
  },
  commodityContainer: {
    gap: 6,
    marginBottom: 28,
  },
  selectDays: {
    fontFamily: 'Arboria-Book',
    fontSize: 14,
    marginLeft: 14,
    marginBottom: 28,
  },
});

export default CourtScheduleScreen;
