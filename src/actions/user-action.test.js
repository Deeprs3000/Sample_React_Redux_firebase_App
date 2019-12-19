import { usersConstants } from "../utils/constants";
import userAction from "./user-action";

jest.mock("../utils/Firebase", () => ({
    database: {
        ref: jest.fn().mockImplementation(() => ({
            set: jest.fn(),
            remove: jest.fn(),
            update: jest.fn()
        }))
    },
    dataBaseName: 'TEST'
}))

describe("user-action", () => {
    it('should return proper action for addUser', () => {
        const dispatch = jest.fn();
        const payload = { data: '123' }
        userAction.addUser(payload)(dispatch);
        expect(dispatch).toBeCalledWith({ type: usersConstants.ADD_USER_REQUEST });
    });

    it('should return proper action for deleteUser', () => {
        const dispatch = jest.fn();
        const id = "123"
        userAction.deleteUser(id)(dispatch);
        expect(dispatch).toBeCalledWith({ type: usersConstants.DELETE_USER_REQUEST });
    });

    it('should return proper action for editUser', () => {
        const dispatch = jest.fn();
        const payload = { id: '123' }
        userAction.editUser(payload)(dispatch);
        expect(dispatch).toBeCalledWith({ type: usersConstants.EDIT_USER_REQUEST });
    })

})