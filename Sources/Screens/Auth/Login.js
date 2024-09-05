import { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNText,
} from '../../Common';
import { Images } from '../../Constants';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { LOInput } from '../../Components';
import { Functions } from '../../Utils';
import { NavRoutes } from '../../Navigation';

export default function Login({ navigation }) {
  const [State, setState] = useState({
    isLoading: false,
    input: '',
  });

  const onLoginPress = async () => {
    setState(p => ({ ...p, isLoading: true }));
    try {
      await Functions.wait(2000);
      setState(p => ({ ...p, isLoading: false }));
      navigation.replace(NavRoutes.Home);
    } catch (e) {
      console.log('Error onLoginPress -> ', e);
    } finally {
      setState(p => ({ ...p, isLoading: false }));
    }
  };

  return (
    <RNContainer isLoading={State.isLoading}>
      <RNScrollView>
        <RNImage source={Images.login} style={styles.image} />

        <RNText style={styles.title}>{'Log In'}</RNText>
        <RNText style={styles.text}>
          {'Enter your username and password to log in'}
        </RNText>

        <LOInput title={'Username'} placeholder={'Enter your username'} />
        <LOInput
          title={'Password'}
          placeholder={'Enter your password'}
          secureTextEntry={true}
        />

        <RNButton
          title={'Login'}
          onPress={onLoginPress}
          style={{ marginTop: hp(6) }}
        />
      </RNScrollView>
    </RNContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    height: hp(25),
    width: '75%',
    alignSelf: 'center',
    marginVertical: hp(12),
    marginBottom: hp(6),
  },
  title: {
    fontSize: FontSize.font24,
    fontFamily: FontFamily.SemiBold,
    paddingHorizontal: wp(4),
  },
  text: {
    fontSize: FontSize.font12,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
});
