import React from "react";
import { useState, useEffect } from "react";
import { Grid, makeStyles, Button, TextField, MenuItem} from "@material-ui/core";
import API from '../utils/API';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

const CreateTour = () => {
  const classes = useStyles();  
  const[createTour, setCreateTour] = useState({})
  const [tourOperators, setTourOperators] = useState([])

  useEffect(() => {
    API.getTourOperators()
    .then((response) => {
      setTourOperators(response.data || [])
    });
  }, [])
  
  const handleChange = (e) => {
    setCreateTour({...createTour,[e.name]: e.value});
  }

  const handleOperatorChange = (e) => {
    // console.log(e.target.value)
    setCreateTour({...createTour, tourOperator: e.target.value})
  }

  const handleCreateTour = (e) => {
    e.preventDefault();

      API.createNewTour(createTour)
      .then(result => {
          console.log('createNewTour Result: TOUR CREATED!!!', result)
      })
      .catch(err => {
          console.log('Oh my... there was an error: ',err.response)
      })
    }

  return (
      <div>
           {/* Create New Tour Container */}
           <div className="container">
           <h2 className="fredoka">New Tour Form</h2>
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
                                                id="new-tour-name"
                                                label="Tour Name"
                                                name="tourName"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div>
                                {/* TODO: Correctly link the objectID here */}

                                <Select
                                    // labelId="demo-simple-select-label"
                                    // id="demo-simple-select"
                                    value={createTour.tourOperator || ''}
                                    name='operator'
                                    onChange={handleOperatorChange}
                                    // displayEmpty
                                    className='operator-dropdown'
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                {tourOperators.map(operator => {
                                    return <MenuItem key={operator._id} value={operator._id}>{operator.name}</MenuItem>
                                })}
                                
                                </Select>
                                {/* <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">person_add</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="tour-operator"
                                                label="Tour Operator"
                                                name="tourOperator"
                                                variant="outlined"
                                                onChange={(e) => handleChange(e.target)}
                                                />
                                        </Grid>
                                    </Grid>
                                </div> */}
                                <div className="input-field col s12">
                                    <Grid container spacing={1} alignItems="flex-end">
                                        <Grid item>
                                            <i className="material-icons prefix">email</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="departure-location-street"
                                                label="Departure Location Street"
                                                name="departureLocation.street"
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
                                                id="departure-location-street2"
                                                label="Departure Location Street2"
                                                name="departureLocation.street2"
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
                                                name="departureLocation.city"
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
                                                id="departure-location-state"
                                                label="Departure Location State"
                                                name="departureLocation.state"
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
                                                id="departure-location-zip"
                                                label="Departure Location Zip Code"
                                                name="departureLocation.zip"
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
                                                id="new-tour-description"
                                                label="Tour Description"
                                                name="description"
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
                                            <i className="material-icons prefix">location_city</i>
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="start-times"
                                                label="Start Times"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="duration"
                                                label="Tour Duration"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="tour-cost"
                                                label="Cost"
                                                name="cost"
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
                                                id="additional-fees"
                                                label="Additional Fees"
                                                name="additionalFees"
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
                                                id="max-capacity"
                                                label="Max Capacity"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="min-capacity"
                                                label="Minimum Capacity"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="keywords"
                                                label="Keywords"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="category"
                                                label="Category"
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
                                            <i className="material-icons prefix">location_city</i>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                required
                                                id="image"
                                                label="Image"
                                                name="image"
                                                variant="outlined"
                                                // Connect to ImageUploader here
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
                            </div>
                            </Grid>
                        </form>
                    </div>
                </div> 
    )
};

export default CreateTour;
