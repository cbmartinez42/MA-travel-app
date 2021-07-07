import React from 'react'

const Signup = () => {
    return (
        <div>
           {/* Sign Up Container */}
           <div className="container">
                        <div className="row">
                                <div className="row custom-row">
                                    <div className="col s12 center-align">
                                        <h5 className="fredoka">Sign Up for an Account</h5>
                                    </div>
                                </div>
                            </div>
                        <form className="col s6 center-align signup-form">    
                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_add</i>
                                    <input id="signup-first-name" type="text" className="validate"></input>
                                        <label htmlFor="signup-first-name">First Name</label>
                                </div>
                                <div className="input-field col s12">
                                    <i className="material-icons prefix">person_add</i>
                                    <input id="signup-last-name" type="text" className="validate"></input>
                                    <label htmlFor="signup-last-name">Last Name</label>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">email</i>
                                        <input id="signup-email" type="email" className="validate"></input>
                                        <label htmlFor="signup-email">Email</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">phone</i>
                                        <input id="signup-phone" type="tel" className="validate"></input>
                                        <label htmlFor="icon_telephone">Telephone </label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">location_city</i>
                                        <input id="signup-address1" type="tel" className="validate"></input>
                                        <label htmlFor="icon_telephone">Address 1</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">location_city</i>
                                        <input id="signup-address2" type="tel" className="validate"></input>
                                        <label htmlFor="icon_telephone">Address 2</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">location_city</i>
                                        <input id="signup-city" type="tel" className="validate"></input>
                                        <label htmlFor="icon_telephone">City</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">location_city</i>
                                        <input id="signup-state" type="tel" className="validate"></input>
                                        <label htmlFor="icon_state">State</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">location_city</i>
                                        <input id="signup-postalcode" type="tel" className="validate"></input>
                                        <label htmlFor="icon_telephone">Zip</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <i className="material-icons prefix">security</i>
                                        <input id="signup-password" type="password" className="validate"></input>
                                        <label htmlFor="signup-password">Password</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <label htmlFor="signup-request-admin">
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
    )
}

export default Signup
