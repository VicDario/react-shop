import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

import '@styles/CreateAccount.scss';

import axios from 'axios';

const CreateAccount = () => {
	const form = useRef(null);
	const navigate = useNavigate();
	const { setUser } = React.useContext(AppContext);

	const handleRegister = async (e) => {
		e.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			name: formData.get('name'),
			email: formData.get('email'),
			password: formData.get('password'),
			role: 'customer'
		};
		console.log(data);
		const response = axios.post('https://api.escuelajs.co/api/v1/user', data);
		if(response.status === 201) {
			alert('User created successfully');
			setUser(response.data);
			navigate('/login');
		}
		else alert('Error')
	}
	return (
		<div className="CreateAccount">
			<div className="CreateAccount-container">
				<h1 className="title">My account</h1>
				<form onSubmit={handleRegister} className="form" ref={form}>
					<div>
						<label htmlFor="name" className="label">
							Name
						</label>
						<input
							type="text"
							name="name"
							placeholder="Teff"
							className="input input-name"
						/>
						<label htmlFor="email" className="label">
							Email
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
					</div>
					<input type="submit" value="Create" className="primary-button login-button" />
				</form>
			</div>
		</div>
	);
};

export default CreateAccount;
