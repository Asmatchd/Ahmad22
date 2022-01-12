import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          width: '100%',
          backgroundColor: '#fff',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPress}
          style={{
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.leftIc} size={20} color={'red'} />
        </TouchableOpacity>

        <View
          style={{
            height: '100%',
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{this.props.title}</Text>
        </View>

        <TouchableOpacity
          onPress={this.props.rightPress}
          style={{
            height: '100%',
            width: '15%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={20} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  }
}
