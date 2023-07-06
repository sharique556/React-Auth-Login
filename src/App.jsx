import Login from "./components/Login"
import Logout from "./components/Logout"
import Admin from  "./components/Admin"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [state, setState] = useState({ username: "", password: "", isLoggedIn: localStorage.getItem('token')?true:false })

    // console.log("Token Generated",localStorage.getItem('token'))
    // console.log("state",state)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login state={state} setState={setState}/>} />
          <Route path="/admin" element={<Admin state={state} setState={setState}/>} />
          <Route path="/logout" element={<Logout/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
