import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import styles from '../styles/styles.js'

const Home = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>Add your buttons here!
        https://reactnative.dev/docs/button
        https://reactnative.dev/docs/navigation
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;