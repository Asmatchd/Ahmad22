import react from 'react';
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';

export class List extends react.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
      {
        name: 'Ali',
        fName: 'Umer',
        dob: '10-09-2010',
      },
      {
        name: 'Kamran',
        fName: 'Ali',
        dob: '10-09-2000',
      },
    ],
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader title={'FlatList'} leftIc={'ios-arrow-back'} />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => (
              <View
                style={{
                  height: h('7%'),
                  width: w('90%'),
                  backgroundColor: '#fff',
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginBottom: h('2%'),
                  marginTop: index === 0 ? h('2%') : 0,
                }}>
                <Text>Name: {item.name}</Text>
                <Text>FName: {item.fName}</Text>
                <Text>DOB: {item.dob}</Text>
              </View>
            )}
            keyExtractor={(index, item) => item.toString()}
          />
        </View>
      </View>
    );
  }
}
