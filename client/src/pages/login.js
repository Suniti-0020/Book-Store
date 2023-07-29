import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import "../CSS/Reg&Log.css"
import { useDispatch } from "react-redux";
import { authActions } from "./redux/store";
import toast from "react-hot-toast";

function Login(props) {

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/v1/user/login', {
                email: inputs.email,
                password: inputs.password
            });
            if (data.success) {
                localStorage.setItem("userId", data?.user._id);
                dispatch(authActions.login());
                toast.success("User login Successfully");
                navigate("/");

            }
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate();

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
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
                            Don't have an account <button className="link-btn" onClick={() => navigate('/register')}>Register</button>
                        </p>
                        <h3>Weclome to BooKraze</h3>
                        <p className="tagline">Dicover a world of stories </p>
                        <h1>Login</h1>
                        <label className="label" htmlFor="email">Username</label>
                        <input className="input" onChange={handleChange} value={inputs.email} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                        <label className="label" htmlFor="password">Password</label>
                        <input className="input" onChange={handleChange} value={inputs.password} type="password" placeholder="********" id="password" name="password" />
                        <button className="btn" type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login