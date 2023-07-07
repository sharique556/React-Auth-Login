import React from 'react'
import {Link} from "react-router-dom"

const Logout = ({setUser}) => {
    localStorage.removeItem('jwt-token')
    setUser(undefined)

    return (
        <div>
           <h1>You have been logged out!</h1> 
           <Link to="/">Login again!</Link>
        </div>
    )
}

export default Logout