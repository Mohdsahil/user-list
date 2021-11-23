import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Row,
    Col
} from 'reactstrap'

import { getUsers } from '../../Redux'
import UserForm from './Components/UserForm'
import User from './Components/User'
import Layout from '../../Components/Layout'

const Users = () => {
    const userState = useSelector(state => state.user)
    const users = userState.users 
    const dispatch = useDispatch()
    
    const [state, setState] = useState({
        users: [],
    })

    const [filter, setFilter] = useState({
            userName:''
    })

    useEffect(() => {
        dispatch(getUsers())
        setState({
            ...state,
            users: userState.users
        })
    }, [userState.users])
  
    const applyFilter = (data) => {
        var newusers = users

        if (data.userName != '' && newusers.length > 0) {
            newusers = newusers.filter(user => user.userName != null && user.userName.toLowerCase().match(data.userName.toLowerCase()) != null && user.userName.toLowerCase().match(data.userName.toLowerCase()) )
        }

        setState({...state, users: newusers })
        setFilter(data)
    }
  
    const changeFilterHandler = (name) => (event) => {
        var filterData = filter

          filterData = {
            ...filter,
            [name]: event.target.value
          }
    
        applyFilter(filterData)
    
    } 
  
    return (
        <Layout>
            <section className="dashboard">
                <div className="container">
                    
                    <div className="sidebar">
                        <UserForm />
                        <div className="search">
                        <input 
                            type="text" 
                            name="search" 
                            placeholder="Seach User..." 
                            value={filter.userName} 
                            onChange={changeFilterHandler("userName")} />
                        <i className="fas fa-search"></i>
                        </div>
                        <Row>
                            {
                                state.users.length > 0 &&
                                state.users.map((item, key) => {
                                    return (
                                        <Col sm={3}>
                                            <div className="grid-user">
                                                <User user={item} key={key} />
                                            </div>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                            
                        <ul>
                            
                        </ul>
                    
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default Users
