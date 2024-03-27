import { View, Text, StyleSheet,Pressable } from "react-native";
type TState = {
  visible:boolean,setIsVisible:React.Dispatch<React.SetStateAction<boolean>>
}
export default function Navbar() {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textContainer}>Appetizers</Text>
      <Text style={styles.textContainer}>Main Entrees</Text>
      <Text style={styles.textContainer}>Desserts</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
    display: "flex",
    flexDirection: "row",
    height: 40,
    width: 340,
    borderColor: "grey",
    borderWidth: 1,
    gap: 40,
    marginVertical: 20,
    padding: 10,
  },
  //   shadow:{
  //     shadowColor: '#000',
  //     shadowOffset: { width: 0, height: 1 },
  //     shadowOpacity: 0.8,
  //     shadowRadius: 2,
  //     elevation: 5
  //   },
  textContainer: {
    fontWeight: "600",
  },
});
