import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Desserts from "./components/Desserts";
import MainEntrees from "./components/MainEntrees";
import Appetizers from "./components/Appetizers";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 12, fontWeight: "500" },
          tabBarActiveTintColor: "rgb(248, 113, 113)",
          tabBarInactiveTintColor: "black",
          tabBarPressColor: "lightpink",
        }}
      >
        <Tab.Screen name="Appetizers" component={Appetizers} />
        <Tab.Screen name="Main Entrées" component={MainEntrees} />
        <Tab.Screen name="Desserts" component={Desserts} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
