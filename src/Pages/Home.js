import React from 'react';
import {useNavigate ,Navigate} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {useAuth} from "../hooks/use-auth";
import {removeUser} from "../Store/slices/UserSlice";

const Home = () => {

    const {isAuth ,email} = useAuth()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return isAuth ? (
        <div>
            <h1>Hush Kelibsiz</h1>
            <button onClick={() => dispatch(removeUser())}> Akkauntdan {email} chiqish </button>
        </div>
    ) : (
        <Navigate to='/login'/>
    );
};

export default Home;