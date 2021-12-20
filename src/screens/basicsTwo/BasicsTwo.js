import React from 'react';
import {View, Text} from 'react-native';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          //   backgroundColor: '#faf',
          flex: 1,
        }}>
        {/* <View
          style={{
            height: '10%',
            backgroundColor: '#af33',
            //   alignItems: 'center',
            //   justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#aaf',
              fontSize: 25,
              // fontStyle: 'italic',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
            numberOfLines={2}>
            I want to sell my{'\n'}Nokia 3.1plus 32GB Rom 3GB Ram final price
            15k usage 6 months Contact no. 03082239826 City Ahmad pur East
          </Text>
        </View> */}

        <View
          style={{
            height: '30%',
            width: '80%',
            backgroundColor: '#4AAB7E',
            borderBottomRightRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: 'bold',
              color: '#fff',
              marginTop: 30,
            }}>
            Welcome{'\n'}to MyApp.
          </Text>
        </View>
      </View>
    );
  }
}
