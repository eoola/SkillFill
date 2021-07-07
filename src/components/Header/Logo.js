import React from 'react';
import "./Logo.css"

/**
 * This is the logo component, it is a part of the header component (it is simply a placeholder for the actual logo)
 */
class Logo extends React.Component {

    render() {
        return (
            <div className="Logo">
                <div className="Box">
                    Logo
                </div>
                <header>skillfill</header>
            </div>
        )
    }
}

export default Logo;