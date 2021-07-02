import React from 'react'

const Login = () => {
    return (
            <div>
                <h1>This is the login page</h1>
                <p>Unfortunbately for you it's not done yet.</p>
                <div className="container">
                    <div className="row">
                        <div className="row custom-row">
                            <div className="col s6 center-align">
                                <h5 className="fredoka" >Log in here!</h5>
                            </div>
                            <div className="col s6 center-align">
                                <h5 className="fredoka">Sign Up for an Account</h5>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <form className="col s6 center-align login-form">
                            <div className="row">
                                <div className="input-field col s11">
                                    <i className="material-icons prefix">email</i>
                                    <input id="login-email" type="email" className="validate"></input>
                                    <label for="email">Email</label>
                                </div>
                            </div>
                                    <div className="input-field col s11">
                                        <i className="material-icons prefix">security</i>
                                        <input id="login-password" type="password" className="validate"></input>
                                        <label for="password">Password</label>
                                    </div>
                                    <button id="login-btn" className="btn waves-effect waves-light" type="submit" name="action">Login
                                    <i className="material-icons right">send</i>
                                    </button>
                        </form>

                        <form className="col s6 center-align signup-form">
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_add</i>
                                    <input id="signup-first-name" type="text" className="validate"></input>
                                        <label for="signup-first-name">First Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_add</i>
                                    <input id="signup-last-name" type="text" className="validate"></input>
                                    <label for="signup-last-name">Last Name</label>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input id="signup-email" type="email" className="validate"></input>
                                        <label for="signup-email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="signup-phone" type="tel" className="validate"></input>
                                        <label for="icon_telephone">Telephone </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">security</i>
                                        <input id="signup-password" type="password" className="validate"></input>
                                        <label for="signup-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <label for="signup-request-admin">
                                    <input id="signup-request-admin" type="checkbox"></input>
                                    <span>Request Administrative Priveledges?</span>
                                    </label>
                                </div>

                                <button id="signup-btn" className="btn waves-effect waves-light center-align" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

export default Login