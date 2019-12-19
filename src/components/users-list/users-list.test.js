import React from "react";
import UsersLists from "./users-list";
import { mount } from "enzyme";
import { reduxify, withRoutes } from "../../utils/testUtil";
import * as reactRedux from "react-redux";

const props = {
    setId: jest.fn()
}

describe('user-lists', () => {
    it('shoud render UsersLists component with InfoIcon and Fab when there is no user', () => {
        reactRedux.useSelector = jest.fn().mockImplementation(() => ({
            isLoading: false,
            users: []
        }));
        const wrapper = mount(withRoutes(reduxify(<UsersLists {...props} />)));
        expect(wrapper.find("InfoIcon").length).toEqual(1);
    });

    it('shoud render UsersLists component with List when user is present', () => {
        reactRedux.useSelector = jest.fn().mockImplementation(() => ({
            isLoading: false,
            users: [{ id: '1', name: 'testname' }]
        }));
        const wrapper = mount(withRoutes(reduxify(<UsersLists {...props} />)));
        expect(wrapper.find("WithStyles(ForwardRef(List))").length).toEqual(1);
    });
})