import {useDispatch} from 'react-redux'
import Form from './Form'
import {setUser} from "../Store/slices/UserSlice";
import {useNavigate} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

import React from 'react';

const SignUp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleRegister =  (email ,password)=> {
        const auth =  getAuth();
        console.log(auth)
        createUserWithEmailAndPassword(auth ,email ,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id:user.uid,
                    token: user.accesToken,
                }))
                navigate('/')
            })
            .catch(alert('Yangi akkaunt yarating'))

    }

    return (
        <div>
            <Form title={`Ro'yhatdan o'ting`} handleClick={handleRegister} />
        </div>
    );
};

export default SignUp;