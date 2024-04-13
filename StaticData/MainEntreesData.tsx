import { TMenuItems } from "../_Types_/StaticDataType";

export const Entrees: TMenuItems[] = [
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
];
