import React from 'react';


import "./SignUp.css";


/**
 * This is the header component
 */
class SignUp extends React.Component {

    render() {
        return (
            <div className="SignUp">
               
              
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <section class="signupform">
                    <br></br>
                    <br></br>
                    <form>
                        <label>Email Address</label>
                        <br></br>
                        <input type="text" required></input>
                        <br></br>
                        <br></br>
                        <label>Username</label>
                        <br></br>
                        <input type="text" required></input>
                        <br></br>
                        <br></br>
                        <label>Password</label>
                        <br></br>
                        <input type="password" required></input>
                        <br></br>
                        <br></br>
                        <label>Confirm Password</label>
                        <br></br>
                        <input type="password" required></input>
                        <button id="submit">Submit</button>
                    </form>
                </section>
            </div>
        )
    }
}

export default SignUp;