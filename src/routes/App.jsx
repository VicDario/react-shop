import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "@containers/Layout";
import Login from "@pages/Login";
import RecoveryPassword from "@pages/RecoveryPassword";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";

import "@styles/global.scss";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="recovery-password" element={<RecoveryPassword />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
