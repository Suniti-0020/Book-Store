import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../CSS/navbar.css";
import { Outlet, Link } from "react-router-dom";


const Navbar = () => {
    const navRef = useRef();

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
                <ul>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/allbooks">All Books</Link>
                    <Link className="link" to="/collection">My Collections</Link>
                    <Link className="link" to="/login">Login</Link>
                    <Link className="link" to="/register">Register</Link>
                </ul>
                <Outlet />
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
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

