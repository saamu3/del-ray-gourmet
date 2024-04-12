export type TAppetizers = {
  title: string;
  data: {
    name: string;
    image?: string;
    price: string;
    description?: string;
    para?: string;
  }[];
};

export const DATA: TAppetizers[] = [
  {
    title: "APPETIZERS",
    data: [
      {
        name: "DAY BOAT SCALLOPS",
        price: "$14",
        description: "fennel, prosciutto, black bean sauce",
        para: "Dietary Information",
      },
      {
        name: "DEVILS ON HORSEBACK",
        image: require("../assets/new.webp"),
        price: "$12",
        description:
          "bacon wrapped dates stuffed with feta, balsamic reduction",
        para: "~ extra bacon $3",
      },
    ],
  },
];
