import React, {useEffect, useState} from 'react';
import Form from './Form'
import {useDispatch} from 'react-redux'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {setUser} from "../Store/slices/UserSlice";
import {useNavigate} from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loading , setLoading] = useState(true)

    const handleLogin = async (email ,password)=> {
        const auth = await getAuth();
        signInWithEmailAndPassword(auth ,email ,password)
            .then(({user}) => {
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id:user.uid,
                    token: user.accesToken,
                }))

                navigate('/')

            })
            .catch(alert('Avval akkaunt yarating'))
    }



    return (
        <div>
            <Form title='Accountingizni kiriting' handleClick={handleLogin} />
        </div>
    );
};

export default Login;