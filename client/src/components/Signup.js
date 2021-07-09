import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));


const Signup = () => {
    const classes = useStyles();
    // const[firstName, setFirstName] = useState('')

    const[signup, setSignup] = useState({})

    const handleChange = (e) => {
        setSignup({...signup,[e.name]: e.value});
    }

    const handleSignup = (e) => {
        // e.preventDefault();
        // console.log('signup = ',signup);
        API.signUpUser(signup)
        .then(result => {
            console.log('SignUpUser Result: USER CREATED!!!', result)
        })
        .catch(err => {
            console.log('Oh my... there was an error: ',err.response)
        })
    }

    return (
        <div>
           {/* Sign Up Container */}
           <div className="container">
           <h2 className="fredoka">Sign Up for an Account</h2>
                        <form className={classes.root} noValidate autoComplete="off" >
                        <Grid container direction="column" alignItems="center" > 
                            <div className="row">
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">person_add</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-first-name"
                                                label="First Name"
                                                name="name.first"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">person_add</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-last-name"
                                                label="Last Name"
                                                name="name.last"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">email</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-email"
                                                label="Email"
                                                name="email"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">phone</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-phone"
                                                label="Phone Number"
                                                name="phone"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-address1"
                                                label="Address 1"
                                                name="address.street"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                id="signup-address2"
                                                label="Address 2"
                                                name="address.street2"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-city"
                                                label="City"
                                                name="address.city"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-state"
                                                label="State"
                                                name="address.state"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-zip"
                                                label="Zip"
                                                name="address.zip"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">security</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="signup-security"
                                                label="Password"
                                                name="password"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Button
                                    variant="contained"
                                    style={{ margin: "2%" }}
                                    color="primary"
                                    id="signup-btn"
                                    type="submit"
                                    name="action"
                                    onClick={handleSignup}
                                    >
                                    SUBMIT
                                </Button>
                            </div>
                            </Grid>
                        </form>
                    </div>
                </div> 
    )
}

export default Signup
