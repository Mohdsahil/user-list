import axios from "axios"
import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    ADD_USER_REQUEST,
    ADD_USER_SUCCESS,
    ADD_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from "./userTypes"
import { API } from "../../api"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    } 
}
export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: users
    } 
}
export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USERS_REQUEST,
        payload: error
    } 
}
export const addUserRequest = () => {
    return {
        type: ADD_USERS_REQUEST
    } 
}
export const addUserSuccess = (success) => {
    return {
        type: ADD_USERS_REQUEST,
        payload: success
    } 
}
export const addUserFailure = (error) => {
    return {
        type: ADD_USERS_REQUEST,
        payload: error
    } 
}
export const deleteUserRequest = () => {
    return {
        type: ADD_USERS_REQUEST
    } 
}
export const deleteUserSuccess = (success) => {
    return {
        type: ADD_USERS_REQUEST,
        payload: success
    } 
}
export const deleteUserFailure = (error) => {
    return {
        type: ADD_USERS_REQUEST,
        payload: error
    } 
}

export const fetchUser = (page = 1) => {
    return (dispatch) => {
        dispatch(fetchUserRequest()) 
        axios.get(`${API}users?page=${page}`)
        .then((response) => {
            const data = response.data.data
            if (data.length) {
                dispatch(fetchUserSuccess(data))
            }
        })
        .cathc((error) => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        dispatch(addUserRequest()) 
        axios.post(`${API}users`, user)
        .then((response) => {
            const data = response.data
            if (data) {
                dispatch(addUserSuccess("user added"))
            }
        })
        .cathc((error) => {
            dispatch(addUserFailure(error.message))
        })
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        dispatch(addUserRequest()) 
        axios.post(`${API}users`, user)
        .then((response) => {
            const data = response.data
            if (data.length) {
                dispatch(addUserSuccess(data))
            }
        })
        .cathc((error) => {
            dispatch(addUserFailure(error.message))
        })
    }
}

