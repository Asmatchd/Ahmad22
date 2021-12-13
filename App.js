import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#faf',
        flex: 1,
        // alignItems: 'center',
        // alignItems: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'flex-end',
      }}>
      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: '#aaf',
          // alignItems: 'center',
          // justifyContent: 'space-between',
          // justifyContent: 'space-around',
          justifyContent: 'space-evenly',
          // flexDirection: 'row',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#a3f',
          }}></View>

        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#aa3',
          }}></View>
      </View>

      <View
        style={{
          height: '40%',
          width: '100%',
          backgroundColor: '#af1',
          alignItems: 'center',
          justifyContent: 'space-between',
          // justifyContent: 'space-around',
          // justifyContent: 'space-evenly',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#a3f',
            marginLeft: 15,
          }}></View>

        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#aa3',
          }}></View>
      </View>
    </View>
  );
};

export default App;
