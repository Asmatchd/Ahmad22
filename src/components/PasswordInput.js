import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class PasswordInput extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            height: h('7%'),
            width: '80%',
            flexDirection: 'row',
            borderWidth: h('0.05%'),
            borderRadius: h('1%'),
            borderColor: 'red',
          },
          this.props.st,
        ]}>
        <View
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.ic} color={'red'} size={h('3%')} />
        </View>
        <TextInput
          style={{
            height: '100%',
            width: '70%',
            // backgroundColor: '#a3a',
          }}
          {...this.props}
        />

        <TouchableOpacity
          onPress={this.props.icPress}
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} color={'grey'} size={h('3%')} />
        </TouchableOpacity>
      </View>
    );
  }
}
