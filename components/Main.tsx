import {
  faAngleDown,
  faCircleExclamation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Image, ImageBackground, StatusBar, Text, View } from "react-native";
import style from "../styles/MainStyle";
const Del_Ray_gourmet_logo = {
  uri: "https://qr.imenupro.com/cdn-cgi/image/width=320,format=auto,fit=scale-down/https://s3.imenupro.com/imp_oznkrLNkQdF9J3/4m-h9-qr2-logo.webp?v=231233669",
};

export default function Main(): React.JSX.Element {
  return (
    <View>
      <StatusBar hidden />
      <View style={style.innerContainer}>
        <Text style={style.text}>
          <FontAwesomeIcon style={style.text} icon={faCircleExclamation} />
          WE ARE NOW OPEN FOR INDOOR DINING!
        </Text>
      </View>
      <View style={style.imageContainer}>
        <ImageBackground
          testID="background"
          source={require("../assets/Background.jpg")}
          style={style.imageBackground}
          resizeMode="cover"
        >
          <View style={style.container}>
            <Image source={Del_Ray_gourmet_logo} style={style.image} />
            <View style={style.address}>
              <Text style={style.heading}>Del Ray Gourmet</Text>
              <Text style={style.timings}>
                <Text style={style.open}>Open • </Text>Closes 9:00 PM
                <FontAwesomeIcon style={style.text} icon={faAngleDown} />
              </Text>
              <Text style={style.place}>
                123 Ave of the Roosters, Derwood MD
              </Text>
              <Text style={style.telephoneNumber}>
                <FontAwesomeIcon style={style.text} icon={faPhone} />
                Tel: 301-555-1212
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}
