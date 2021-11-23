import {
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
    GET_USER
} from './userTypes'

export const getUsers = () => {
    return {
        type: GET_USER
    }
}

export const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        payload: user
    }
}

export const deleteUser = (user) => {
    return {
        type: DELETE_USER,
        payload: user
    }
}