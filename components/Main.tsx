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
};

export default function Main():React.JSX.Element {
  return (
    <View>
      <StatusBar hidden />
      <View style={styles.innerContainer}>
        <Text style={styles.text}>
          <FontAwesomeIcon style={styles.text} icon={faCircleExclamation} />
          WE ARE NOW OPEN FOR INDOOR DINING!
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <ImageBackground
          testID="background"
          source={require("../assets/background.webp")}
          style={styles.imageBackground}
        >
          <View style={styles.align}>
            <Image source={img1} style={styles.image} />
            <View style={styles.address}>
              <Text style={styles.heading}>Del Ray Gourmet</Text>
              <Text style={styles.timings}>
                Open • Closes 10:00 PM
                <FontAwesomeIcon style={styles.text} icon={faAngleDown} />
              </Text>
              <Text style={styles.place}>
                123 Ave of the Roosters, Derwood MD
              </Text>
              <Text style={styles.telephoneNumber}>
                <FontAwesomeIcon style={styles.text} icon={faPhone} />
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
  innerContainer: {
    height: 50,
    width: 360,
    backgroundColor: "rgb(248 113 113)",
    paddingLeft: 40,
    paddingTop: 14,
  },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  imageBackground: {
    width: 400,
    height: 200,
    opacity: 0.9,
  },
  align: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: { height: 60, width: 120, marginTop: 90, marginLeft: 30 },
  heading: { color: "white", fontSize: 25, fontWeight: "bold" },
  timings: { color: "white", fontSize: 17, fontWeight: "bold" },
  place: { color: "white", fontSize: 12, fontWeight: "bold" },
  telephoneNumber: { color: "white", fontSize: 15, fontWeight: "bold" },
  text: { color: "white" },
  address: { marginTop: 50, marginRight: 30, flexShrink: 1 },
});
