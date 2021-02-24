import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../src/screens/Home";
import Accenture from "../src/screens/Accenture";
import Contact from '../src/screens/Contact';

import Header from "./components/Header";

const { Navigator, Screen } = createStackNavigator();

export default function Route() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="home" component={Home} />
        <Screen
          name="accenture"
          component={Accenture}
          options={{
            headerShown: true,
            header: () => <Header title={"Home"} showCancel={false} />,
          }}
        />
        <Screen
          name="Contact"
          component={Contact}
          options={{
            headerShown: true,
            header: () => <Header showCancel={true} title={"Contato"}/>,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}