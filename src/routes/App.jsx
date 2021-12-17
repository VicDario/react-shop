import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MyAccount from '@pages/MyAccount';
import Orders from '@pages/Orders';
import CreateAccount from '@pages/CreateAccount';

import '@styles/global.scss';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="recovery-password" element={<RecoveryPassword />} />
				<Route path="account" element={<MyAccount />} />
				<Route path="signup" element={<CreateAccount />} />
				<Route path="orders" element={<Orders />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
