import React from "react";
import Section from "../components/Section";
import { render, screen} from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';

describe("should render Section component ",()=>{
    test("should check the image is present or not",()=>{
       render(<Section/>)
       const image = screen.getByTestId("image1")
       expect(image).toBeOnTheScreen()
    })
})