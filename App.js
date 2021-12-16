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
          // justifyContent: 'space-between',
          justifyContent: 'space-around',
          // justifyContent: 'space-evenly',
          flexDirection: 'row',
          // padding: 10,
          // paddingTop: 10,
          // paddingBottom: 10,
          // paddingLeft: 10,
          // paddingRight: 10,
        }}>
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#a3f',
            // margin: 10,
            // marginTop: 10,
            // marginBottom: 10,
            // marginLeft: 10,
            // marginRight: 10,

            borderRadius: 50,
          }}></View>

        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: '#aa3',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 50,
            // borderBottomLeftRadius: 10,
            borderBottomRightRadius: 20,
          }}></View>
      </View>
    </View>
  );
};

export default App;
