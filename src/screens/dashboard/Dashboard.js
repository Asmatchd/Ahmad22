import react from 'react';
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';

export class Dashboard extends react.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Dashboard'}
          leftPress={() => {
            console.warn('1');
          }}
          rightPress={() => {
            console.warn('2');
          }}
          leftIc={'<'}
          rightIc={'>'}
        />
      </View>
    );
  }
}
