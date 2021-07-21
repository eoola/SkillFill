import React from 'react';

import "./Header.css";
import Profile from '../Profile/Profile';
import SignUp from '../SignUp/SignUp';

import { Link } from 'react-router-dom';


/**
 * This is the header component
 */
class Header extends React.Component {

    render() {
        return (
            <div className="Header">
                
               
              
                <Link to="/signup" id="signup">Register</Link>
            </div>
        )
    }
}

export default Header;