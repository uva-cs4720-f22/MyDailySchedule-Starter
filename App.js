import * as React from 'react';
import {Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/home.js'
import Schedule from './screens/schedule.js';

// The stack allows us to do page navigation with the back arrow
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // Add the navigation stack code here!  https://reactnative.dev/docs/navigation
    <Text>Do Stuff here and remove this!</Text>
  )
};

export default App;
