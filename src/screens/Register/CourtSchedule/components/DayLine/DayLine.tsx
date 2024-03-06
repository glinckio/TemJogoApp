import React, {
  Dispatch,
  SetStateAction,
  memo,
  useCallback,
  useState,
} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {useRootState} from '../../../../../context/RootContext';
import {colors} from '../../../../../utils/colors';
import {DropdownTypes} from '../../../../../types/dropdown';
import {DayType, DaysListProps} from '../../CourtSchedule';

const times: DropdownTypes[] = [
  {label: '00:00', value: '00:00'},
  {label: '01:00', value: '01:00'},
  {label: '02:00', value: '02:00'},
  {label: '03:00', value: '03:00'},
  {label: '04:00', value: '04:00'},
  {label: '05:00', value: '05:00'},
  {label: '06:00', value: '06:00'},
  {label: '07:00', value: '07:00'},
  {label: '08:00', value: '08:00'},
  {label: '09:00', value: '09:00'},
  {label: '10:00', value: '10:00'},
  {label: '11:00', value: '11:00'},
  {label: '12:00', value: '12:00'},
  {label: '13:00', value: '13:00'},
  {label: '14:00', value: '14:00'},
  {label: '15:00', value: '15:00'},
  {label: '16:00', value: '16:00'},
  {label: '17:00', value: '17:00'},
  {label: '18:00', value: '18:00'},
  {label: '19:00', value: '19:00'},
  {label: '20:00', value: '20:00'},
  {label: '21:00', value: '21:00'},
  {label: '22:00', value: '22:00'},
  {label: '23:00', value: '23:00'},
];

type DayLineProps = {
  selectedDays: DaysListProps[];
  setSelectedDays: Dispatch<SetStateAction<DaysListProps[]>>;
  day: DayType;
};

const DayLine = ({selectedDays, setSelectedDays, day}: DayLineProps) => {
  const {theme} = useRootState();
  const [startsAt, setStartsAt] = useState('');
  const [endsAt, setEndsAt] = useState('');
  const [active, setActive] = useState(false);

  const toggleSelectDay = useCallback(() => {
    const existsInList = selectedDays.find(d => d.day === day.letter);

    if (existsInList) {
      setStartsAt('');
      setEndsAt('');
      setActive(false);
      setSelectedDays(prev => prev.filter(d => d.day !== day.letter));
    } else {
      setActive(true);
      setSelectedDays(prev => [
        ...prev,
        {day: day.letter, startsAt: '', endsAt: ''},
      ]);
    }
  }, [selectedDays, day, setSelectedDays]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          {
            backgroundColor: active
              ? colors[theme].primary.default
              : colors[theme].secondary.dark,
          },
        ]}
        onPress={toggleSelectDay}>
        <Text
          style={[
            styles.dayText,
            {
              color: active
                ? colors[theme].tertiary.default
                : colors[theme].secondary.light,
            },
          ]}>
          {day.letter}
        </Text>
      </TouchableOpacity>
      <Dropdown
        style={[
          styles.dropdown,
          {backgroundColor: colors[theme].secondary.dark},
        ]}
        data={times}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="00:00"
        value={startsAt}
        renderRightIcon={() => <Text />}
        onChange={item => setStartsAt(item.value)}
        placeholderStyle={[
          styles.textItem,
          {
            color: active
              ? colors[theme].tertiary.default
              : colors[theme].secondary.light,
          },
        ]}
        selectedTextStyle={[
          styles.textItem,
          {
            color: active
              ? colors[theme].tertiary.default
              : colors[theme].secondary.light,
          },
        ]}
        disable={!active}
      />
      <Dropdown
        style={[
          styles.dropdown,
          {backgroundColor: colors[theme].secondary.dark},
        ]}
        selectedTextStyle={[
          styles.textItem,
          {
            color: active
              ? colors[theme].tertiary.default
              : colors[theme].secondary.light,
          },
        ]}
        data={times}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="00:00"
        value={endsAt}
        renderRightIcon={() => <Text />}
        onChange={item => setEndsAt(item.value)}
        placeholderStyle={[
          styles.textItem,
          {
            color: active
              ? colors[theme].tertiary.default
              : colors[theme].secondary.light,
          },
        ]}
        disable={!active}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 10,
  },
  dropdown: {
    flex: 1,
    height: 42,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  dayText: {
    fontSize: 20,
    fontFamily: 'Arboria-Bold',
  },
  buttonContainer: {
    borderRadius: 42,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textItem: {
    fontSize: 20,
    fontFamily: 'Arboria-Bold',
  },
});

export default memo(DayLine);
