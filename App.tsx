import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { StyleSheet, View } from "react-native";
import Appetizers from "./components/Appetizers";
import Desserts from "./components/Desserts";
import Main from "./components/Main";
import MainEntrees from "./components/MainEntrees";

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
  container: { flex: 1 },
});
