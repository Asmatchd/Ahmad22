import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  PermissionsAndroid,
  ImageBackground,
} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {NavHeader} from '../../components';

let camera = require('../../assets/camera.png');
let gallery = require('../../assets/gallery.png');

export class ImgPicker extends Component {
  state = {
    galleryImg: '',
    cameraImg: '',
  };

  fromGallery = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else {
        // actual URL of image
        const source = response.assets[0].uri;

        this.setState({
          galleryImg: source,
        });
      }
    });
  };

  fromCamera = () => {
    const options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        console.warn('User cancelled image picker');
      } else if (response.error) {
        console.warn('ImagePicker Error: ', response.error);
      } else if (response.errorCode) {
        console.warn('ImagePicker Error: ', response.errorMessage);
      } else {
        // actual URL of image
        const source = response.assets[0].uri;

        this.setState({
          cameraImg: source,
        });
      }
    });
  };

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'App Camera Permission',
          message: 'App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.fromCamera();
      } else {
        alert('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Image Picker'}
          leftIc={'ios-arrow-back'}
          leftPress={() => this.props.navigation.goBack()}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.fromGallery();
            }}
            style={{
              height: h('30%'),
              width: w('90%'),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {this.state.galleryImg === '' ? (
              <ImageBackground
                source={gallery}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#faf4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('4%'),
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  Gallery
                </Text>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{uri: this.state.galleryImg}}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#faf4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('4%'),
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  Gallery
                </Text>
              </ImageBackground>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.requestCameraPermission();
            }}
            style={{
              height: h('30%'),
              width: w('90%'),
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: h('4'),
            }}>
            {this.state.cameraImg === '' ? (
              <ImageBackground
                source={camera}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#faf4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: h('4%'),
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  Camera
                </Text>
              </ImageBackground>
            ) : (
              <ImageBackground
                source={{uri: this.state.cameraImg}}
                style={{
                  height: '100%',
                  width: '100%',
                  backgroundColor: '#faf4',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                resizeMode="contain">
                <Text
                  style={{
                    fontSize: h('4%'),
                    color: 'red',
                    fontWeight: 'bold',
                  }}>
                  Camera
                </Text>
              </ImageBackground>
            )}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
