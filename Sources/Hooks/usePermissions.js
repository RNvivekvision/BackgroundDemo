import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';

const permissions = Platform.select({
  android: [
    PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION,
    PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
    PERMISSIONS.ANDROID.CAMERA,
    PERMISSIONS.ANDROID.RECORD_AUDIO,
    PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
  ],
  ios: [
    PERMISSIONS.IOS.CAMERA,
    PERMISSIONS.IOS.PHOTO_LIBRARY,
    PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  ],
});

const checkPermission = async permission => {
  try {
    const status = await check(permission);
    return status === RESULTS.GRANTED;
  } catch (error) {
    console.error(`Error checking permission ${permission}:`, error);
    return false;
  }
};

const requestPermission = async permission => {
  try {
    const status = await request(permission);
    return status === RESULTS.GRANTED;
  } catch (error) {
    console.error(`Error requesting permission ${permission}:`, error);
    return false;
  }
};

const usePermissions = () => {
  const checkPermissions = async () => {
    const statuses = await Promise.all(permissions.map(checkPermission));
    return statuses.every(status => status);
  };

  const requestPermissions = async () => {
    if (Platform.OS === 'android') {
      // Request permissions one by one for Android
      for (const permission of permissions) {
        const granted = await requestPermission(permission);
        if (!granted) return false; // Stop if any permission is not granted
      }
      return true; // All permissions granted
    } else {
      // Request all permissions at once for iOS
      const statuses = await Promise.all(permissions.map(requestPermission));
      return statuses.every(status => status);
    }
  };

  return { checkPermissions, requestPermissions };
};

export default usePermissions;
