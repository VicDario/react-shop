import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPassword from "../containers/RecoveryPassword";

import '../styles/global.scss'

const App = () => {
    return (
            <Routes>
                <Route path="/" element={ <Layout /> } >
                    <Route path="login" element={ <Login /> } />
                    <Route path="recovery-password" element={ <RecoveryPassword /> } />
                </Route>
            </Routes>
    );
}

export default App;