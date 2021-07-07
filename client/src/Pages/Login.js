import React, {useState} from "react";
import Button from '../components/Button'
import Signup from "../components/Signup";



const Login = () => {

    const [showSignUp, setShowSignUp] = useState(false);

    const onClick = (e) => {
        e.preventDefault();
        // setShowSignUp = !showSignUp;
        console.log("Click! ",showSignUp);
    }

    return (
            <div>
                {/* Log in container */}
                <div className="container">
                    {/* <div className="row">
                        <div className="row custom-row">
                            <div className="col s6 center-align">
                                <h5 className="fredoka" >Log in here!</h5>
                            </div>
                            <div className="col s6 center-align">
                                <h5 className="fredoka">Sign Up for an Account</h5>
                            </div>
                        </div>
                    </div> */}

                    <div className="row">
                        <div className="row">
                            <div className="row custom-row">
                                <div className="col s12 center-align">
                                    <h5 className="fredoka" >Log in here!</h5>
                                </div>
                            </div>
                        </div>
                        <form className="col s12 center-align login-form">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">email</i>
                                    <input id="login-email" type="email" className="validate"></input>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">security</i>
                                        <input id="login-password" type="password" className="validate"></input>
                                        <label for="password">Password</label>
                                    </div>
                                    <button id="login-btn" className="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i className="material-icons right">send</i>
                                    </button>
                                    <Button text='Create Account' onClick={(e)=> {
                                        e.preventDefault();
                                        setShowSignUp(!showSignUp);
                                    }} />
                        </form>
                </div>
            </div>
            {showSignUp && <Signup  />}
        </div>
    )
}

export default Login