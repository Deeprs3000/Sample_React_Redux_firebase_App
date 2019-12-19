import React from "react";
import AddUser from "./add-user";
import { mount } from "enzyme";
import { reduxify } from "../../utils/testUtil";


const props = {
    toggleAddView: jest.fn(),
}

describe('add-users', () => {
    it('shoud render addUser component with Formik component form', () => {
        const wrapper = mount(reduxify(<AddUser {...props} />));
        expect(wrapper.find("Formik").length).toEqual(1);
    })
})