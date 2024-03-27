import * as React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Section from "./components/Section";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Main />
      <Tab.Navigator style={{}}
        // screenOptions={{
        //   tabBarLabelStyle: { fontSize: 12,fontWeight:"bold"},
        //   tabBarItemStyle: { width: 100 },
        //   tabBarStyle: { backgroundColor: "#fff" },
        // }}
      >
        <Tab.Screen name="Appetizers" component={Section} />
        <Tab.Screen name="DESSERTS" component={Section} />
        <Tab.Screen name="Main Entrees" component={Section} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
