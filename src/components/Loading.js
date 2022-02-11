import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export class Loading extends React.Component {
  render() {
    return this.props.showLoading ? (
      <View
        style={{
          height: '100%',
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          backgroundColor: '#0005',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text
          style={{
            color: '#fff',
            fontSize: 16,
          }}>
          Loading please wait..
        </Text>
      </View>
    ) : null;
  }
}
