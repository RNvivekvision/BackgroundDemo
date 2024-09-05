import { StyleSheet, TouchableOpacity } from 'react-native';
import { Images } from '../Constants';
import { Colors, wp } from '../Theme';
import RNImage from './RNImage';
import RNStyles from './RNStyles';

const EAClose = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.closeIcon}>
      <RNImage source={Images.cross} style={RNStyles.image50} />
    </TouchableOpacity>
  );
};

const size = { cross: wp(8) };
const styles = StyleSheet.create({
  closeIcon: {
    ...RNStyles.center,
    ...RNStyles.shadow,
    width: size.cross,
    height: size.cross,
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    position: 'absolute',
    top: wp(5),
    right: wp(5),
    zIndex: 1,
  },
});

export default EAClose;
