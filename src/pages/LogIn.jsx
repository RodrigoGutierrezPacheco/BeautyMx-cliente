import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";
import './auth.css'

import { LockClosedIcon } from '@heroicons/react/20/solid'


export default function LogIn({ authenticate }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { username, password } = form;
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handleInputChange(event) {
    const { name, value } = event.target;

    return setForm({ ...form, [name]: value });
  }

  function handleFormSubmission(event) {
    event.preventDefault();
    const credentials = {
      username,
      password,
    };
    login(credentials).then((res) => {
      if (!res.status) {
        return setError({ message: "Invalid credentials" });
      }
      USER_HELPERS.setUserToken(res.data.accessToken);
      authenticate(res.data.user);
      navigate(PATHS.HOMEPAGE);
    });
  }

  return (
    <div className="container-login">
			<div className="login-one">
      <h1 className="title login">Iniciar Sesion</h1>
			<img className="logo-login" src="images/beauty-ico.png" alt="" />
			</div>
      <form onSubmit={handleFormSubmission} className="auth__form container-username">
			<div className="username">
        <label htmlFor="input-username" className="username">Correo Electronico</label>
        <input
				className="username-p"
          id="input-username"
          type="text"
          name="username"
          placeholder="beauty@mx.com"
          value={username}
          onChange={handleInputChange}
          required
        />
      </div>
			<div className="username">
        <label htmlFor="input-password">Ingresa tu contraseña</label>
        <input
          id="input-password"
          type="password"
          name="password"
          placeholder="Minimo 8 caracteres"
          value={password}
          onChange={handleInputChange}
          required
          minLength="8"
        />

        {error && (
          <div className="error-block">
            <p>There was an error submiting the form:</p>
            <p>{error.message}</p>
          </div>
        )}
				</div>

        <button className="button-signup" type="submit">
          Inicia Sesion
        </button>
      </form>
    </div>
  );
}
