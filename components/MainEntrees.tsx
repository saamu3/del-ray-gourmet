import { View } from "react-native";
import { Entrees } from "../StaticData/MainEntreesData";
import Section from "./Section";
export default function MainEntrees(): React.JSX.Element {
  return (
    <View style={{ marginTop: 40 }}>
      <Section Data={Entrees} />
    </View>
  );
}
