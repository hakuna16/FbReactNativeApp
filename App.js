import React from 'react';
import Index from './src/components/mainPage/index.js';
import { View, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View>
          <Index/>
      </View>
    );
  }
}
