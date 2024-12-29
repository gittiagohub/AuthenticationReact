import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";
import { LoginService } from "../../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type EmailProp from "../Props/email";

// Define any props the component might accept (currently none)

// Define the Login component using React.FC (Function Component)
const Login: React.FC<EmailProp> = (emailProp : EmailProp  ) => {
  
 
  const email = emailProp.inputEmail;  
  const setEmail = emailProp.setInputEmail;

  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const data = await LoginService(email, password);

      if (data.acessToken) {
        navigate("/homepage");
      } else {
        setPassword("");
        toast.error(data.message);
      }
      // Handle the response
      // Redirect the user or save tokens in localStorage
    } catch {
      //setError(err.message || 'An error occurred');
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o Sistema</h1>
        <div className="input-field">
          <input
            type="email"
            placeholder="E-Mail"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <FaUser className="icon"></FaUser>
        </div>
        <div className="input-field">
          <input
            value={password}
            type="password"
            placeholder="Senha"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            required
          />
          <FaLock className="icon"></FaLock>
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembre de mim
          </label>

          <Link to="/Forgot">Esqueceu a senha?</Link>
        </div>
        <button>Entrar</button>

        <div className="signup-link">
          <p>
            Não tem conta? <Link to="/Register">Cadastrar</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
