import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Colors, wp } from '../Theme';
import RNStyles from './RNStyles';
const RNLoader = ({ visible, style, color, size }) => {
  if (!visible) return null;
  return (
    <View style={[styles.Container, style]}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator
          size={size ?? 'large'}
          color={color || Colors.primary}
        />
      </View>
    </View>
  );
};
const size = wp(22);
const styles = StyleSheet.create({
  Container: {
    ...RNStyles.center,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.black + '60',
    zIndex: 10000,
  },
  loaderContainer: {
    ...RNStyles.center,
    width: size,
    height: size,
    backgroundColor: Colors.white,
    borderRadius: wp(3),
  },
});
export default RNLoader;

// import React, { useEffect, useRef } from 'react';
// import { View, StyleSheet } from 'react-native';
// import { Colors, wp } from '../Theme';
// import RNStyles from './RNStyles';
// import Reanimated, {
//   Easing,
//   useAnimatedStyle,
//   useSharedValue,
//   withRepeat,
//   withTiming,
// } from 'react-native-reanimated';

// const RNLoader = ({ visible, style }) => {
//   const rotate = useSharedValue(0);
//   const rotateReverse = useSharedValue(0);

//   useEffect(() => {
//     rotate.value = withRepeat(
//       withTiming(1, {
//         duration: 1000,
//         easing: Easing.linear,
//       }),
//       -1, // Infinite loop
//       false, // No reverse
//     );

//     rotateReverse.value = withRepeat(
//       withTiming(1, {
//         duration: 500,
//         easing: Easing.linear,
//       }),
//       -1, // Infinite loop
//       false, // No reverse
//     );
//   }, []);

//   const rotateStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           rotate: `${rotate.value * 360}deg`,
//         },
//       ],
//     };
//   });

//   const reverseRotateStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           rotate: `${rotateReverse.value * -360}deg`,
//         },
//       ],
//     };
//   });

//   return true ? (
//     <View style={[styles.container, style]}>
//       <View style={styles.loaderContainer}>
//         <Reanimated.View style={[styles.loader, rotateStyle]} />
//         <Reanimated.View style={[styles.loaderAfter, reverseRotateStyle]} />
//       </View>
//     </View>
//   ) : null;
// };

// const size = wp(22);
// const loader = size * 0.6;

// const styles = StyleSheet.create({
//   container: {
//     ...RNStyles.center,
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: Colors.black + '50', // Background similar to loader-bg in your HTML code
//     zIndex: 9999,
//   },
//   loaderContainer: {
//     ...RNStyles.center,
//     width: size,
//     height: size,
//     // backgroundColor: Colors.white,
//     borderRadius: wp(3),
//   },
//   loader: {
//     width: loader,
//     height: loader,
//     borderRadius: loader / 2,
//     borderTopWidth: 4,
//     borderRightWidth: 4,
//     borderRightColor: 'transparent',
//     borderColor: Colors.white,
//     position: 'absolute',
//   },
//   loaderAfter: {
//     width: loader,
//     height: loader,
//     borderRadius: loader / 2,
//     borderLeftWidth: 4,
//     borderBottomWidth: 4,
//     borderColor: Colors.primary,
//     borderBottomColor: 'transparent',
//     position: 'absolute',
//   },
// });

// export default RNLoader;
