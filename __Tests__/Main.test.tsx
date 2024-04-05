import React from "react";
import Main from "../components/Main";
import { render, screen} from "@testing-library/react-native";
import '@testing-library/react-native/extend-expect';

describe("<Main />", () => {
    test("should render ImageBackground component", () => {
    render(<Main />);
    const image = screen.getByTestId("background");
    screen.debug()
    expect(image).toBeDefined()
    });

    test("should check text content is present on the image",()=>{
        render(<Main/>)
        const text = screen.getAllByText("Del Ray Gourmet")
        expect(text).toBeDefined()
    })
});


