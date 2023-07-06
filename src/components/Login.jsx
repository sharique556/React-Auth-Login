import React from 'react'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';



const Login = ({ state, setState }) => {
    const navigateTo = useNavigate();

    function userInput(e) {
        e.preventDefault()
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e) {
        const { username, password } = state
        if (username == "aa" && password == "11") {
            setState({
                ...state,
                isLoggedIn: true
            })

            localStorage.setItem('token', 'jjuikhhggreeeeeeee')
            document.cookie = "token=jjuikhhggreeeeeeee; expires=Wed, 06 Jul 2023 13:29:59 UTC; path=/"
            // key=value; expires=Wed, 06 Jul 2023 23:59:59 UTC; path=/
            let token1 = "ayhyyehhw"
        //     document.cookie("jwtToken",token1,{
        //     expires: new Date(Date.now() + 25892000000),
        //     httpOnly:true
        // })
        }
        e.preventDefault()
    }

    console.log("state", state,document.cookie)
    useEffect(() => {
        if (state.isLoggedIn) {
            return navigateTo('/admin')
        }
    }, [state.isLoggedIn])


    return (
        <>
            <h1>Login</h1>
            <div style={{ display: "flex",justifyContent:"center" }}>
                <div >
                    <input type="text" placeholder='enter username' name="username" value={state.userName} onChange={userInput} />
                    <br />
                </div>
                <div >
                    <input type="password" placeholder='enter your password' name="password" value={state.password} onChange={userInput} />
                    <br />
                </div>
                <div >
                    <input type="button" value="login" onClick={handleSubmit} />
                </div>
            </div>
        </>
    )
}

export default Login