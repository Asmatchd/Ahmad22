import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#faf',
        height: 660,
        width: 413,
        alignItems: 'center',
        // alignItems: 'flex-end',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
      }}>
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#a3f',
          }}></View>
      </View>
    </View>
  );
};

export default App;
