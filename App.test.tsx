import { render, screen } from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';
import React from "react";
import App from "./App";

describe("should render the MainEntrees component",()=>{
    test("should check the image is present otr not",()=>{
        render(<App/>)
        const back = screen.getByTestId("background")
        screen.debug()
        expect(back).toBeOnTheScreen()
    })
})