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
type TState = {
  visible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
};
const img1 = {
  uri: "https://qr.imenupro.com/cdn-cgi/image/width=320,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-logo.webp?v=231233669",
};
const image = {
  uri: "https://cdn-az.allevents.in/events5/banners/7d2aa1f19c32b002feb93c0a2a8502388c910aea17b6e438ec41f221d2be3e5c-rimg-w1200-h675-gmir.jpg?v=1709791272",
};
export default function Main() {
  return (
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
        <ImageBackground
          source={image}
          style={{
            width: 400,
            height: 400,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Image
              source={img1}
              style={{ height: 100, width: 180, marginTop: 70 }}
            />
            <View style={styles.address}>
              <Text
                style={{ color: "white", fontSize: 25, fontWeight: "bold" }}
              >
                Del Ray Gourmet
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Open • Closes 10:00 PM
                <FontAwesomeIcon
                  style={{ color: "white" }}
                  icon={faAngleDown}
                />
              </Text>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
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
  container: { flex: 1, backgroundColor: "skyblue" },
  innerContainer: {
    height: 50,
    width: 360,
    backgroundColor: "darkred",
    paddingLeft: 40,
    paddingTop: 7,
  },
  text: { color: "white" },
  address: { marginTop: 10, marginRight: 40, gap: 5 },
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
