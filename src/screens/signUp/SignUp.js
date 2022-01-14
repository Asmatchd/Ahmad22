import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {AppBtn, AppInput, PasswordInput} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export class SignUp extends React.Component {
  state = {
    name: '',
    phone: '',
    email: '',
    password: '',
    hide: true,
  };

  creatUser = () => {
    console.warn(
      'Name = ' +
        this.state.name +
        '\n' +
        'Phone = ' +
        this.state.phone +
        '\n' +
        'Email = ' +
        this.state.email +
        '\n' +
        'Password = ' +
        this.state.password,
    );
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            //   backgroundColor: '#faf',
            flex: 1,
          }}>
          <View
            style={{
              height: h('30%'),
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
              onChangeText={txt => this.setState({name: txt})}
              ic={'ios-person'}
              placeholder={'Name'}
              st={{
                marginTop: h('2%'),
              }}
            />

            <AppInput
              onChangeText={txt => this.setState({phone: txt})}
              ic={'ios-call'}
              placeholder={'Phone'}
              st={{
                marginTop: h('2%'),
              }}
            />

            <AppInput
              onChangeText={txt => this.setState({email: txt})}
              ic={'ios-mail'}
              placeholder={'Email'}
              st={{
                marginTop: h('2%'),
              }}
            />

            <PasswordInput
              onChangeText={txt => this.setState({password: txt})}
              ic={'lock-closed'}
              placeholder={'Password'}
              secureTextEntry={this.state.hide}
              icPress={() => this.setState({hide: !this.state.hide})}
              rightIc={
                this.state.hide === true ? 'eye-outline' : 'eye-off-outline'
              }
              st={{
                marginTop: h('2%'),
                // borderColor: '#000',
              }}
            />

            <AppBtn
              txt={'Sign Up'}
              onPress={() => {
                this.creatUser();
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
