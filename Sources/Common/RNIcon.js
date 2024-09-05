import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';
import RNImage from './RNImage';

const RNIcon = ({
  Svg,
  svgProps,
  icon,
  iconStyle,
  onPress,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {Svg && <Svg {...svgProps} />}
      {icon && <RNImage source={icon} style={[styles.icon, iconStyle]} />}
    </TouchableOpacity>
  );
};

const size = wp(10);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: size,
    height: size,
    backgroundColor: Colors.primary + '10',
    borderRadius: wp(2),
  },
  icon: {
    ...RNStyles.image50,
  },
});

export default RNIcon;
