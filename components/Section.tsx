import { View, Text, Image } from "react-native";
import { DATA } from "../StaticData.js/AppetizersData";
import { SectionList, StyleSheet } from "react-native";

export default function Section() {
  return (
    <View style={{ marginTop: 40 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item: any, index: any) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            {item.image && (
              <Image
                source={item.image}
                style={{ height: 10, width: 20, marginTop: 10 }}
              />
            )}
            <View>
              <Text style={{ fontSize: 18, color: "maroon" }}>{item.name}</Text>
              <Text
                style={{
                  fontSize: 12,
                  color: "firebrick",
                  fontStyle: "italic",
                }}
              >
                {item.description}
              </Text>
              <Text style={{ fontSize: 10, color: "tomato" }}>{item.para}</Text>
            </View>
            <View>
              <Text style={{ fontSize: 15, color: "firebrick" }}>
                {item.price}
              </Text>
            </View>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  innerContainer: {
    height: 30,
    width: 360,
    //  backgroundColor: "pink",
    paddingLeft: 40,
    paddingTop: 5,
  },
  text: { color: "white" },
  address: { position: "absolute", color: "white" },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 130,
    width: 340,
    //   backgroundColor: "#f9c2ff",
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
    color: "maroon",
    fontWeight: "bold",
  },
});
