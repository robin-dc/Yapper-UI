import { Routes, Route } from "react-router-dom"
import { Home, Login, Register, UserProfile, Me } from "./pages"

function App() {
  return (
    <div className="bg-primary">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/user/:userId" element={<UserProfile/>}/>
        <Route path="/me" element={<Me/>}/>
      </Routes>
    </div>

  )
}

export default App
