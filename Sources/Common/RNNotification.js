import { useEffect } from 'react';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import { Functions } from '../Utils';

messaging().setBackgroundMessageHandler(async message => {
  console.log('BG Msg -> ', JSON.stringify(message, null, 2));
  await Functions.dispalayNotification({ message });
});

const RNNotification = () => {
  useEffect(() => {
    const unsubscribeOnMessage = messaging().onMessage(async message => {
      console.log('onMessage -> ', JSON.stringify(message, null, 2));
      await Functions.dispalayNotification({ message });
    });

    const unsubscribeOnNotificationOpenedApp =
      messaging().onNotificationOpenedApp(async message => {
        console.log(
          'onNotificationOpenedApp -> ',
          JSON.stringify(message, null, 2),
        );
        // Handle the notification when app is opened from background
      });

    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
  }, []);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    await notifee.setBadgeCount(0);
    await notifee.cancelAllNotifications();
    const pushToken = await Functions.getPushToken();
    if (!pushToken) return;
    await Functions.setAppData({ pushToken: pushToken });
    const initialNotification = await notifee.getInitialNotification();
    console.log(
      'getInitialNotification -> ',
      JSON.stringify(initialNotification, null, 2),
    );
  };

  return <></>;
};

export default RNNotification;

// import React, { useEffect } from 'react';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import PushNotification from 'react-native-push-notification';
// import messaging from '@react-native-firebase/messaging';
// import { isIOS } from '../Theme';
// import { Functions } from '../Utils';

// const PushNotifications = () => {
//   useEffect(() => {
//     const unsubscribe = messaging().onMessage(async message => {
//       console.log('onMessage -> ', JSON.stringify(message, null, 2));
//       await Functions.dispalayNotification({ message });
//     });

//     return unsubscribe;
//   }, []);

//   useEffect(() => {
//     CreateChannel();
//     Configure();
//   }, []);

//   const CreateChannel = () => {
//     PushNotification.createChannel({
//       channelId: 'Mosaic',
//       channelName: 'Mosaic Channel',
//       vibrate: true,
//     });
//   };

//   const Configure = async () => {
//     try {
//       await PushNotification.configure({
//         onNotification: function (notification) {
//           notification.finish(PushNotificationIOS.FetchResult.NoData);
//         },
//         permissions: {
//           alert: true,
//           badge: true,
//           sound: true,
//         },
//         popInitialNotification: true,
//         requestPermissions: isIOS,
//       });
//       await PushNotification.setApplicationIconBadgeNumber(0);
//       await PushNotificationIOS.setApplicationIconBadgeNumber(0);
//       const pushToken = await Functions.getPushToken();
//       if (!pushToken) return;
//       await Functions.setAppData({ pushToken: pushToken });
//     } catch (e) {
//       console.log('Error Configure Push Notifications -> ', e);
//     }
//   };

//   return <></>;
// };

// export default PushNotifications;
