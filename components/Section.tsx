import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function Section({ Data }: any) {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View>
      <SectionList
        sections={Data}
        keyExtractor={(item: any, index: number) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            {item.image && (
              <Image
                testID="Appetizers"
                source={item.image}
                style={[
                  styles.image,
                  {
                    height: windowHeight > 700 ? "90%" : "40%",
                    width: windowWidth > 500 ? "40%" : "60%",
                  },
                ]}
              />
            )}
            {item.sticker && (
              <Image style={styles.sticker} source={item.sticker} />
            )}

            <View style={{ flexShrink: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              {item.description && (
                <Text style={styles.description}>{item.description}</Text>
              )}
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
    padding: 20,
  },
  image: {
    marginTop: 6,
    marginRight: 10,
    borderRadius: 5,
    flexShrink: 1,
  },
  align: { display: "flex", flexDirection: "row", flexShrink: 1 },

  sticker: { height: 10, width: 20, marginTop: 10 },
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
