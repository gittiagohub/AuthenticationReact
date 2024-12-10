import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";

// Define any props the component might accept (currently none)
interface LoginProps {
  onLogin: () => void;
}

// Define the Login component using React.FC (Function Component)
const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Envio");
    21 minutos
  };

  return (
    <div className="container">
      <form>
        <h1>Acesse o Sistema</h1>
        <div>
          <input type="email" placeholder="E-Mail" />
          <FaUser className="icon"></FaUser>
        </div>
        <div>
          <input type="password" placeholder="Senha" />
          <FaLock className="icon"></FaLock>
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <a href="#">Esqueceu a senha?</a>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem conta? <a href="#">Registrar</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
