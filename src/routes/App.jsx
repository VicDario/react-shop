import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import AppContext from '../context/AppContext';
import useInitialState from '@hooks/useInitialState';

import Layout from '@containers/Layout';

const Login = lazy(() => import('@pages/Login'));
const RecoveryPassword = lazy(() => import('@pages/RecoveryPassword'));
const Home = lazy(() => import('@pages/Home'));
const MyAccount = lazy(() => import('@pages/MyAccount'));
const CreateAccount = lazy(() => import('@pages/CreateAccount'));
const Orders = lazy(() => import('@pages/Orders'));
const Checkout = lazy(() => import('@pages/Checkout'));
const NewPassword = lazy(() => import('@pages/NewPassword'));
const SendEmail = lazy(() => import('@pages/SendEmail'));
const NotFound = lazy(() => import('@pages/NotFound'));

import '@styles/global.scss';

const App = () => {
	const initialState = useInitialState();
	return (
		<AppContext.Provider value={initialState}>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route
						index
						element={
							<Suspense fallback={<>...</>}>
								<Home />
							</Suspense>
						}
					/>
					<Route
						path="login"
						element={
							<Suspense fallback={<>...</>}>
								<Login />
							</Suspense>
						}
					/>
					<Route
						path="recovery-password"
						element={
							<Suspense fallback={<>...</>}>
								<RecoveryPassword />
							</Suspense>
						}
					/>
					<Route
						path="account"
						element={
							<Suspense fallback={<>...</>}>
								<MyAccount />
							</Suspense>
						}
					/>
					<Route
						path="signup"
						element={
							<Suspense fallback={<>...</>}>
								<CreateAccount />
							</Suspense>
						}
					/>
					<Route
						path="orders"
						element={
							<Suspense fallback={<>...</>}>
								<Orders />
							</Suspense>
						}
					/>
					<Route
						path="checkout"
						element={
							<Suspense fallback={<>...</>}>
								<Checkout />
							</Suspense>
						}
					/>
					<Route
						path="new-password"
						element={
							<Suspense fallback={<>...</>}>
								<NewPassword />
							</Suspense>
						}
					/>
					<Route
						path="send-email"
						element={
							<Suspense fallback={<>...</>}>
								<SendEmail />
							</Suspense>
						}
					/>
				</Route>
				<Route
					path="*"
					element={
						<Suspense fallback={<>...</>}>
							<NotFound />
						</Suspense>
					}
				/>
			</Routes>
		</AppContext.Provider>
	);
};

export default App;
