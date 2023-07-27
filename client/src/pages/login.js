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
                    <div className="separateL">
                        <img className="auth-img" src="https://www.globalsign.com/application/files/4616/2199/5695/ManagedPKI_Strong_Authentication_Cover_1_APAC_2021_05_19.jpg" alt="authentication " />
                    </div>
                    <div className="separateR">
                        <p className="change">
                            Don't have an account <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Register</button>
                        </p>
                        <h3>Weclome to BooKraze</h3>
                        <p className="tagline">Dicover a world of stories </p>
                        <h1>Login</h1>
                        <label className="label" htmlFor="email">Username</label>
                        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        <label className="label" htmlFor="password">Password</label>
                        <input className="input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        <button className="btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login 