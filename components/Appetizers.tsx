import { View, Text, Image } from "react-native";
import { DATA } from "../StaticData/AppetizersData";
import { SectionList, StyleSheet } from "react-native";

export default function Appetizers(): React.JSX.Element {
  return (
    <View style={{ marginTop: 40 }}>
      <SectionList
        sections={DATA}
        keyExtractor={(item: any, index: number) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            {item.image && (
              <Image
                testID="Appetizers"
                source={item.image}
                style={styles.image}
              />
            )}
            <View style={{ flexShrink: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
              <Text style={styles.para}>{item.para}</Text>
            </View>
            <View>
              <Text style={styles.price}>{item.price}</Text>
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
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 130,
    width: 340,
    padding: 20,
    marginVertical: 8,
  },
  image: { height: 10, width: 20, marginTop: 10 },
  itemName: {
    fontSize: 18,
    color: "rgb(133 77 14)",
    fontFamily: "serif",
  },
  description: {
    fontSize: 12,
    color: "black",
    fontStyle: "italic",
    fontFamily: "serif",
  },
  para: { fontSize: 10, color: "rgb(107 114 128)" },
  price: { fontSize: 15, color: "rgb(133 77 14)" },
  header: {
    textAlign: "center",
    fontFamily: "serif",
    fontSize: 20,
    color: "rgb(248, 113, 113)",
    fontWeight: "bold",
  },
});
