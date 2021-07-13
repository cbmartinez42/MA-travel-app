import React, { useState } from "react";
import Users from '../components/Users';
import { Container } from "@material-ui/core/";
import API from "../utils/API";


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
