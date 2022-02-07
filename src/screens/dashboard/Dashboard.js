import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Dashboard extends React.Component {
  removeUser = () => {
    AsyncStorage.removeItem('userData');
    console.warn('User removed');
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Dashboard'}
          leftPress={() => {
            this.props.navigation.openDrawer();
          }}
          rightPress={() => {
            this.removeUser();
          }}
          leftIc={'options'}
          rightIc={'exit-outline'}
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 2,
            alignItems: 'center',
            paddingBottom: 10,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('EditProfile');
            }}
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
            onPress={() => {
              this.props.navigation.navigate('List');
            }}
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
            onPress={() => {
              this.props.navigation.navigate('MultiList');
            }}
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
            onPress={() => {
              this.props.navigation.navigate('DateTime');
            }}
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
            onPress={() => {
              this.props.navigation.navigate('ImgPicker');
            }}
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
        </ScrollView>
      </View>
    );
  }
}
