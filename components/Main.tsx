import {
  faAngleDown,
  faCircleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SectionList,
  ScrollView,
} from "react-native";
import Select from "./Select";
import Navbar from "./Navbar";
import { DATA } from "../StaticData.js/AppetizersData";
import { useState } from "react";
type TState = {
  visible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const data = [
  { key: "1", value: "Dinner Menu" },
  { key: "2", value: "Happy Hour Menu" },
  { key: "3", value: "Lunch Specials" },
];

export default function Main() {
  const [visible, setIsVisible] = useState<boolean>(false);
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar hidden />
        <View style={styles.innerContainer}>
          <Text style={styles.text}>
            <FontAwesomeIcon
              style={{ color: "white" }}
              icon={faCircleExclamation}
            />
            WE ARE NOW OPEN FOR INDOOR DINING!
          </Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={{
              uri: "https://media-cdn.tripadvisor.com/media/photo-s/27/ac/8b/8e/pretelt-gourmet-meats.jpg",
            }}
            style={{
              width: 400,
              height: 200,
            }}
          />
          <View style={styles.address}>
            <Text style={{ color: "white" }}>Del Ray Gourmet</Text>
            <Text style={{ color: "white" }}>
              Open • Closes 10:00 PM
              <FontAwesomeIcon style={{ color: "white" }} icon={faAngleDown} />
            </Text>
            <Text style={{ color: "white" }}>
              123 Ave of the Roosters, Derwood MD
            </Text>
            <Text style={{ color: "white" }}>
              <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} />
              Tel: 301-555-1212
            </Text>
          </View>
          <Navbar visible={visible} setIsVisible={setIsVisible} />
          <SectionList
            sections={DATA}
            keyExtractor={(item: any, index: any) => item + index}
            renderItem={({ item }: any) => (
              <View style={styles.item}>
                <View>
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.title}>{item.description}</Text>
                  <Text style={styles.title}>{item.para}</Text>
                </View>
                <View>
                  <Text>{item.price}</Text>
                </View>
              </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.header}>{title}</Text>
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1},
  innerContainer: {
    height: 30,
    width: 360,
    backgroundColor: "pink",
    paddingLeft: 40,
    paddingTop: 5,
  },
  text: { color: "white" },
  address: { position: "absolute", color: "white" },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 100,
    width: 340,
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
  },
  title: {
    fontSize: 10,
    color: "blue",
  },
  header: {
    textAlign: "center",
    fontStyle: "italic",
    fontSize: 20,
    backgroundColor: "#fff",
    color: "	#AA336A",
    fontWeight: "bold",
  },
});
