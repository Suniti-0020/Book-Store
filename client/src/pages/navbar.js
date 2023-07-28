import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/navbar.css";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../pages/redux/store";
import toast from "react-hot-toast";



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

    const navRef = useRef()
    const showNavbar = () => {
        navRef.current.classList.toggle(
            "responsive_nav"
        );
    };

    return (
        <header>
            <h1>
                BooKraze
            </h1>
            <nav ref={navRef}>
                {isLogin &&
                    <ul>
                        <NavLink exact activeClassName="active" className="link" to="/">Home</NavLink>
                        <NavLink activeClassName="active" className="link" to="/about">About</NavLink>
                        <NavLink activeClassName="active" className="link" to="/allbooks">All Books</NavLink>
                        <NavLink activeClassName="active" className="link" to="/collection">My Collections</NavLink>
                        <NavLink activeClassName="active" onClick={handleLogout} className="link" to="/">Logout  </NavLink>
                    </ul>
                }

                {!isLogin && <ul>
                    <NavLink activeClassName="active" className="link" to="/login">Login</NavLink>
                    <NavLink activeClassName="active" className="link" to="/register">Register</NavLink>
                </ul>}


                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                    <Outlet />
                </button>
            </nav>

            <button
                className="nav-btn"
                onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;

