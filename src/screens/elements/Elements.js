import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';
import {ButtonGroup, Avatar} from 'react-native-elements';

export class Elements extends React.Component {
  state = {
    selectedIndex: 0,
    txt: '',
  };

  buttons = ['One', 'Two', 'Three'];

  selectButton = selected => {
    this.setState(
      {
        selectedIndex: selected,
      },
      () => {
        switch (selected) {
          case 0:
            this.setState({txt: 'One'});
            break;
          case 1:
            this.setState({txt: 'Two'});
            break;
          case 2:
            this.setState({txt: 'Three'});
            break;

          default:
            break;
        }
      },
    );
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Elements'}
          leftPress={() => {
            this.props.navigation.goBack();
          }}
          leftIc={'ios-arrow-back'}
        />

        <ButtonGroup
          onPress={selected => this.selectButton(selected)}
          selectedIndex={this.state.selectedIndex}
          buttons={this.buttons}
          selectedButtonStyle={{
            borderBottomColor: 'red',
            borderBottomWidth: h('0.3'),
            backgroundColor: '#fff',
          }}
          selectedTextStyle={{
            color: 'red',
          }}
        />

        <Text>Selected Button is {this.state.txt}</Text>

        <Avatar
          size={'xlarge'}
          rounded
          source={{uri: 'https://randomuser.me/api/portraits/women/547.jpg'}}
          title="Bj"
          containerStyle={{backgroundColor: 'red'}}
        />
      </View>
    );
  }
}
