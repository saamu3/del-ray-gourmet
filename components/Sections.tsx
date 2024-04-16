import {
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { TMenuItems } from "../_Types_/StaticDataType";
import SectionList from "react-native-tabs-section-list/lib/SectionList";
export default function Sections({
  Data,
}: {
  Data: TMenuItems[];
}): React.JSX.Element {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.container}>
      <SectionList
        sections={Data}
        keyExtractor={(item) => item.title}
        stickySectionHeadersEnabled={false}
        scrollToLocationOffset={10}
        tabBarStyle={styles.tabBar}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        SectionSeparatorComponent={() => (
          <View style={styles.sectionSeparator} />
        )}
        renderTab={({ title, isActive }) => (
          <View
            style={[
              styles.tabContainer,
              { borderBottomWidth: isActive ? 2 : 0 },
            ]}
          >
            <Text
              style={[
                styles.tabText,
                { color: isActive ? "rgb(248, 113, 113)" : "black" },
              ]}
            >
              {title}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item.image && (
              <Image
                testID="Appetizers"
                source={item.image}
                style={[
                  styles.image,
                  {
                    height: windowHeight > 700 ? "100%" : "50%",
                    width: windowWidth > 500 ? "70%" : "50%",
                  },
                ]}
                resizeMode="cover"
              />
            )}
            {item.sticker && (
              <Image
                style={styles.sticker}
                source={item.sticker}
                testID="sticker"
              />
            )}

            <View style={{ flexShrink: 1 }}>
              <Text style={styles.itemName}>{item.name}</Text>
              {item.description && (
                <Text style={styles.description}>{item.description}</Text>
              )}
              {item.additional_information && (
                <Text style={styles.additional_information}>
                  {item.additional_information}
                </Text>
              )}
              <Text style={styles.additional_items}>
                {item.additional_items}
              </Text>
            </View>
            <View>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  tabBar: {
    backgroundColor: "#fff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: "rgb(248, 113, 113)",
  },
  tabText: {
    padding: 15,
    fontSize: 15,
    fontWeight: "500",
  },
  itemSeparator: {
    height: 0.5,
    width: "96%",
  },
  sectionSeparator: {
    marginBottom: 5,
    height: 0.5,
    width: "96%",
    alignSelf: "flex-start",
    backgroundColor: "",
    marginVertical: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  image: {
    marginTop: 5,
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
  additional_information: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    fontSize: 10,
    color: "rgb(107 114 128)",
  },
  additional_items: { fontSize: 10, color: "rgb(107 114 128)" },
  price: { fontSize: 15, color: "rgb(133 77 14)" },
  header: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "serif",
    fontSize: 20,
    color: "rgb(248, 113, 113)",
    fontWeight: "bold",
  },
});
