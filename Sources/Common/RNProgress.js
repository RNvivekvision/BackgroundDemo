import { View, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Colors, hp, wp } from '../Theme';
import LinearGradient from 'react-native-linear-gradient';

const RNProgress = ({ progress }) => {
  const animatedStyle = useAnimatedStyle(
    () => ({
      width: `${progress.value}%`,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        <Animated.View style={[styles.bar, animatedStyle]}>
          <LinearGradient
            colors={[Colors.primary1, Colors.primary2]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: wp(0.1),
    padding: wp(0.5),
    borderRadius: 100,
    borderColor: Colors.white,
    marginVertical: hp(1),
  },
  barContainer: {
    height: wp(2),
    width: '100%',
    borderRadius: 100,
    overflow: 'hidden',
  },
  bar: {
    height: '100%',
    backgroundColor: Colors.error,
    borderRadius: 100,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 100,
  },
});

export default RNProgress;
