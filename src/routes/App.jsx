import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

import '../styles/global.scss'

const App = () => {
    return (
            <Routes>
                <Route path="/" element={ <Layout /> } >
                    <Route index element={ <Home /> } />
                    <Route path="login" element={ <Login /> } />
                    <Route path="recovery-password" element={ <RecoveryPassword /> } />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
    );
}

export default App;