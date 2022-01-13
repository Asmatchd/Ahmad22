import react from 'react';
import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
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
          leftIc={'ios-arrow-back'}
          rightIc={'exit-outline'}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Flat List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Multi List</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Date & Time picker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Calendar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Image Picker</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: h('10%'),
              width: '90%',
              backgroundColor: '#fff',
              borderWidth: h('0.05%'),
              borderColor: 'red',
              borderRadius: h('1%'),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: h('2'),
            }}>
            <Text>Server Flat List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
