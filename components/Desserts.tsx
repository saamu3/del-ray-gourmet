import { View, Text, StyleSheet, SectionList, Image } from "react-native";
import { DessertsData } from "../StaticData.js/DessertsData";
export default function Desserts() {
  return (
    <View style={{ marginTop: 40 }}>
      <SectionList
        sections={DessertsData}
        keyExtractor={(item: any, index: any) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            <View style={styles.innerContainer}>
              <View style={styles.align}>
                <View>
                  {item.image && (
                    <Image
                      testID="image4"
                      source={item.image}
                      style={styles.image}
                    />
                  )}
                </View>
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={item.description}>{item.description}</Text>
                  <Text style={styles.para}>{item.para}</Text>
                </View>
              </View>
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
    height: 100,
    width: 340,
    padding: 20,
    marginVertical: 8,
  },
  innerContainer: {
    height: 100,
    width: 300,
  },
  align: {
    height: 100,
    width: 300,
  },
  image: {
    height: 90,
    width: 140,
    marginTop: 6,
    marginRight: 5,
    borderRadius: 5,
  },
  itemName: {
    fontSize: 18,
    color: "rgb(133 77 14)",
    fontFamily: "serif",
  },
  description: {
    fontSize: 12,
    color: "firebrick",
    fontStyle: "italic",
    fontFamily: "serif",
    flexShrink: 1,
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
