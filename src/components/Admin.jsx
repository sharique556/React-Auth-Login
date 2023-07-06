import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Admin = ({state,setState}) => {
    const token = localStorage.getItem('token')
    const navigateTo = useNavigate();

    if (token == null) {
        setState({
            ...state,
            isLoggedIn : false
        })
    }

    if (state.isLoggedIn === false) {
        return navigateTo('/')
    }

    return (
        <div>
            <h1>This is an admin page.Only auth people can see this</h1>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Admin