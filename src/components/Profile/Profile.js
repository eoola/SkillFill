import React from 'react';
import ProfileIcon from './ProfileIcon';
import Welcome from './Welcome';
import "./Profile.css"

class Profile extends React.Component {

    render() {
        return (
            <div className="Profile">
                <Welcome></Welcome>
                <ProfileIcon></ProfileIcon>
            </div>
        )
    }
}

export default Profile;