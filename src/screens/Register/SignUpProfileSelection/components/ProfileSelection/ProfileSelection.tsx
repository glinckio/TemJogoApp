import React, {forwardRef} from 'react';
import {
  Animated,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../../../../utils/colors';

type ProfileSelectionProps = {
  onPress: () => void;
  isClicked: boolean;
  coloredImage: ImageSourcePropType;
  image: ImageSourcePropType;
  label: string;
};

const ProfileSelection = forwardRef(
  (props: ProfileSelectionProps, ref: any) => {
    const {onPress, isClicked, coloredImage, image, label} = props;

    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Image style={styles.image} source={isClicked ? coloredImage : image} />
        <View style={styles.squareContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <Animated.View
          style={[
            styles.animatedContainer,
            {
              opacity: ref,
            },
          ]}>
          <LinearGradient
            style={styles.gradientContainer}
            colors={['rgba(0, 0, 0, 0)', colors.dark.primary.default]}>
            <View style={styles.gradientLabel}>
              <Text style={styles.label}>{label}</Text>
            </View>
          </LinearGradient>
        </Animated.View>
      </TouchableOpacity>
    );
  },
);

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  image: {
    width: 230,
    height: 230,
  },
  squareContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    flex: 1,
  },
  label: {
    textAlign: 'center',
    fontFamily: 'MonumentExtended-Ultrabold',
    textTransform: 'uppercase',
    color: colors.dark.tertiary.default,
    fontSize: 20,
  },
  animatedContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
  },
  gradientContainer: {
    width: 230,
    height: 230,
    borderRadius: 42,
  },
  gradientLabel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 20,
    flex: 1,
  },
});

export default ProfileSelection;
