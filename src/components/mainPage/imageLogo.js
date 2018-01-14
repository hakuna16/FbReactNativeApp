import React from 'react';
import { View, Text, Image } from 'react-native';

export default class ImageLogo extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('./logo.PNG')}/>
      </View>
    );
  }
}
