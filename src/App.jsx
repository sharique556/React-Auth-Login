import Login from "./components/Login"
import Logout from "./components/Logout"
import Admin from "./components/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from 'axios';

function App() {
  const [state, setState] = useState({ username: "", password: ""})
  const [user, setUser] = useState(null)
  const [loadingUser,setLoadingUser] = useState(true)

  const token = localStorage.getItem('jwt-token')

  useEffect(()=>{
    if(token){
      axios.get("https://myeasykart.codeyogi.io/me",{
        headers : {
          Authorization : token
        }
      })
      .then((response)=>{
        console.log(response.data)
        setUser(response.data)
        setLoadingUser(false)
      })
    }else{
      setLoadingUser(false)
    }
  })

  function handleSubmit(state) {
    console.log("data to be submitted", state)
    axios.post("https://myeasykart.codeyogi.io/login", {
      email: state.username,
      password: state.password
    }).then((response) => {
      console.log(response.data)
      const { user, token } = response.data
      localStorage.setItem('jwt-token', token)
      setUser(user)
    })
      .catch((err) => {
        console.log("Invalid Credential", err);
      })
  }
  console.log("User", user)

  if(loadingUser){
    return <h1>Loading...</h1>
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login state={state} setState={setState} handleSubmit={handleSubmit} user={user} />} />
          <Route path="/admin" element={<Admin state={state} setState={setState} user={user} />} />
          <Route path="/logout" element={<Logout setUser={setUser} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
