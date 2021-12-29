import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

export class AppBtn extends React.Component {
  // componentDidMount = () => {
  //   console.log(this);
  // };

  render() {
    return (
      <TouchableOpacity
        {...this.props}
        style={{
          marginTop: 20,
          height: 50,
          width: '50%',
          backgroundColor: '#4AAB7E',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 25,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          {this.props.txt}
        </Text>
      </TouchableOpacity>
    );
  }
}
