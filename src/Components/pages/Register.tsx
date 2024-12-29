import React from "react";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { useState } from "react";

import "./Login.css";
import { Signup } from "../../services/AuthService";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type EmailProp from "../Props/email";

// Define any props the component might accept (currently none)

// Define the Login component using React.FC (Function Component)
const Login: React.FC<EmailProp> = (emailProp: EmailProp) => {
  const email = emailProp.inputEmail;
  const setEmail = emailProp.setInputEmail;
  const [password, setPassword] = useState<string>("");
  const [validationPassword, setValidationPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password === "") {
      toast.error("Senha não pode ser vazia.");
      return;
    }

    if (email === "") {
      toast.error("email não pode ser vazio.");
      return;
    }

    if (firstName === "") {
      toast.error("Primeiro nome não pode ser vazio.");
      return;
    }

    if (lastName === "") {
      toast.error("Último nome não pode ser vazio.");
      return;
    }

    if (validationPassword !== password) {
      toast.error("As senhas estão divergentes.", {
        position: "top-right", // Posição da notificação
        autoClose: 3000, // Fechamento automático em milissegundos
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    try {
      const authentication = await Signup(email, password, firstName, lastName);

      if (authentication.acessToken) {
        toast.success(authentication.message);
        navigate("/homepage");
      } else {
        toast.error(authentication.message);
      }
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
        <h1>Cadastre-se</h1>

        <div className="input-field">
          <input
            type="text"
            placeholder="Primeiro Nome"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFirstName(e.target.value);
            }}
          />
          <FaUser className="icon"></FaUser>
        </div>

        <div className="input-field">
          <input
            type="text"
            placeholder="Último Nome"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setLastName(e.target.value);
            }}
          />
          <FaUser className="icon"></FaUser>
        </div>

        <div className="input-field">
          <input
            value={email}
            type="email"
            placeholder="E-Mail"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <FaEnvelope className="icon"></FaEnvelope>
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <FaLock className="icon"></FaLock>
        </div>

        <div className="input-field">
          <input
            type="password"
            placeholder="Confirmar Senha"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValidationPassword(e.target.value)
            }
          />
          <FaLock className="icon"></FaLock>
        </div>

        <button>Cadastrar</button>

        <div className="signup-link">
          <p>
            <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;

//DEPOIS DE LOGAR IR EM UMA PAGINA PARA FAZER O LOGOUT
// FAZER COMPONENTE PARA NÃO FICAR REPETINDO O CÓDIGO DAS DIVS
