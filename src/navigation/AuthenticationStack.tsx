import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ON_BOARDING_SCREEN, WELCOME_SCREEN } from "../constants";
import OnBoaring from "../screens/authentication/onBoarding/OnBoaring";
import Welcome from "../screens/authentication/welcome/Welcome";

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name={ON_BOARDING_SCREEN} component={OnBoaring} />
      <Stack.Screen name={WELCOME_SCREEN} component={Welcome} />
    </Stack.Navigator>
  );
};

export default AuthenticationStack;
