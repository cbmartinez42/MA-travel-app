import React from 'react';
import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

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
        console.log(e);
        setSignup({...signup,[e.name]: e.value});
    }

    return (
        <div>
           {/* Sign Up Container */}
           <div className="container">
           <h2 className="fredoka">Sign Up for an Account</h2>
                        <form className={classes.root} noValidate autoComplete="off" >
                        <Grid container direction="column" justifyContent="center" alignItems="center" > 
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
                                                name="firstname"
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
                                                name="lastname"
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
                                                name="address1"
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
                                                name="address2"
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
                                                name="city"
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
                                                name="state"
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
                                                name="zip"
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
                                                name="security"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <Button
                                    classes="btn"
                                    variant="contained"
                                    style={{ margin: "2%" }}
                                    color="primary"
                                    id="signup-btn"
                                    type="submit"
                                    name="action"
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
