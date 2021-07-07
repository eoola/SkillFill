import React from 'react';
import Logo from './Logo';
import "./Header.css"
import Search from './Search/Search';
import Profile from '../Profile/Profile';

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
                <div>
                    <Profile></Profile>
                </div>
            </div>
        )
    }
}

export default Header;