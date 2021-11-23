
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


const initialState = {
    loading: false,
    users: [],
    error: '',
    success: ''
} 

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST: 
            return {
                ...state,
                loading: true,
                error: '',
                success: ''
            }
        case FETCH_USERS_SUCCESS: 
            return {
                ...state,
                loading: false,
                users: action.payload
            }    
        case FETCH_USERS_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case ADD_USER_REQUEST: 
            return {
                ...state,
                loading: true,
                error: '',
                success: ''
            }
        case ADD_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                success: action.payload
            }    
        case ADD_USER_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case DELETE_USER_REQUEST: 
            return {
                ...state,
                loading: true,
                error: '',
                success: ''
            }
        case DELETE_USER_SUCCESS: 
            return {
                ...state,
                loading: false,
                success: action.payload
            }    
        case DELETE_USER_FAILURE: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
    }
}

export default userReducer;