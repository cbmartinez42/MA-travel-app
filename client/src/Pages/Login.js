import React, {useState} from "react";
// import Button from '../components/Button'
import Signup from "../components/Signup";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import API from '../utils/API'

const Login = () => {

    const [showSignUp, setShowSignUp] = useState(false);

    const[signin, setSignin] = useState({})

    const handleChange = (e) => {
        setSignin({...signin,[e.name]: e.value});
    }

    const handleLogin = (e) => {
        e.preventDefault()
        API.login(signin)
        .then((response) => {
            console.log('response >>', response)
            // setSearchData(response.data || [])
          })
        .catch(error => console.log(error))
    }

    return (
            <div>
                {/* Log in container */}
                <div className="container">
                <h2 className="fredoka" >Log in here!</h2>
                    <div className="row">
                        <Grid container direction="column" alignItems="center" >
                            <div className="input">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className="material-icons prefix">email</i>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            required
                                            className="Button"
                                            id="signin-email"
                                            label="Email"
                                            name="email"
                                            variant="outlined"
                                            onChange={(e) => handleChange(e.target)}
                                            />
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="input">
                                <Grid container spacing={1} alignItems="flex-end">
                                    <Grid item>
                                        <i className="material-icons prefix">security</i>
                                    </Grid>
                                    <Grid item>
                                        <TextField
                                            required
                                            id="signin-password"
                                            label="Password"
                                            name="password"
                                            variant="outlined"
                                            onChange={(e) => handleChange(e.target)}
                                            />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <form>
                            <Button
                                variant="contained"
                                style={{ margin: "2%" }}
                                color="primary"
                                id="login-btn"
                                name="action"
                                onClick={handleLogin}
                                // onClick={(e)=> {
                                // e.preventDefault();
                                // setShowSignUp(!showSignUp);
                                // }}
                            >Log In
                            </Button>
                            <div>or</div>
                            <Button
                                variant="contained"
                                style={{ margin: "2%" }}
                                color="primary"
                                onClick={(e)=> {
                                e.preventDefault();
                                setShowSignUp(!showSignUp);
                            }} >Create Account
                            </Button>
                        </form>
                </div>
            </div>
            {showSignUp && <Signup  />}
        </div>
    )
}

export default Login