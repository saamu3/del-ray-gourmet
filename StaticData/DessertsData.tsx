import { TMenuItems } from "../_Types_/StaticDataType";
export const DessertsData: TMenuItems[] = [
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
