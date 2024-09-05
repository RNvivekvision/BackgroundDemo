// import moment from 'moment';
import { Alert, Linking } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { toast } from '@backpackapp-io/react-native-toast';
// import { Colors } from '../Theme';

const requestTimeout = 30000;

const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);

const wait = ms => new Promise(r => setTimeout(r, ms));

const OpenUrl = url => Linking.openURL(url);

// const setAppData = async data => {
//   const previousValue = await getAppData();
//   if (previousValue) {
//     await AsyncStorage.setItem(
//       'appdata',
//       JSON.stringify({ ...previousValue, ...data }),
//     );
//   } else {
//     await AsyncStorage.setItem('appdata', JSON.stringify(data));
//   }
// };

// const getAppData = async () => {
//   const value = await AsyncStorage.getItem('appdata');
//   return JSON.parse(value);
// };

// const formatDate = ({ date, format = 'DD-MM-YYYY' }) => {
//   const d = moment(date).format(format);
//   return d;
// };

// const handleResponse = response => {
//   // console.log('response -> ', JSON.stringify(response, null, 2));
//   if (response?.status === 401) {
//     return {
//       status: 401,
//       message: 'Unauthorized. Please login again.',
//       data: null,
//     };
//   }
//   if (response?.status !== 200) {
//     Toast.error(response?.message ?? 'Something went wrong. Please try again.');
//   }
//   return response;
// };

// const Toast = {
//   success: m =>
//     toast.success(m, {
//       id: 'success',
//       styles: { indicator: { backgroundColor: Colors.primary } },
//     }),
//   error: e => toast.error(e, { id: 'error' }),
//   message: m => toast(m, { id: 'message' }),
// };

const Functions = {
  requestTimeout,
  ALERT,
  OpenUrl,
  wait,
};
export default Functions;
