import React from 'react';
import {Link} from "react-router-dom";
import Login from "../Components/Login";

const LoginPage = () => {
    return (
        <div>
            <h1>Login</h1>
            <Login/>
            <p>
                Yoki <Link to='/register'>Ro'yhatdan o'tish</Link>
            </p>
        </div>
    );
};

export default LoginPage;