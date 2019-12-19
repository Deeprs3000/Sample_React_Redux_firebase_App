import React from "react";
import UserDetails from "./user-details";
import { mount } from "enzyme";
import { reduxify } from "../../utils/testUtil";


const props = {
    user: {
        id: '123',
        name: 'test',
        date: new Date().toDateString(),
        email: 'test@testmail.com',
        contact: '1234567890',
        address: 'dfkofwofkfjkerjfjk'
    }
}

describe('user-details', () => {
    it('shoud render userDetails component', () => {
        const wrapper = mount(reduxify(<UserDetails {...props} />));
        expect(wrapper.find("img").length).toEqual(1);
    })
})