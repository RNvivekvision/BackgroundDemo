import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontSize, hp, wp } from '../Theme';
import RNStyles from './RNStyles';
import RNText from './RNText';

export default function RNRadio({ selected, text, onPress }) {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.radioContainer}>
        {selected && <View style={styles.selected} />}
      </View>
      <RNText style={styles.text}>{text}</RNText>
    </TouchableOpacity>
  );
}

const size = wp(5);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  radioContainer: {
    ...RNStyles.center,
    width: size,
    height: size,
    borderRadius: 100,
    borderWidth: wp(0.4),
    borderColor: Colors.primary,
  },
  selected: {
    width: size * 0.5,
    height: size * 0.5,
    borderRadius: 100,
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: FontSize.font14,
    paddingHorizontal: wp(2),
  },
});
