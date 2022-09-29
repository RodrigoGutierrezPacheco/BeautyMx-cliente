import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "./Signup";
import * as PATHS from "../utils/paths";
import * as USER_HELPERS from "../utils/userToken";

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
		<>
		{/*
			This example requires updating your template:

			```
			<html class="h-full bg-gray-50">
			<body class="h-full">
			```
		*/}
		<div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src="https://scontent.fcvj1-1.fna.fbcdn.net/v/t1.6435-9/47309432_1998538887105324_4162835822594228224_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=4H0VR4F0Fy0AX_evX1g&_nc_ht=scontent.fcvj1-1.fna&oh=00_AT9DXLGnSahHjMQ_ShTJglfgpAs8wg4wQrQUB91yPvjEtg&oe=6359D34E"
						alt="Your Company"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Iniciar Sesion
					</h2>
					{/* <p className="mt-2 text-center text-sm text-gray-600">
						Or{' '} */}
						{/* <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
							start your 14-day free trial
						</a> */}
					{/* </p> */}
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleFormSubmission}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="-space-y-px rounded-md shadow-sm">
						<div>
							<label htmlFor="input-username" className="sr-only">
								Correo electronico
							</label>
							<input
								id="input-username"
								type="text"
								name="username"
								placeholder="username"
								value={username}
								onChange={handleInputChange}
								required
								className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Correo electronico"
							/>
						</div>
						<div>
							<label htmlFor="input-password" className="sr-only">
								Contraseña
							</label>
							<input
							 id="input-password"
							 type="password"
							 name="password"
							 placeholder="Password"
							 value={password}
							 onChange={handleInputChange}
							 required
							 minLength="8"
								className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
								placeholder="Contraseña"
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
								Recuerdame
							</label>
						</div>

						{/* <div className="text-sm">
							<a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot your password?
							</a>
						</div> */}
					</div>

					{error && (
				<div className="error-block">
					<p>Ha ocurrido un error:</p>
					<p>{error.message}</p>
				</div>
			)}

					<div>
						<button
							type="submit"
							className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
							</span>
							Iniciar sesion
						</button>
					</div>
				</form>
			</div>
		</div>
	</>
  );
}
