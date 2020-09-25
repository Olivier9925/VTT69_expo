import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import MyAbeilles from './app/MyAbeilles';

const App = () => {
  return (
    <>
      <SafeAreaView>
        <StatusBar style="auto" />
        <MyAbeilles />
      </SafeAreaView>
    </>
  );
}
export default App;