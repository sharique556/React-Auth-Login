import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

const Admin = ({user}) => {
    const navigateTo = useNavigate();
    useEffect(()=>{
        if(!user){
            return navigateTo('/')
        }
    },[user])
    
    return (
        <div>
            <h1>This is an admin page.Only auth people can see this</h1>
            <Link to="/logout">Logout</Link>
        </div>
    )
}

export default Admin