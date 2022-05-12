import {View, Text, PermissionsAndroid, Platform} from 'react-native';
import React, {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import invokeApp from 'react-native-invoke-app';

const App = () => {
  useEffect(() => {
    const generateToken = async () => {
      const token = await messaging().getToken();
      console.log('Token', token);
    };
    generateToken();
  }, []);
  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;
