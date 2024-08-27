import './Header.css';
import fulllogo from "../assets/img/full.png";
import { HashLink as Link } from 'react-router-hash-link';

const Header = () => {
   
    return (
        <div>
            <div className="navbar">
                <div className="logo">
                    <img src={fulllogo} alt="Logo" />
                </div>
                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>
                    <div className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="#about">About Us</Link></li>
                        <li><Link to="#services">Services</Link></li>
                        <li><Link to="#contact">Contact Us</Link></li>
                        <li><Link to="/login"><i className="bi bi-box-arrow-in-right"></i></Link></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Header;
