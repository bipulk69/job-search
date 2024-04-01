// App.js
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <>
      {/* <StatusBar barStyle="light-content" /> */}
      <AppNavigator />
    </>
  );
};

export default App;
