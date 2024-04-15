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

const Del_Ray_gourmet_logo = {
  uri: "https://qr.imenupro.com/cdn-cgi/image/width=320,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-logo.webp?v=231233669",
};

export default function Main(): React.JSX.Element {
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
          source={require("../assets/Background.jpg")}
          style={styles.imageBackground}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <Image source={Del_Ray_gourmet_logo} style={styles.image} />
            <View style={styles.address}>
              <Text style={styles.heading}>Del Ray Gourmet</Text>
              <Text style={styles.timings}>
                <Text style={styles.open}>Open • </Text>Closes 9:00 PM
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
    // width: 360,
    backgroundColor: "rgb(248 113 113)",
    justifyContent:"center",
    alignItems:"center",
    // paddingLeft: 40,
    // paddingTop: 1,
  },
  imageContainer: { justifyContent: "center", alignItems: "center" },
  imageBackground: {
    width: "100%",
    height: 200,
    opacity: 0.99,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  image: { height: 50, width: 80, marginTop: 90, marginLeft: 20 },
  heading: { color: "rgb(255 255 255)", fontSize: 20, fontWeight: "bold" },
  timings: { color: "white", fontSize: 13, fontWeight: "500" },
  open: { color: "white", fontSize: 18, fontWeight: "bold" },
  place: { color: "white", fontSize: 12, fontWeight: "400" },
  telephoneNumber: { color: "white", fontSize: 15, fontWeight: "400" },
  text: { color: "white" },
  address: { marginTop: 70, marginRight: 95, flexShrink: 1 },
});
