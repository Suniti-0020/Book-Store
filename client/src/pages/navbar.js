import react, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../pages/redux/store";
import toast from "react-hot-toast";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
// import { MenuItem } from "@mui/material";sss



const Navbar = () => {

    // global state
    let isLogin = useSelector((state) => state.isLogin);
    isLogin = isLogin || localStorage.getItem("userId");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //state
    // const [value, setValue] = useState();

    //logout
    const handleLogout = () => {
        try {
            dispatch(authActions.logout());
            toast.success("Logout Successfully");
            navigate("/login");
            localStorage.clear();
        } catch (error) {
            console.log(error);
        }
    };


    // const navRef = useRef()
    // const showNavbar = () => {
    //     navRef.current.classList.toggle(
    //         "show"
    //     );
    // };

    // <======== JS Program to Open & Close the Navigation Bar ========>
    // const middleNavigation = document.querySelector("#navbar .middle-navigation");
    // const middleNavigationLists = document.querySelectorAll("#navbar .middle-navigation ul li")
    // const menuBar = document.querySelector("#navbar .right-navigation #menu-btn");

    // react.useEffect(() => {
    //     menuBar.addEventListener("click", () => {
    //         middleNavigation.classList.toggle("show");
    //     });
    // });

    // react.useEffect(() => {
    //     middleNavigationLists.forEach((navigation) => {
    //         navigation.addEventListener("click", () => {
    //             if (middleNavigation.classList.contains("show")) {
    //                 middleNavigation.classList.toggle("show");
    //             }
    //         })
    //     });
    // })

    const [Mobile, setMobile] = useState(false)
    // <div>
    //     <button onClick={() => setShow(!show)}>Toggle</button>
    //     <div className={show ? "show" : "hide"}>Hello</div>
    // </div>

    return (
        <header>
            <div id="navbar">
                <div className="left-navigation">
                    <i className="ri-store-2-line"></i>
                    BookRaze
                </div>
                {/* <nav > */}
                {isLogin &&
                    <>
                        <div className={Mobile ? "show middle-navigation" : "hide middle-navigation"} onClick={() => setMobile(false)} >
                            <ul>
                                <li><NavLink exact activeClassName="active" className="link" to="/">Home</NavLink></li>
                                <li><NavLink activeClassName="active" className="link" to="/about">About</NavLink></li>
                                <li><NavLink activeClassName="active" className="link" to="/allbooks">All Books</NavLink></li>
                            </ul>
                        </div>

                        <div className="right-navigation">
                            {/* <ul> */}
                            <div className="cart"><NavLink id="cart-btn" activeClassName="active" className="link" to="/collection"><ShoppingCartIcon /></NavLink></div>
                            <div><NavLink activeClassName="active" onClick={handleLogout} className="link" to="/">Logout </NavLink></div>
                            <div id="menu-btn" onClick={() => setMobile(!Mobile)} class="menu-btn hide">{Mobile ? <CloseIcon /> : <MenuIcon />}</div>

                            {/* </ul> */}
                        </div>
                    </>
                }

                {!isLogin &&
                    <>
                        <div className={Mobile ? "hide middle-navigation" : "show middle-navigation"} onClick={() => setMobile(false)}>
                            <ul>
                                <li><NavLink exact activeClassName="active" className="link" to="/">Home</NavLink></li>
                                <li><NavLink activeClassName="active" className="link" to="/about">About</NavLink></li>
                                <li><NavLink activeClassName="active" className="link" to="/allbooks">All Books</NavLink></li>
                            </ul>
                        </div>
                        <div className="right-navigation">
                            {/* <ul> */}
                            <div><NavLink id="login-btn" activeClassName="active" className="link" to="/login">Login</NavLink></div>
                            <div><NavLink activeClassName="active" className="link" to="/register">Register</NavLink></div>
                            <div id="menu-btn" onClick={() => setMobile(!Mobile)} class="menu-btn hide">{Mobile ? <MenuIcon /> : <CloseIcon />}</div>
                            {/* </ul> */}
                        </div>
                    </>}



                {/* <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                        <Outlet />
                    </button> */}
                {/* </nav> */}
                {/* <div class="right-navigation">
                    <div id="menu-btn" onClick={showNavbar} class="ri-menu-line hide"><MenuIcon /></div>
                </div> */}

                {/* <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button> */}

            </div>
        </header>
    );
}

export default Navbar;

