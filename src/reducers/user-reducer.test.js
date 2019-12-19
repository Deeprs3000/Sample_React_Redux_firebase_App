import { usersConstants } from "../utils/constants";
import { userReducer } from "./user-reducer";

describe('user-reducer', () => {
    it('userReducer should set isLoading  to true when INIT_LOAD', () => {
        const action = { type: usersConstants.INIT_LOAD };
        expect(userReducer(undefined, action)).toEqual({
            isLoading: true,
            isError: false,
            users: []
        });
    });

    it('userReducer should set isLoading to false and isError to true  when FAILURE', () => {
        const action = { type: usersConstants.FAILURE };
        expect(userReducer(undefined, action)).toEqual({
            isLoading: false,
            isError: true,
            users: []
        });
    });

    it('userReducer should set user  when FETCH_USER_SUCCESS', () => {
        const action = {
            type: usersConstants.FETCH_USER_SUCCESS,
            payload: {
                "2": { id: "2", name: "somename" }
            }
        };
        expect(userReducer(undefined, action)).toEqual({
            isLoading: false,
            isError: false,
            users: [{ id: "2", name: "somename" }]
        });

    });
})