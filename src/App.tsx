import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import HomePage from "./Components/pages/Home";
import { useState } from "react";
import Forgot from "./Components/pages/Forgot";

function App() {
  const [email, setEmail] = useState(""); // State for the shared email
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login inputEmail ={email} setInputEmail={setEmail}></Login>}></Route>
          <Route path="/Register" element={<Register inputEmail ={email} setInputEmail={setEmail} ></Register>}></Route>
          <Route path="/Forgot" element={<Forgot inputEmail ={email} setInputEmail={setEmail}></Forgot>}></Route>
          <Route path="/Homepage" element={<HomePage></HomePage>}></Route>
          {/* <Route path="/Forgot" element={<Forgot></Forgot>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
