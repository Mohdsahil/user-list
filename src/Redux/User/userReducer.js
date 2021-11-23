import {
    ADD_USER,
    EDIT_USER,
    DELETE_USER,
    GET_USER
} from './userTypes'


const initialState = {
    users: [],
} 

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_USER: 
            var users = state.users
            return {
                ...state,
                users: users
            }
        case ADD_USER: 
            var users = state.users
            users.push(action.payload)

            return {
                ...state,
                users: users
            }
        case EDIT_USER: 
            var users = state.users.filter(item => item.id != action.payload.id)
            users.push(action.payload)
            return {
                ...state,
                users: users
            }   
            
        case DELETE_USER: 
            var users = state.users.filter(item => item.id != action.payload.id)
            return {
                ...state,
                users: users
            }   
        default: return state    
    }
}

export default userReducer;