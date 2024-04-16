import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //main component
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

  //section component
  sectionContainer: {
    flex: 1,
    backgroundColor: "#f6f6f6",
  },
  tabBar: {
    backgroundColor: "#fff",
    borderBottomColor: "#f4f4f4",
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: "rgb(248, 113, 113)",
  },
  tabText: {
    padding: 15,
    fontSize: 15,
    fontWeight: "500",
  },
  itemSeparator: {
    height: 0.5,
    width: "96%",
  },
  sectionSeparator: {
    marginBottom: 5,
    height: 0.5,
    width: "96%",
    alignSelf: "flex-start",
    backgroundColor: "",
    marginVertical: 10,
  },
  item: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  itemImage: {
    marginTop: 5,
    marginRight: 10,
    borderRadius: 5,
    flexShrink: 1,
  },
  align: { display: "flex", flexDirection: "row", flexShrink: 1 },
  sticker: { height: 10, width: 20, marginTop: 10 },
  itemName: {
    fontSize: 18,
    color: "rgb(133 77 14)",
    fontFamily: "serif",
  },
  description: {
    fontSize: 12,
    color: "black",
    fontStyle: "italic",
    fontFamily: "serif",
  },
  additional_information: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000",
    fontSize: 10,
    color: "rgb(107 114 128)",
  },
  additional_items: { fontSize: 10, color: "rgb(107 114 128)" },
  price: { fontSize: 15, color: "rgb(133 77 14)" },
  header: {
    marginTop: 20,
    textAlign: "center",
    fontFamily: "serif",
    fontSize: 20,
    color: "rgb(248, 113, 113)",
    fontWeight: "bold",
  },
});
