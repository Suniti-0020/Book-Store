import React, { useState } from "react";
import "../CSS/Reg&Log.css"

function Register(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div>

            <div className="auth-form-container register">
                <form className="register-form form" onSubmit={handleSubmit}>
                    <h2>Register</h2>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button className="btn" type="submit">Log In</button>
                    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
                </form>
            </div>

        </div>
    )
}

export default Register;