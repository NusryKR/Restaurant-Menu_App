/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './navigation/tabs';
import {Home, Restaurant} from './screens';

import firebase from '@react-native-firebase/app';
import Auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import OneSignal from 'react-native-onesignal';

var firebaseConfig = {
  apiKey: 'AIzaSyD0pWQyv8HLzvEcC49fPedNQu8VtUSnIZY',
  authDomain: 'restaurant-new.firebaseapp.com',
  databaseURL: 'https://restaurant-new-default-rtdb.firebaseio.com',
  projectId: 'restaurant-new',
  storageBucket: 'restaurant-new.appspot.com',
  messagingSenderId: '689029186273',
  appId: '1:689029186273:web:ec080c47884d91298d6da0',
  measurementId: 'G-E97GLZ9BBG',
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig);


const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    OneSignal.setAppId('689f8016-409f-4e1c-927a-f66259fdbbb7', {
      kOSSettingsKeyAutoPrompt: false,
      kOSSettingsKeyInAppLaunchURL: false,
      kOSSettingsKeyInFocusDisplayOptionn: 2,
    });
  }, []);

  //SplashScreen
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
