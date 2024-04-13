import { View } from "react-native";
import { DATA } from "../StaticData/AppetizersData";
import Section from "./Section";

export default function Appetizers(): React.JSX.Element {
  return (
    <View style={{ marginTop: 40 }}>
      <Section Data={DATA} />
    </View>
  );
}
