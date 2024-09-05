import React from 'react';
import RNStyles from './RNStyles';
import FastImage from 'react-native-fast-image';

const RNFastImage = ({ source, resizeMode, style, ...rest }) => {
  return (
    <FastImage
      source={source}
      resizeMode={resizeMode || 'contain'}
      style={[RNStyles.image100, style]}
      {...rest}
    />
  );
};

export default RNFastImage;
