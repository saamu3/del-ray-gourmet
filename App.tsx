import * as React from "react";
import { StyleSheet, View } from "react-native";
import { SectionsData } from "./StaticData/SectionsData";
import Main from "./components/Main";
import Sections from "./components/Sections";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      <Sections Data={SectionsData} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});
