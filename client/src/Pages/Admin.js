import React from 'react'
import Users from '../components/Users'

const Admin = () => {
    return (
        <div>
            <h1>Amin Page</h1>
            <p>Only authorized users can access this page!</p>
            <Users />   
        </div>
    )
}

export default Admin
