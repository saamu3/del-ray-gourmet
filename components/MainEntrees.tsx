import { View, Text, SectionList, StyleSheet, Image } from "react-native";
import { Entrees } from "../StaticData/MainEntreesData";
export default function MainEntrees(): React.JSX.Element {
  return (
    <View style={{ marginTop: 40 }}>
      <SectionList
        sections={Entrees}
        keyExtractor={(item: any, index: number) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            <View style={{ width: 300 }}>
              <View style={styles.align}>
                <View>
                  {item.image && (
                    <Image
                      testID="image3"
                      source={item.image}
                      style={styles.image}
                    />
                  )}
                </View>
                <View style={{ flexShrink: 1 }}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  {item.description && (
                    <Text style={styles.description}>{item.description}</Text>
                  )}

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
    padding: 20,
  },
  align: { display: "flex", flexDirection: "row" },
  image: {
    height: 90,
    width: 140,
    marginTop: 6,
    marginRight: 15,
    borderRadius: 5,
  },
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
