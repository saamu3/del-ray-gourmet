import * as React from "react";
import { StyleSheet, View} from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./components/Main";
import Desserts from "./components/Desserts";
import MainEntrees from "./components/MainEntrees";
import Appetizers from "./components/Appetizers";
import { Dimensions } from "react-native";

const Tab = createMaterialTopTabNavigator();
export default function App() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1}})