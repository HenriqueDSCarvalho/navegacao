import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../telas/Home";
import Detalhes from '../telas/Detalhes';

const Stack = createNativeStackNavigator();

export default function StackRouts() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
            />
        </Stack.Navigator>
    );
}
