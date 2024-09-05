import { StatusBar, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { useInset } from '../Hooks';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  noScroll,
  back = true,
  onBack,
  right,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  const onBackPress = async () => {
    back ? navigation.goBack() : navigation.openDrawer();
  };

  return (
    <View style={RNStyles.container}>
      <StatusBar barStyle={'light-content'} />
      <View style={[styles.container, containerStyle]}>
        {back ? (
          <RNIcon
            icon={Images.back}
            onPress={onBack ? onBack : onBackPress}
            containerStyle={styles.icon}
          />
        ) : (
          <View
            style={[styles.icon, { backgroundColor: Colors.transparent }]}
          />
        )}
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
        {right ? (
          right
        ) : (
          <View
            style={[styles.icon, { backgroundColor: Colors.transparent }]}
          />
        )}
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
      backgroundColor: Colors.primary,
    },
    icon: {
      ...RNStyles.center,
      width: size.iconContainer,
      height: size.iconContainer,
      borderRadius: wp(2),
      backgroundColor: Colors.primary + '10',
    },
    title: {
      flex: 1,
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.SemiBold,
      textAlign: 'center',
      color: Colors.white,
    },
    footer: {
      paddingBottom: inset.bottom,
    },
  });
};

const size = { icon: wp(4), iconContainer: wp(10) };

export default RNHeader;
