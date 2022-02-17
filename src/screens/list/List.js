import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {NavHeader, Loading} from '../../components';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {axiosInstance, baseUrl} from '../../services/Api';

export class List extends React.Component {
  state = {
    data: [],
    refresh: false,
    showLoading: false,
  };

  componentDidMount = () => {
    this.controlLoading(true);
    this.getUsers();
  };

  getUsers = () => {
    axiosInstance
      .get(baseUrl + 'users')
      .then(res => {
        this.controlLoading(false);
        this.setState({data: res.data});
      })
      .catch(err => {
        this.controlLoading(false);
        alert(err.message);
      });
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: h('12%'),
        width: w('90%'),
        backgroundColor: '#fff',
        flexDirection: 'row',
        marginBottom: h('2%'),
        marginTop: index === 0 ? h('2%') : 0,
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('10%'),
            width: h('10%'),
            borderRadius: h('5'),
          }}
          source={{uri: item.avatar_url}}
          // source={{
          //   uri: 'https://unsplash.com/photos/M4H2VN8dTIk',
          // }}
          resizeMode={'cover'}
        />
      </View>
      <View
        style={{
          height: '100%',
          width: '70%',
          // backgroundColor: '#faf',
          justifyContent: 'center',
          paddingLeft: h('2%'),
        }}>
        <Text>Name: {item.login}</Text>
        <Text>Type: {item.type}</Text>
        <Text>User ID: {item.node_id}</Text>
      </View>

      <TouchableOpacity
        style={{
          height: '100%',
          width: '10%',
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'chevron-forward'} size={h('3%')} color="red" />
      </TouchableOpacity>
    </View>
  );

  renderHorizontalDesign = (item, index) => (
    <View
      style={{
        height: h('12%'),
        width: w('70%'),
        backgroundColor: 'silver',
        flexDirection: 'row',
        marginRight: h('2%'),
        marginLeft: index === 0 ? h('2%') : 0,
      }}>
      <View
        style={{
          height: '100%',
          width: w('20%'),
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            height: h('10%'),
            width: h('10%'),
            borderRadius: h('5'),
          }}
          source={{uri: item.avatar_url}}
          // source={{
          //   uri: 'https://unsplash.com/photos/M4H2VN8dTIk',
          // }}
          resizeMode={'cover'}
        />
      </View>

      <View
        style={{
          height: '100%',
          width: w('40%'),
          // backgroundColor: '#faf',
          justifyContent: 'center',
          paddingLeft: h('2%'),
        }}>
        <Text
          style={{
            color: '#fff',
          }}>
          Name: {item.login}
        </Text>
        <Text
          style={{
            color: '#fff',
          }}>
          Type: {item.type}
        </Text>
        <Text
          style={{
            color: '#fff',
          }}>
          User ID: {item.node_id}
        </Text>
      </View>

      <TouchableOpacity
        style={{
          height: '100%',
          width: w('10%'),
          // backgroundColor: '#aaf',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'chevron-forward'} size={h('3%')} color="red" />
      </TouchableOpacity>
    </View>
  );

  refreshControl = () => {
    this.setState({refresh: true}, () => {
      setTimeout(() => {
        this.setState({refresh: false});
      }, 3000);
    });
  };

  controlLoading = value => this.setState({showLoading: value});

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <Loading showLoading={this.state.showLoading} />
        <NavHeader
          title={'FlatList'}
          // leftIc={'ios-arrow-back'}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <FlatList
            style={{
              height: h('15%'),
              // backgroundColor: '#faf',
              paddingTop: h('0.5'),
            }}
            horizontal
            data={this.state.data}
            renderItem={({item, index}) =>
              this.renderHorizontalDesign(item, index)
            }
            keyExtractor={(index, item) => item.toString()}
            showsHorizontalScrollIndicator={false}
          />

          <FlatList
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsVerticalScrollIndicator={false}
            refreshing={this.state.refresh}
            onRefresh={() => this.refreshControl()}
          />
        </View>
      </View>
    );
  }
}
