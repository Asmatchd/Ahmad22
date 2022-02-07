import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUp} from '../screens/signUp/SignUp';
import {Basics} from '../screens/Basics';
import {EditProfile} from '../screens/editProfile';
import {MultiList} from '../screens/list';
import {DrawerNavigator} from './DrawerNavigator';
import {ImgPicker} from '../screens/imgPicker';
import {DateTime} from '../screens/dateTime';

const Stack = createNativeStackNavigator();

export const ScreenNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DateTime"
          component={DateTime}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="MultiList"
          component={MultiList}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ImgPicker"
          component={ImgPicker}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Basics"
          component={Basics}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
