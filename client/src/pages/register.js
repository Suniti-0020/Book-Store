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
                    <div className="separate">
                        <img className="auth-img" src="https://www.globalsign.com/application/files/4616/2199/5695/ManagedPKI_Strong_Authentication_Cover_1_APAC_2021_05_19.jpg" alt="authentication " />
                    </div>
                    <div>
                        <p className="change">Already have an account
                            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Login </button></p>
                        <h3>Weclome to BooKraze</h3>
                        <p>Dicover a world of stories </p>
                        <h1>Register</h1>
                        <label className="label" htmlFor="name">Full name</label>
                        <input className="input" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                        <label className="label" htmlFor="email">E-mail</label>
                        <input className="input" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        <label className="label" htmlFor="password">Password</label>
                        <input className="input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                        <button className="btn" type="submit">Register</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Register;