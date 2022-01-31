import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {TabNavigator} from './TabNavigator';
import {Settings} from '../screens/settings';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      defaultStatus={'closed'}
      drawerContent={props => <Settings {...props} />}>
      <Drawer.Screen
        name="TabNavigator"
        component={TabNavigator}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};
