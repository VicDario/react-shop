import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';

import Layout from '@containers/Layout';
import Login from '@pages/Login';
import RecoveryPassword from '@pages/RecoveryPassword';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import MyAccount from '@pages/MyAccount';
import Orders from '@pages/Orders';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import NewPassword from '@pages/NewPassword';
import SendEmail from '@pages/SendEmail';

import '@styles/global.scss';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState} >
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="recovery-password" element={<RecoveryPassword />} />
				<Route path="account" element={<MyAccount />} />
				<Route path="signup" element={<CreateAccount />} />
				<Route path="orders" element={<Orders />} />
				<Route path="checkout" element={<Checkout />} />
				<Route path="new-password" element={<NewPassword />} />
				<Route path="send-email" element={<SendEmail />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
		</AppContext.Provider>
	);
};

export default App;
