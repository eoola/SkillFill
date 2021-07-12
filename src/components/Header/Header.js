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
                {/* <div className="top-nav">
                    
                    <a href="/all-categories">All Categories</a>
                    <a href="/creative-art">Creative Art</a>
                    <a href="/music">Music</a>
                    <a href="/instruments">Instruments</a>
                    <a href="/visual">Visual</a>
                    <a href="/digital-art">Digital Art</a>
                    <a href="/photography">Photography</a>
                </div> */}
                <div className="Search">
                    <Search></Search>
                </div>
                {/* <div>
                    <Profile></Profile>
                </div> */}
            </div>
        )
    }
}

export default Header;