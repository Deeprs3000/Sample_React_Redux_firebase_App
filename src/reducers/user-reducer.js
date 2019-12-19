import { usersConstants } from "../utils/constants";

const initalState = {
    isLoading: false,
    isError: false,
    users: []
}


export function userReducer(state = initalState, action) {
    const { payload, type } = action;
    switch (type) {
        case usersConstants.ADD_USER_REQUEST:
        case usersConstants.DELETE_USER_REQUEST:
        case usersConstants.EDIT_USER_REQUEST:
        case usersConstants.INIT_LOAD:
            return { ...state, isLoading: true, isError: false }
        case usersConstants.FETCH_USER_SUCCESS:
            return { ...state, isError: false, isLoading: false, users: Object.values(payload||{}) }
        case usersConstants.FAILURE:
            return { ...state, isError: true, isLoading: false }
        default:
            return state
    }
}