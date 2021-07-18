import React from "react";
import { useState, useEffect } from "react";
import { Grid, makeStyles, Button, TextField } from "@material-ui/core";
import API from "../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
    },
  },
}));

const CreateTourOperator = () => {
  const classes = useStyles();
  const [CreateTourOperator, setCreateTourOperator] = useState({});

  const handleChange = (e) => {
    setCreateTourOperator({ ...CreateTourOperator, [e.name]: e.value });
  };
  const handleCreateTourOperator = (e) => {
    console.log("CreateTourOperator = ", CreateTourOperator);
    // console logged...made it this far
    e.preventDefault();

    API.createNewTourOperator(CreateTourOperator)
      .then((result) => {
        console.log("createNewTourOperator Result: Operator added!!!", result);
        alert('Operator Created')
        // window.location.reload()
      })
      .catch((err) => {
        console.log("Oh my... there was an error: ", err.response);
      });
  };

  const handleReset = () => {
    Array.from(document.querySelectorAll("input"));
    this.setState({
      itemvalues: [{}],
    });
  };

  return (
    <div>
      {/* Create New Tour Container */}
      <div className="container">
        <h2 className="fredoka">New Tour Operator Form</h2>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container direction="column" alignItems="center">
            <div className="row">
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">person_add</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="tour-operator-name"
                      label="Tour Operator Name"
                      name="name"
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
                      id="address-street"
                      label="Street Address"
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
                    <i className="material-icons prefix">phone</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="address-street2"
                      label="Street Address 2"
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
                      id="city"
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
                      id="state"
                      label="State or District"
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
                      id="zip"
                      label="Zip Code"
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
                    <i className="material-icons prefix">location_city</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="new-tour-email"
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
                    <i className="material-icons prefix">location_city</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="new-tour-phone"
                      label="Phone"
                      name="phone"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              {/* <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="new-tour-license"
                                                label="Tour Operator License"
                                                name="license"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">photo_library</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="logo"
                                                label="Upload Logo"
                                                name="logo"
                                                variant="outlined"
                                                // TODO: link with image upload here
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div> */}
              {/* <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">photo_library</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="profile-picture"
                                                label="Upload Profile Picture"
                                                name="profilePicture"
                                                variant="outlined"
                                                // TODO: link with image upload here 
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div> */}

              <Button
                variant="contained"
                style={{ margin: "2%" }}
                color="primary"
                id="signup-btn"
                type="submit"
                name="action"
                onClick={handleCreateTourOperator}
              >
                SUBMIT
              </Button>
              <Button
                variant="contained"
                style={{ margin: "2%" }}
                color="primary"
                id="signup-btn"
                type="submit"
                name="action"
                onClick={handleReset}
              >
                Reset
              </Button>
            </div>
          </Grid>
        </form>
      </div>
    </div>
  );
};

export default CreateTourOperator;
