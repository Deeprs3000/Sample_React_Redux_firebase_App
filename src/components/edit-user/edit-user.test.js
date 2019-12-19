import React from "react";
import EditUser from "./edit-user";
import { mount } from "enzyme";
import { reduxify } from "../../utils/testUtil";


const props = {
    toggleAddView: jest.fn(),
    toggleEdit: jest.fn(),
    user: {
        id: '123',
        name: 'test',
        date: new Date().toDateString(),
        email: 'test@testmail.com',
        contact: '1234567890',
        address: 'dfkofwofkfjkerjfjk'
    }
}

describe('edit-users', () => {
    it('shoud render addUser component with Formik component form', () => {
        const wrapper = mount(reduxify(<EditUser {...props} />));
        expect(wrapper.find("Formik").length).toEqual(1);
    })
})