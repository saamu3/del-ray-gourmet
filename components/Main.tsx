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
  ImageBackground,
} from "react-native";
const img1 = {
  uri: "https://qr.imenupro.com/cdn-cgi/image/width=320,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-logo.webp?v=231233669",
}

export default function Main() {
  return (
    <View >
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
        <ImageBackground
          source={require("../assets/background.webp")}
          style={{
            width: 400,
            height: 200,
            opacity:0.9
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={img1}
              style={{ height: 60, width: 120, marginTop: 90,marginLeft:30 }}
            />
            <View style={styles.address}>
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                Del Ray Gourmet
              </Text>
              <Text
                style={{ color: "white", fontSize: 17, fontWeight: "bold" }}
              >
                Open • Closes 10:00 PM
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faAngleDown}
                />
              </Text>
              <Text
                style={{ color: "white", fontSize: 12, fontWeight: "bold" }}
              >
                123 Ave of the Roosters, Derwood MD
              </Text>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                <FontAwesomeIcon style={{ color: "white" }} icon={faPhone} />
                Tel: 301-555-1212
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {backgroundColor: "skyblue" },
  innerContainer: {
    height: 50,
    width: 360,
    backgroundColor: "rgb(248 113 113)",
    paddingLeft: 40,
    paddingTop: 14,
  },
  text: { color: "white" },
  address: { marginTop: 50, marginRight: 30,flexShrink:1 },
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
