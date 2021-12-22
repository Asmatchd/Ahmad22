import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export class SignUp extends React.Component {
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

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              marginTop: 30,
              height: 60,
              width: '70%',
              // backgroundColor: '#aaf',
              borderColor: '#0002',
              // borderWidth: 0.5,
              borderTopWidth: 1,
              borderLeftWidth: 2,
              borderRightWidth: 3,
              borderBottomWidth: 4,
              borderRadius: 10,
              paddingLeft: 10,
              color: 'red',
              fontSize: 20,
              // fontWeight: 'bold',
            }}
            placeholder={'Name'}
            placeholderTextColor={'red'}
            editable={false}
            // value={'Study class'}
          />

          <TouchableOpacity
            style={{
              marginTop: 20,
              height: 50,
              width: '50%',
              backgroundColor: '#4AAB7E',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 25,
            }}
            // disabled={true}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
