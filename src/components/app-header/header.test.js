import { Header } from "./header";
import { mount } from "enzyme";
import React from "react";
import { reduxify, withRoutes } from "../../utils/testUtil";

const props = {
    setId: jest.fn(),
}

describe('Header', () => {
    it('shoud render Header component with dialog component form', () => {
        const wrapper = mount(withRoutes(reduxify(<Header {...props} />)));
        expect(wrapper.find("WithStyles(ForwardRef(Drawer))").length).toEqual(2);
        expect(wrapper.find("WithStyles(ForwardRef(AppBar))").length).toEqual(1);
    })
})