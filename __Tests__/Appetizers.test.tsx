import React from "react";
import Appetizers from "../components/Appetizers";
import { render, screen } from "@testing-library/react-native";
import "@testing-library/react-native/extend-expect";

describe("should render appetizers component ", () => {
  test("should check the sticker is present or not", () => {
    render(<Appetizers />);
    const image = screen.getByTestId("sticker")
    screen.debug()
    expect(image).toBeOnTheScreen();
  });
});
