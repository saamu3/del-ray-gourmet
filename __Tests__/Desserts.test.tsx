import React from "react";
import Desserts from "../components/Desserts";
import { render, screen} from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';

describe("should render the MainEntrees component",()=>{
    test("should check the image is present otr not",()=>{
        render(<Desserts/>)
        const view = screen.getByTestId("image4")
        screen.debug()
        expect(view).toBeOnTheScreen();
    })
})