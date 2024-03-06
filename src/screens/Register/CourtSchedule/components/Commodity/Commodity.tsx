import React, {Dispatch, SetStateAction, useCallback, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {CommodityType} from '../../CourtSchedule';
import {colors} from '../../../../../utils/colors';
import {useRootState} from '../../../../../context/RootContext';

type CommodityProps = {
  commodity: CommodityType;
  selectedCommodity: CommodityType[];
  setSelectedCommodity: Dispatch<SetStateAction<CommodityType[]>>;
};

const Commodity = ({
  selectedCommodity,
  setSelectedCommodity,
  commodity,
}: CommodityProps) => {
  const {theme} = useRootState();
  const [active, setActive] = useState(false);

  const toggleSelectCommodity = useCallback(() => {
    const existsInList = selectedCommodity.find(
      c => c.value === commodity.value,
    );

    if (existsInList) {
      setActive(false);
      setSelectedCommodity(prev =>
        prev.filter(c => c.value !== commodity.value),
      );
    } else {
      setActive(true);
      setSelectedCommodity(prev => [...prev, commodity]);
    }
  }, [selectedCommodity, commodity, setSelectedCommodity]);

  return (
    <TouchableOpacity
      onPress={toggleSelectCommodity}
      style={[
        styles.container,
        {
          backgroundColor: active
            ? colors[theme].primary.default
            : colors[theme].secondary.dark,
        },
      ]}>
      <Text
        style={[
          styles.text,
          {
            color: active
              ? colors[theme].tertiary.default
              : colors[theme].secondary.light,
          },
        ]}>
        {commodity.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 8,
  },
  text: {
    fontFamily: 'Arboria-bold',
    fontSize: 20,
  },
});

export default Commodity;
