import { StyleSheet, TouchableOpacity } from 'react-native';
import { useInset } from '../Hooks';
import { Colors, hp, wp } from '../Theme';
import { Images } from '../Constants';
import RNImage from './RNImage';
import RNStyles from './RNStyles';

const RNPlus = ({ onPress, isBottomTabs }) => {
  const styles = useStyles({ isBottomTabs });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <RNImage source={Images.plus} style={styles.icon} />
    </TouchableOpacity>
  );
};

const size = { box: wp(13) };
const useStyles = ({ isBottomTabs }) => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.center,
      width: size.box,
      height: size.box,
      borderRadius: size.box / 2,
      position: 'absolute',
      bottom: inset.bottom + isBottomTabs ? hp(15) : hp(10),
      right: wp(6),
      backgroundColor: Colors.primary,
    },
    icon: {
      ...RNStyles.image50,
    },
  });
};

export default RNPlus;
