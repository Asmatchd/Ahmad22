import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader} from '../../components';

export class MultiList extends React.Component {
  state = {
    data: [
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
      {
        img: require('../../assets/1.jpg'),
      },
      {
        img: require('../../assets/2.jpg'),
      },
      {
        img: require('../../assets/3.jpg'),
      },
      {
        img: require('../../assets/4.jpg'),
      },
    ],
    count: 1,
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: this.state.count === 1 ? h('20%') : h('15%'),
        width:
          this.state.count === 1
            ? '100%'
            : this.state.count === 2
            ? '49.5%'
            : this.state.count === 3
            ? '33%'
            : '25%',
        // backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: h('2%'),
        padding: h('0.5'),
      }}>
      <Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={item.img}
        resizeMode={'cover'}
      />
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Multi List'}
          leftIc={'ios-arrow-back'}
          leftPress={() => this.props.navigation.goBack()}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View
            style={{
              height: h('6'),
              marginTop: h('2'),
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({count: 1});
              }}
              style={{
                height: h('6'),
                width: '20%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('3'),
                }}>
                1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({count: 2});
              }}
              style={{
                height: h('6'),
                width: '20%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('3'),
                }}>
                2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({count: 3});
              }}
              style={{
                height: h('6'),
                width: '20%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('3'),
                }}>
                3
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({count: 4});
              }}
              style={{
                height: h('6'),
                width: '20%',
                backgroundColor: 'red',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: h('3'),
                }}>
                4
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            // inverted
            key={
              this.state.count === 1
                ? 1
                : this.state.count === 2
                ? 2
                : this.state.count === 3
                ? 3
                : 4
            }
            numColumns={this.state.count}
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsVerticalScrollIndicator={false}
            // ListHeaderComponent={() => (
            //   <View
            //     style={{
            //       height: h('5'),
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       backgroundColor: '#fff',
            //       marginTop: h('2'),
            //     }}>
            //     <Text>Header</Text>
            //   </View>
            // )}
            // ListFooterComponent={() => (
            //   <View
            //     style={{
            //       height: h('5'),
            //       alignItems: 'center',
            //       justifyContent: 'center',
            //       backgroundColor: '#fff',
            //       marginBottom: h('2'),
            //     }}>
            //     <Text>Footer</Text>
            //   </View>
            // )}
          />
        </View>
      </View>
    );
  }
}
