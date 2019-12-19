import { usersConstants } from "../utils/constants";
import { database, dataBaseName } from '../utils/Firebase';

function addUser(payload) {
    return function (dispatch) {
        dispatch({ type: usersConstants.ADD_USER_REQUEST });
        database.ref(`${dataBaseName}/${payload.id}`).set(payload)
    }
}

function deleteUser(id) {
    return function (dispatch) {
        dispatch({ type: usersConstants.DELETE_USER_REQUEST });
        database.ref(`${dataBaseName}/${id}`).remove();
    }
}

function editUser(payload) {
    return function (dispatch) {
        dispatch({ type: usersConstants.EDIT_USER_REQUEST });
        database.ref(`${dataBaseName}/${payload.id}`).update({ ...payload });
    }
}

function fetchUser() {
    return function (dispatch) {
        dispatch({type:usersConstants.INIT_LOAD})
        database.ref(dataBaseName).on("value", snapshot => {
            dispatch({
                type: usersConstants.FETCH_USER_SUCCESS,
                payload: snapshot.val()
            });
        });
    }
}

export default { addUser, deleteUser, editUser, fetchUser }