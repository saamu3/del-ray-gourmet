import { TMenuItems } from "../_Types_/StaticDataType";
export const SectionsData: TMenuItems[] = [
  {
    title: "APPETIZERS",
    data: [
      {
        name: "DAY BOAT SCALLOPS",
        price: "$14",
        description: "fennel, prosciutto, black bean sauce",
        additional_information: "Dietary Information",
      },
      {
        name: "DEVILS ON HORSEBACK",
        sticker: require("../assets/New.jpg"),
        price: "$12",
        description:
          "bacon wrapped dates stuffed with feta, balsamic reduction",
        additional_items: "~ extra bacon $3",
      },
    ],
  },
  {
    title: "MAIN ENTRÉES",
    data: [
      {
        name: "GRILLED FAROE ISLAND SALMON",
        image: require("../assets/Salmon.jpg"),
        price: "$26",
        description: "quinoa, oyster mushrooms, brussels sprout leaves",
      },
      {
        name: "PAN ROASTED DUCK BREAST",
        price: "$29",
        description: "herbed farro, orange-frisée salad, honey gastrique",
      },
      {
        name: "CRISPY DUCK IN PORT CHERRY SAUCE",
        price: "$36",
        description:
          "roasted turnips, parsnips, rutabaga and carrots with cornmeal, johnnycake wrapped duck confit, bok choy",
      },
      {
        name: "CASSOULET",
        image: require("../assets/Cassoulet.jpg"),
        price: "$19",
        description: "garlic and herb sausage, duck confit, cannellini beans",
      },
      {
        name: "TENDERLOIN OF BEEF WELLINGTON",
        price: "$48",
        description: "foie gras, spinach, duxelles",
        additional_items:
          "~ Add Bearnaise, Red Wine, or Bordelaise sauce for $2 extra",
      },
      {
        name: "HERB ROASTED PORK",
        price: "$28",
        description:
          "with Creamy Polenta, Sun-Dried Tomato Jus & Feta Gremolata",
      },
      {
        name: "CLASSIC NEW YORK SIRLOIN",
        price: "$26",
        additional_items:
          "~ Add Jumbo Gulf Shrimp with garlic, white wine, lemon for $9",
      },
      {
        name: "IDAHO RED TROUT",
        price: "$25",
        description: "green lentils, chanterelle mushrooms, Waldoboro turnip",
      },
    ],
  },
  {
    title: "DESSERTS",
    data: [
      {
        name: "TRES LECHES CAKE",
        // image: require(" "),
        price: "$9",
        description:
          "Strawberry compote, strawberry balsamicquinoa, oyster mushrooms, brussels sprout leaves",
        additional_items:
          "~ Jorge Ordonez & Co. Victoria 2 - Málaga, Spain $10.00 glass",
      },
      {
        name: "KEY LIME PUDDING",
        price: "$8",
        description: "herbed farro, orange-frisée salad, honey gastrique",
        additional_information: "Dietary Information",
      },
      {
        name: "HOUSE MADE ICE CREAM",
        image: require("../assets/Icecream.jpg"),
        price: "$9",
        description: "Blood orange sherbet",
      },
      {
        name: "CARROT CAKE",
        price: "$6",
        description:
          "Made with carrot, pineapple, coconuts, and raisins, with cream cheese frosting",
      },
      {
        name: "BERRY NAPOLEON",
        price: "$7",
        description:
          "Fresh mixed berries served in a white chocolate meringue basket with a passion fruit anglaise",
      },
      {
        name: "KEY LIME PIE",
        price: "$8",
        description:
          "Coconut semifreddo, raspberry whipped crème fraîche, honey tuile & raspberry reduction",
      },
    ],
  },
];
