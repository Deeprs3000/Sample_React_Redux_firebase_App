import { UserView } from "./user-view";
import { mount } from "enzyme";
import React from "react";
import { reduxify, withRoutes } from "../../utils/testUtil";

describe('Header', () => {
    it('shoud render Header component with dialog component form', () => {
        const wrapper = mount(withRoutes(reduxify(<UserView />)));
        expect(wrapper.find("WithStyles(UserDetails)").length).toEqual(1);
        expect(wrapper.find("WithStyles(ForwardRef(Fab))").length).toEqual(1);
    })
})