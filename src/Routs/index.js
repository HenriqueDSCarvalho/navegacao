import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer'

import StackRouts from './StackRouts';
import Sobre from '../telas/Sobre';
import Contato from '../telas/Contato';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Drawer.Navigator 
      drawerContent={CustomDrawer}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
        },
        drawerActiveBackgroundColor: '#00daa4',
        drawerActiveTintColor: '#ffffff',

        drawerInactiveBackgroundColor: '#f1f1f1',
        drawerInactiveTintColor: '#000'
      }}
    >
      <Drawer.Screen
        name='HomeStack'
        component={StackRouts}
      />

      <Drawer.Screen
        name='Sobre'
        component={Sobre}
      />

      <Drawer.Screen
      name='Contato'
      component={Contato}
      />
    </Drawer.Navigator>
  );
}
