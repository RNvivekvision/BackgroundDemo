import React, { forwardRef } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNInput, RNStyles, RNText, RNIcon } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';

const LOInput = (
  {
    title,
    icon,
    text,
    textStyle,
    onIconPress,
    onPress,
    error,
    errorMsg,
    containerStyle,
    disable,
    country,
    ...rest
  },
  ref,
) => {
  const styles = useStyles({ error, disable });
  return (
    <View style={[styles.container, containerStyle]}>
      {title && <RNText style={styles.title}>{title}</RNText>}
      {text ? (
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={onPress}
          style={styles.inputContainer}>
          <RNText style={[styles.text, textStyle]}>{text}</RNText>
        </TouchableOpacity>
      ) : (
        <View style={styles.inputContainer}>
          {country}
          <RNInput
            ref={ref}
            style={styles.input}
            editable={!disable}
            {...rest}
          />
          {icon && (
            <RNIcon
              icon={icon}
              iconStyle={styles.icon}
              onPress={onIconPress}
              containerStyle={styles.IconContainer}
            />
          )}
        </View>
      )}
      {error && <RNText style={styles.errorMsg}>{errorMsg}</RNText>}
    </View>
  );
};

const useStyles = ({ error, disable }) => {
  return StyleSheet.create({
    container: {
      paddingTop: hp(2),
      marginHorizontal: wp(4),
    },
    title: {
      fontSize: FontSize.font14,
      color: Colors.black,
    },
    text: {
      paddingVertical: hp(1),
      fontSize: FontSize.font12,
      color: Colors.placeholder,
    },
    inputContainer: {
      ...RNStyles.flexRow,
      paddingHorizontal: wp(4),
      // paddingVertical: hp(0.7),
      borderRadius: wp(3),
      paddingVertical: hp(0.5),
      marginTop: hp(1),
      backgroundColor: Colors.primary + '10',
      borderWidth: wp(0.3),
      borderColor: error ? Colors.error : Colors.transparent,
    },
    input: {
      flex: 1,
      marginVertical: 0,
      paddingHorizontal: 0,
      color: disable ? Colors.black + '50' : Colors.black,
    },
    IconContainer: {
      ...RNStyles.center,
      width: wp(8),
      height: wp(8),
      marginLeft: wp(1),
      backgroundColor: Colors.transparent,
    },
    icon: {
      ...RNStyles.image70,
      tintColor: Colors.black,
    },
    errorMsg: {
      fontSize: FontSize.font12,
      paddingTop: hp(1),
      color: Colors.error,
    },
  });
};

export default forwardRef(LOInput);
