import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'

import Routs from './src/Routs';

export default function App() {
  return(
    <NavigationContainer>
      <Routs/>
    </NavigationContainer>
  )
}