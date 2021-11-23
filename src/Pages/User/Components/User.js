import { useState } from 'react'
import { useDispatch } from 'react-redux'

import UserForm from './UserForm'
import { deleteUser } from '../../../Redux'


const Item = ({ user }) => {
    const dispatch = useDispatch()
    const [state, setState] = useState({
        open: false
    })
    
    const removeItem = () => {
        dispatch(deleteUser(user))
    }

    return (
        <>
            <span>{user.userName}</span>
            <div className={`ml-auto more ${state.open ? 'open' : ''}`}>
                <span><i className="fas fa-ellipsis-h" onClick={() => setState({...state, open: !state.open})}></i></span>
                <div className="dropdown">
                <UserForm user={user} />   
                <span onClick={removeItem}><i className="fas fa-trash-alt"></i> Delete</span>
                </div>
            </div>
        </>
    )
}

export default Item
