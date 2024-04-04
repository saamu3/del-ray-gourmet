import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Section from "./components/Section";
import Desserts from "./components/Desserts";
import MainEntrees from "./components/MainEntrees";
// import {NavigationContainer} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <Tab.Navigator>
        <Tab.Screen name="Appetizers" component={Section} />
        <Tab.Screen name="DESSERTS" component={Desserts} />
        <Tab.Screen name="Main Entrees" component={MainEntrees} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
