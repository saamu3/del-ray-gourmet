import { View } from "react-native";
import { useState } from "react";
import { SelectList } from "react-native-dropdown-select-list";
export default function Select() {
  const [selected, setSelected] = useState("");
  const data = [
    { key: "1", value: "Dinner Menu" },
    { key: "2", value: "Happy Hour Menu" },
    { key: "3", value: "Lunch Specials" },
  ];
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            justifyContent: "center",
            height: 200,
            width: 340,
          }}
        >
          <SelectList
            setSelected={(val:any) => setSelected(val)}
            data={data}
            placeholder="Dinner Menu"
            search={false}
          />
        </View>
    </View>
  );
}
