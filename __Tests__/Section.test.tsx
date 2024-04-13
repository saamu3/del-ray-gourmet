import { render, screen } from "@testing-library/react-native";
import Section from "../components/Section";
import { SectionList } from "react-native";
const mockData = [
  {
    title: "dishes",
    data: [
      {
        name: "soumya",
        price: "$4",
        description: "bread omelete",
        additional_information: "cool drinks,sprite, mazza",
      },
      {
        name: "DEVILS",
        sticker: require("../assets/New.jpg"),
        price: "$12",
        description:
          "bacon wrapped dates stuffed with feta, balsamic reduction",
        additional_items: "~ extra bacon $3",
      },
      {
        name: "CASSOULET",
        image: require("../assets/Cassoulet.jpg"),
        price: "$19",
        description: "garlic and herb sausage, duck confit, cannellini beans",
      },
    ],
  },
];
describe("Testing SectionList", () => {
  test("should render the all items", () => {
    const component = render(<Section Data={mockData} />);
    screen.debug();
    const sectionlist = component.UNSAFE_getAllByType(SectionList);
    expect(sectionlist.length).toBe(1);
  });
});
