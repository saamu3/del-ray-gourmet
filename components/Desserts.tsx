import { View } from "react-native";
import { DessertsData } from "../StaticData/DessertsData";
import Section from "./Section";
export default function Desserts(): React.JSX.Element {
  return (
    <View style={{ marginTop: 40 }}>
      <Section Data={DessertsData} />
    </View>
  );
}
