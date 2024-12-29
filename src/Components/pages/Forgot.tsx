import type React from "react";
import "./Login.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import type EmailProp from "../Props/email";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Forgot: React.FC<EmailProp> = (emailProp: EmailProp) => {
  const email = emailProp.inputEmail;
  const setEmail = emailProp.setInputEmail;
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    toast.success("Recuperação de senha enviada para seu email.");
    navigate("/");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Email para recuperar senha</h1>
        <div className="input-field">
          <input
            value={email}
            type="email"
            placeholder="E-Mail"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
            }}
          />
          <FaUser className="icon"></FaUser>
        </div>

        <button>Enviar</button>
        <div className="signup-link">
          <p>
            <Link to="/">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Forgot;
