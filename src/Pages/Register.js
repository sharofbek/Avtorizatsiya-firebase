import React from 'react';
import {Link} from "react-router-dom";
import SignUp from "../Components/SignUp";

const Register = () => {
    return (
        <div>
            <h1>Sign Up</h1>
            <SignUp/>
            <p>
                Akkountingiz bormi <Link to='/login'>Kiring</Link>
            </p>
        </div>
    );
};

export default Register;