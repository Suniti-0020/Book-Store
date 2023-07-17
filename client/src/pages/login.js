import React, { useState } from "react";
import "../CSS/Reg&Log.css"

function Login(props) {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>
            <div className="auth-form-container">
                <form className="login-form form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <label htmlFor="email">Username</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="btn" type="submit">Log In</button>
                    <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
                </form>
            </div>
        </div>
    )
}

export default Login 