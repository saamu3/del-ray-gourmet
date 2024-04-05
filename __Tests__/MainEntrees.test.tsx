import React from "react";
import MainEntrees from "../components/MainEntrees";
import { render, screen} from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';

describe("should render the MainEntrees component",()=>{
    test("should check the image is present otr not",()=>{
        render(<MainEntrees/>)
        const view = screen.getByTestId("image3")
        screen.debug()
        expect(view).toBeOnTheScreen();
    })
})