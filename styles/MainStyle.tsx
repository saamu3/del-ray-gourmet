import { StyleSheet } from "react-native";

export default StyleSheet.create({
  innerContainer: {
    height: 50,
    backgroundColor: "rgb(248 113 113)",
    justifyContent: "center",
    alignItems: "center",
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
