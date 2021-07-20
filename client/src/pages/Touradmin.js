import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../utils/UserContext";
import {
  Grid,
  makeStyles,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";
import API from "../utils/API";
import Select from "@material-ui/core/Select";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "70ch",
    },
  },
}));

const CreateTour = () => {
  const history = useHistory();
  const classes = useStyles();
  const [createTour, setCreateTour] = useState({});
  const [tourOperators, setTourOperators] = useState([]);
  const [image, setImage] = useState(null);
  useEffect(() => {
    API.getTourOperators().then((response) => {
      setTourOperators(response.data || []);
    });
  }, []);

  const handleChange = (e) => {
    if (e.name === "image_file") {
      setImage(e.files);
    } else {
      setCreateTour({ ...createTour, [e.name]: e.value });

    }
  };

  const handleOperatorChange = (e) => {
    // console.log(e.target.value)
    setCreateTour({ ...createTour, tourOperator: e.target.value });
  };

  const handleCreateTour = async (e) => {
    e.preventDefault();
    try {
      const response = await API.createNewTour(createTour);
      // if image = null
      for (let i = 0; i < image.length; i++) {
        const imgRes = await API.addTourImg(response.data._id, image[i]);
        console.log(imgRes);
      }

      // console.log(response)

      if (response.status === 200) {
        console.log("FILE SENT");
        const res = response.data;
        history.push("/touradmin");
        alert('Tour created!')
        // window.location.refresh()
      } else {
        console.log("mas problemo");
      }
    } catch (err) {
      console.log("and error happened!", err);
    }
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
        <h2 className="fredoka">New Tour Form</h2>
        <form
          encType="multipart/form-data"
          className={classes.root}
          noValidate
          autoComplete="off"
        >
          <Grid container direction="column" alignItems="center">
            <div className="row">
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">local_activity</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="new-tour-name"
                      label="Tour Name"
                      name="tourName"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>

              <Select
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                
                value={createTour.tourOperator || ""}
                name="operator"
                variant="outlined"
                onChange={handleOperatorChange}
                // displayEmpty
                className="operator-dropdown"
                inputProps={{ "aria-label": "Without label" }}
              >
                {tourOperators.map((operator) => {
                  return (
                    <MenuItem key={operator._id} value={operator._id}>
                      {operator.name}
                    </MenuItem>
                  );
                })}
              </Select>


              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">location_on</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="departure-location-business-name"
                      label="Departure Location Name"
                      name="departureName"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">location_on</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="departure-location-street"
                      label="Departure Location Street"
                      name="street"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">location_on</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="departure-location-street2"
                      label="Departure Location Street2"
                      name="street2"
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
                      id="departure-location-city"
                      label="Departure Location City"
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
                    <i className="material-icons prefix">location_searching</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="departure-location-state"
                      label="Departure Location State / District"
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
                    <i className="material-icons prefix">location_searching</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="departure-location-zip"
                      label="Departure Location Zip Code"
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
                    <i className="material-icons prefix">email</i>
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
                    <i className="material-icons prefix">toc</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="new-tour-description"
                      label="Tour Description"
                      name="description"
                      variant="outlined"
                      multiline
                      rows={6}
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">add_location</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="tour-location"
                      label="Location of Tour"
                      name="tourLocation"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">cancel</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="cancellation-policy"
                      label="Cancellation Policy"
                      name="cancellationPolicy"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">access_alarms</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="start-times"
                      label="Start Times (ex. 9:00 am)"
                      name="startTimes"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">av_timer</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="duration"
                      label="Tour Duration (number only)"
                      name="duration"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">attach_money</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="tour-cost"
                      label="Tour Price (number only)"
                      name="cost"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              {/* <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">attach_money</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      id="additional-fees"
                      label="Additional Fees (number only)"
                      name="additionalFees"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div> */}
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">person_pin</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="max-capacity"
                      label="Maximum Capacity (number only)"
                      name="maxCapacity"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">person_pin</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="min-capacity"
                      label="Minimum Capacity (number only)"
                      name="minCapacity"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">vpn_key</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="keywords"
                      label="Tour Keywords"
                      name="keywords"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">beach_access</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="category"
                      label="Tour Category"
                      name="category"
                      variant="outlined"
                      onChange={(e) => handleChange(e.target)}
                    />
                  </Grid>
                </Grid>
              </div>

              <div className="input-field col s12">
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item>
                    <i className="material-icons prefix">event_available</i>
                  </Grid>
                  <Grid item>
                    <TextField
                      required
                      id="calendar"
                      label="Tour Calendar URL"
                      name="calendar"
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
                      type="file"
                      id="upload-image"
                      name="image_file"
                      inputProps={{ multiple: true }}
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
                onClick={handleCreateTour}
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

export default CreateTour;
