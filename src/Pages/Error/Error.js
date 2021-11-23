import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'

const Error = () => {
    return (
        <Layout>
        <section className="dashboard">
            <div className="container text-center">
                   <h1> Page not found </h1>
                <Link to="/" >Go Back</Link>
            </div> 
        </section> 
        </Layout>       
    )
}

export default Error
