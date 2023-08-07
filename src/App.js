import React from 'react';
import {Routes ,Route} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/LoginPage";
import Register from "./Pages/Register";

const App = () => {
    return (
        <div className={'container-fluid1'}>
            <Routes>
                <Route index path={'/'} element={<Home/>} />
                <Route path={'/login'} element={<Login/>} />
                <Route path={'/register'} element={<Register/>} />
            </Routes>
        </div>
    );
};

export default App;