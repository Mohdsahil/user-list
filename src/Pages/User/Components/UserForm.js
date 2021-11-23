import { useEffect, useState } from 'react'
import {  useDispatch } from 'react-redux'
import {
FormGroup,
Label,
Input,
Button, 
Modal, 
ModalBody,
} from 'reactstrap'

import { addUser, editUser } from  '../../../Redux'

const UserFrom = (props) => {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        modal: false,
        user: {
            id: 0,
            userName: '',
            date: new Date()
        }, 
        error: false
    })

    const toggle = () => {
        setState({...state, modal: !state.modal, error: false});
        
    } 
    
    useEffect(() => {
        if (props.user) {
            setState({
                ...state,
                user: {
                    id: props.user.id,
                    userName: props.user.userName,
                    date: new Date(props.user.date),
                },
                error: false,
            })
        } else {
            setState({
                ...state,
                user: {
                    id: Date.now(),
                    userName: '',
                    date: new Date,
                },
                error: false,
            })
        } 
        
    }, [props.user])
    


   const inputChangeHandler = (name) => (event) => {
       event.preventDefault()
       var value = '' 
      
       if (name == 'date') {
        value = new Date(event.target.value)
       } else {
           value = event.target.value
       }

        setState({
            ...state,
            user: {...state.user, [name]: value}
        })
   } 

   const uploadTodo = () => {
        if (state.user.userName == '') {
            setState({
                ...state,
                error: true
            })
            return false
        }
        if(props.user) {
            dispatch(editUser(state.user))
        } else {
            dispatch(addUser(state.user))
        }

        setState({
            ...state, 
            user: {
                id: Date.now(),
                userName: '',
            },
            modal: !state.modal
        })
   }

   
   return (

        <div>
            {
                props.user ?
                <span onClick={toggle}><i className="fas fa-pen"></i> Edit</span> :
                <button className="create-list"  onClick={toggle}><i className="fas fa-plus"></i> Create new user</button>
          
            }
        <Modal isOpen={state.modal} toggle={toggle} >
            <ModalBody>
                            {
                                state.error ? 
                                <div className="alert alert-danger" role="alert">
                                    {'User name is required'}
                                </div> :
                                 ''
                            }
                    <FormGroup>
                        <Label for="exampleAddress">
                            {
                                props.user ?
                                'Edit User' :
                                'Add User '
                            }
                            
                        </Label>
                        <Input 
                            type="text" 
                            name="userName" 
                            id="userName" 
                            placeholder="User Name"
                            value={state.user.userName}
                            onChange={inputChangeHandler('userName')}
                            />
                    </FormGroup>
                    <button size="sm" className="text-center btn create-list" type="button" onClick={uploadTodo}>
                        Save
                    </button>
                
            </ModalBody>
            
        </Modal>
        </div>


    )
}

export default UserFrom
