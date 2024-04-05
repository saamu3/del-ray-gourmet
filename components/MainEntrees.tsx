import { View, Text, SectionList, StyleSheet, Image } from "react-native";
import { Entrees } from "../StaticData.js/MainEntreesData";
export default function MainEntrees() {
  return (
    <View  style={{ marginTop: 40 }}>
      <SectionList
        sections={Entrees}
        keyExtractor={(item: any, index: any) => item + index}
        renderItem={({ item }: any) => (
          <View style={styles.item}>
            <View
              style={{
                // height: 100,
                width: 300,
                // borderColor: "grey",
                // borderWidth: 2,
              }}
            >
              <View style={{ display: "flex", flexDirection: "row" }}>
                <View>
                  {item.image && (
                    <Image
                      testID="image3"
                      source={item.image}
                      style={{
                        height: 90,
                        width: 140,
                        marginTop: 6,
                        marginRight: 15,
                        borderRadius: 5,
                      }}
                    />
                  )}
                </View>
                <View style={{ flexShrink: 1 }}>
                  <Text style={{ fontSize: 18, color:"rgb(133 77 14)",fontFamily:"serif" }}>
                    {item.name}
                  </Text>
                  {item.description && (
                    <Text
                      style={{
                        fontSize: 12,
                        color: "firebrick",
                        fontStyle: "italic",
                        fontFamily:"serif",
                        flexShrink: 1,
                      }}
                    >
                      {item.description}
                    </Text>
                  )}

                  <Text style={{ fontSize: 10, color: "rgb(107 114 128)" }}>
                    {item.para}
                  </Text>
                </View>
              </View>
            </View>

            <View>
              <Text style={{ fontSize: 15, color:"rgb(133 77 14)" }}>
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
    // alignItems:"center",
    //  height: 100,
    // width: 340,
    // backgroundColor: "#f9c2ff",
    padding: 20,
    // marginVertical: 4,
  },
  title: {
    fontSize: 10,
    color: "blue",
  },
  header: {
    textAlign: "center",
    // fontStyle: "italic",
    fontFamily:"serif",
    fontSize: 20,
    color: "rgb(248, 113, 113)",
    fontWeight: "bold",
  },
});
