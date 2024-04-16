import * as React from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { SectionsData } from "./StaticData/SectionsData";
import Main from "./components/Main";
import Sections from "./components/Sections";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
      <Sections Data={SectionsData} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1,paddingTop:Platform.OS==="android"?0:StatusBar.currentHeight},
});
