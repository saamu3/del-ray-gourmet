import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Section from "./components/Section";
import Desserts from "./components/Desserts";
import MainEntrees from "./components/MainEntrees";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
          // tabBarItemStyle: { width: 100 },
          // tabBarStyle: { backgroundColor: "powderblue" },
        }}
      >
        <Tab.Screen name="Appetizers" component={Section} />
        <Tab.Screen name="Main Entrées" component={MainEntrees} />
        <Tab.Screen name="Desserts" component={Desserts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
