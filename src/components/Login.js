import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [successLogin, setSuccessLogin] = useState(false)

    const loginUser = async(userData) => {
        let res = await axios.post("/api/users/login", userData)
        if(res.data.loginSuccess){
            setSuccessLogin(true)
        }else{
            window.alert(res.data.message)
        }
    };
      
    const onSubmit = e => {
        e.preventDefault()
        const logUser = {
            "email": email,
            "password": password
        }
        loginUser(logUser)
    }

    return (
        
        <div className="container">
            {successLogin ? 
            <Redirect to="/" /> :
            <div>
                <h4>Login</h4>
                <div className="login_container">
                <form  onSubmit={onSubmit} method="post">

                    <label htmlFor="email">Email</label>
                    <input 
                    id="email" 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit">Login</button>

                </form>
                </div>  
                <p>
                ¿No tienes cuenta? <Link to="/register">Registrate</Link>
                </p>
            </div>
            }
            
        </div>
    )
}
