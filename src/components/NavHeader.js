import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

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
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {this.props.leftIc}
          </Text>
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            {this.props.rightIc}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
