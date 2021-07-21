import React from 'react';
import Logo from './Logo';
import "./Header.css";
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp';
import Search from './Search/Search';
import { Link } from 'react-router-dom';


/**
 * This is the header component
 */
class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                <Logo></Logo>
               
                <div className="Search">
                    <Search></Search>
                   
                </div>
                <Link to="/signup" id="signup">Register</Link>
            </div>
        )
    }
}

export default Header;