import React from "react";

import Layout from "../containers/Layout";
import Login from "../containers/login";
import RecoveryPassword from "../containers/RecoveryPassword";

import '../styles/global.scss'

const App = () => {
    return (
        <Layout>
            <Login />
            <RecoveryPassword />
        </Layout>
    );
}

export default App;