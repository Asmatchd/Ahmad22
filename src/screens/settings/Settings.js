import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Settings extends React.Component {
  removeUser = () => {
    AsyncStorage.removeItem('userData');
    console.warn('User removed');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            this.removeUser();
          }}
          style={{
            height: h('8'),
            width: '90%',
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: h('0.05'),
            borderRadius: h('1'),
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: h('2.5'),
            }}>
            Log Out
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.warn('1');
          }}
          style={{
            height: h('8'),
            width: '90%',
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: h('0.05'),
            borderRadius: h('1'),
            marginTop: h('2%'),
          }}>
          <Text
            style={{
              color: 'red',
              fontSize: h('2.5'),
            }}>
            Customer Support
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
