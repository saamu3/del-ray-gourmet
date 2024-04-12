import React from "react";
import Appetizers from "../components/Appetizers";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";

describe("should render Section component ", () => {
  test("should check the image is present or not", () => {
    render(<Appetizers />);
    const image = screen.getByTestId("Appetizers");
    expect(image).toBeOnTheScreen();
  });
});
