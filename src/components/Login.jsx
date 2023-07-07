import React from 'react'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';


const Login = ({ state, setState, handleSubmit, user }) => {
    const navigateTo = useNavigate();

    function userInput(e) {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    console.log("state", state, document.cookie)
    if (user) {
        return navigateTo('/admin')
    }
    return (
        <>
            <h1>Login</h1>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div >
                    <input type="text" placeholder='enter username' name="username" value={state.userName} onChange={userInput} />
                    <br />
                </div>
                <div >
                    <input type="password" placeholder='enter your password' name="password" value={state.password} onChange={userInput} />
                    <br />
                </div>
                <div >
                    <input type="button" value="login" onClick={() => handleSubmit(state)} />
                </div>
            </div>
        </>
    )
}

export default Login