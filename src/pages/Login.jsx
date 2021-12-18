import React, { useRef } from 'react';
import axios from 'axios';

import '@styles/Login.scss';

import logo from '@logos/logo_yard_sale.svg';

const API = ''

const Login = () => {
	const form = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			email: formData.get('email'),
			password: formData.get('password'),
		}
		const response = axios.post('https://api.escuelajs.co/api/v1/auth/login', data);
	}
	return (
		<div className="login">
			<div className="form-container">
				<img src={logo} alt="logo" className="logo" />

				<form onSubmit={handleSubmit} className="form" ref={form}>
					<label htmlFor="email" className="label">
						Email address
					</label>
					<input
						type="text"
						name="email"
						placeholder="platzi@example.com"
						className="input input-email"
					/>

					<label htmlFor="password" className="label">
						Password
					</label>
					<input
						type="password"
						name="password"
						placeholder="*********"
						className="input input-password"
					/>

					<input type="submit" value="Log in" className="primary-button login-button" />
					<a href="/">Forgot my password</a>
				</form>

				<button className="secondary-button signup-button">Sign up</button>
			</div>
		</div>
	);
};

export default Login;
