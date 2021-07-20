import React, {useState, useContext} from "react";
// import Button from '../components/Button'
import { UserContext } from '../utils/UserContext';
import Signup from "../components/Signup";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import API from '../utils/API'
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '45ch',
      },
    },
  }));


const Login = () => {

    const { userInfo, setUserInfo } = useContext(UserContext);

    const [showSignUp, setShowSignUp] = useState(false);

    const[signin, setSignin] = useState({})

    const[loginError, setLoginError] = useState("")

    const handleChange = (e) => {
        // setUserInfo({...userInfo,[e.name]: e.value})
        setSignin({...signin,[e.name]: e.value});
    }
    const history = useHistory();

    const handleLogin = (e) => {
        e.preventDefault()
        API.login(signin)
        .then((response) => {
            // console.log('response >>', response);
            if(response.data.message === "Bummer") {
                setLoginError("There was a problem with your user name or password.")
                } else {
                setUserInfo({"_id": response.data.user._id, "role": response.data.user.role, "namefirst": response.data.user.name.first, "namelast": response.data.user.name.last});
                history.push('/home');
                }
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
                                            type="password"
                                            label="Password"
                                            name="password"
                                            variant="outlined"
                                            onChange={(e) => handleChange(e.target)}
                                            />
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                        <div style={{ color: 'red' }}>{loginError}</div>
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