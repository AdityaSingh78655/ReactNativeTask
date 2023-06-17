import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";


const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ScreenOne"
        component={ScreenOne}
      />
      <Stack.Screen
        name="ScreenTwo"
        component={ScreenTwo}
      />
    
    </Stack.Navigator>
  );
};

export default StackNavigator;
