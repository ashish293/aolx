/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import RNCallKeep from 'react-native-callkeep';
import messaging from '@react-native-firebase/messaging';
import BackgroundHandler from './utils/BackgroundHandler';

function HeadlessCheck({isHeadless}) {
  if (isHeadless) {
    console.log('headless');
    // App has been launched in the background by iOS, ignore
    return null;
  }
  return <App />;
}
const options = {
  ios: {
    appName: 'My app name',
  },
  android: {
    alertTitle: 'Permissions required',
    alertDescription: 'This application needs to access your phone accounts',
    cancelButton: 'Cancel',
    okButton: 'ok',
    imageName: 'phone_account_icon',

    // Required to get audio in background when using Android 11
    foregroundService: {
      channelId: 'com.company.my',
      channelName: 'Foreground service for my app',
      notificationTitle: 'My app is running on background',
      notificationIcon: 'Path to the resource icon of the notification',
    },
  },
};
RNCallKeep.setup(options);
RNCallKeep.setAvailable(true);
messaging().setBackgroundMessageHandler(BackgroundHandler);

AppRegistry.registerComponent(appName, () => HeadlessCheck);
