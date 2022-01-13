import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppBtn, AppInput} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
export class SignUp extends React.Component {
  state = {
    name: 'Study class',
  };

  study = () => {
    console.warn(this.state.name);
  };

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
          {/* <TextInput
            onChangeText={txt => this.setState({name: txt})}
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
            // editable={false}
            value={this.state.name}
          /> */}

          <AppInput
            ic={'ios-person'}
            placeholder={'Name'}
            st={{
              marginTop: h('2%'),
            }}
          />

          <AppInput
            ic={'ios-call'}
            placeholder={'Phone'}
            st={{
              marginTop: h('2%'),
            }}
          />

          <AppInput
            ic={'ios-mail'}
            placeholder={'Email'}
            st={{
              marginTop: h('2%'),
            }}
          />

          <AppInput
            ic={'lock-closed'}
            placeholder={'Password'}
            st={{
              marginTop: h('2%'),
              // borderColor: '#000',
            }}
          />

          <AppBtn
            txt={'Sign Up'}
            onPress={() => {
              // this.study();
              this.props.navigation.navigate('Basics');
            }}
          />
        </View>
      </View>
    );
  }
}
