import { View,Text } from "react-native";
import { DATA } from "../StaticData.js/AppetizersData";
import { SectionList,StyleSheet} from "react-native";

export default function Section(){
    return(
        <View style={{marginTop:40}}>
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
    )
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
      color: "	#AA336A",
      fontWeight: "bold",
    },
  });
  