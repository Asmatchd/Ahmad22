import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader, Loading} from '../../components';

export class Dashboard extends React.Component {
  state = {
    showLoading: false,
  };

  controlLoading = value => {
    this.setState({showLoading: value}, () => {
      setTimeout(() => {
        this.setState({showLoading: false});
      }, 3000);
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Loading showLoading={this.state.showLoading} />
        <NavHeader
          title={'Dashboard'}
          leftPress={() => {
            this.props.navigation.openDrawer();
          }}
          leftIc={'options'}
          rightIc={'reload'}
          rightPress={() => {
            this.controlLoading(true);
          }}
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
            onPress={() => this.props.navigation.navigate('LearnCalendar')}
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
            <Text>Loading - Elements</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
