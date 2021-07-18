import React, { useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import { InlineWidget } from "react-calendly";
import Terms from "./Terms";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  Button,
  Paper,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Container,
  Icon,
  Box
} from "@material-ui/core";
import { useParams, useLocation, Link } from "react-router-dom";
import API from "../utils/API";
import Payment from "./../components/Payment";
import { UserContext } from "../utils/UserContext";
import { blue } from "@material-ui/core/colors";
import { LooksTwo, LooksOne, Looks3 } from "@material-ui/icons";
// import Icon from '@material-ui/core/Icon';

const Book = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [tourData, setTourData] = useState({});
  const [tourImage, setTourImage] = useState("");
  const params = useLocation();
  const tourId = params.search.substring(1);

  useEffect(() => {
    // fetch(infoUrl)
    API.findOneActivity(tourId)
      // .then(res => res.json())
      .then((response) => {
        setTourData(response.data || {});
        console.log("tourData >>>", tourData);
      });
  }, []);

  useEffect(() => {
    console.log(tourData.image);
    if (tourData.image) {
      setTourImage(tourData.image[0]);
    }
    setUrl(tourData.calendar);
  }, [tourData]);

  //STATES
  //State to show pricing after submit button clicked
  const [showPricing, setshowPricing] = useState(false);
  //state to show signUp form for new booking
  const [showForm, setShowForm] = useState(false);

  //how many participants did the user input in the form?
  const [participants, setParticipants] = useState(1);

  // checkout info from paypal
  const [checkout, setCheckout] = useState(false);

  // setting the particpants state on change to the input form
  const addParticipants = (e) => {
    setParticipants(e.value);
  };

  //current URL
  const [url, setUrl] = useState();
  //capturing inputs for API call
  const [bookingDetails, setBookingDetails] = useState({});
  const [populateForm, setPopulateForm] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  //on click, set the FORM reveal to whatever the opposite
  const revealForm = () => {
    setShowForm(!showForm);
  };

  //whenver something is typed into an input, change the state to reflect that change
  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.name]: e.value });
    console.log(bookingDetails);
  };

  //on SUBMIT click, call the API, hide the booking form, reveal the Calendly Link
  const revealCalendar = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
    setShowCalendar(true)

  };

  //on BUTTON click, reveal payment Information. If user decides not to pay, nothing happens and they still have their booking
  const showPayment = (e) => {
    e.preventDefault();
    setshowPricing(true);
  }

  const autoPopulateForm = (e) => {
    e.preventDefault();
    console.log(userInfo);
    setPopulateForm(!populateForm);
  };

  let style = {
    btn: { padding: 15, margin: 10 },
  };

  //table variable information and functions

  const TAX_RATE = 0.125;

  const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 700,
    },
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "55ch",
      },
    },
  }));

  const classes = useStyles();

  //format the numbers in the table
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  //multipling variables in the table to get the final price
  function priceRow(qty, unit) {
    return qty * unit;
  }

  //funtion to create the row
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }

  //mapping the items in the "items" array to the columns
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }

  let rows = [];

  tourData.additionalFees
    ? (rows = [
        createRow(tourData.tourName, participants, tourData.cost),
        createRow("Additional Fees", 1, tourData.additionalFees),
      ])
    : (rows = [createRow(tourData.tourName, participants, tourData.cost)]);

  //creating variables to get the final prices and subtotals based on previous variables
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <div>
        <div>
          <Container maxWidth="md">
            {" "}
            <div>
              {/* tour info card */}
              <Container>
                <Box key={tourData._id} className="tour-abstract">
                  <Box className="abstract-header">
                    <h2>{tourData.tourName}</h2>
                  </Box>
                  <Grid container spacing={3}>
                    <Grid item xs>
                      {tourImage ? (
                        <img
                          alt="Tour"
                          className="tour-thumbnail"
                          src={tourImage}
                        ></img>
                      ) : (
                        <></>
                      )}
                    </Grid>
                    <Grid item md>
                      <p>Location: {tourData.tourLocation}</p>
                      <p>Cost: ${tourData.cost}</p>
                      <p>Operated by: {tourData.operatorName}</p>
                    </Grid>
                  </Grid>
                </Box>
              </Container>
            </div>
            <div>

              <Box>
                <h2>How to Sign up For a Tour</h2>
                <ul className="no-bullet">
                  <li>
                    <Icon color="primary" >looks_one</Icon> Enter Your Booking Information!
                  </li>
                  <li>
                    <Icon color="primary" >looks_two</Icon> Enter a Date and Time into the Calendar!
                  </li>
                  <li>
                    <Icon color="primary" >looks_3</Icon> Enter Payment Information to Save Your
                    Spot!
                  </li>
                </ul>
              </Box>
            </div>


            Continuing with this booking indicates that you have read and agreed to the terms presented in the <Link to='/terms' target="_blank" rel="noopener noreferrer">Terms and Conditions</Link> agreement.

          </Container>
        </div>
        {/* Sign Up Container */}
        <div className="container">
          <Button
            variant="contained"
            style={{ margin: "2%" }}
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              revealForm();
            }}
          >
            Click to Enter Your Booking Information!
          </Button>
          {/*If showForm STATE is false then display NULL*/}
          {/*the state is switched every time the button is clicked*/}
          {!showForm ? null : (
            <form>
              <Grid container direction="column" alignItems="center">
                <div className="row">
                  {/* The button below will populate a form with the UserInfo already populated. form currently not working */}
                  {/* <Button 
                    onClick={(e)=>autoPopulateForm(e)}
                    variant="contained"
                    style={{ margin: "3%" }}
                    color="primary"
                  >
                    Autopopulate?
                  </Button> */}

                  {!populateForm ? (
                    //THIS BLANK FORM RENDERS IF AUTOPOPULATE BUTTON IS NOT PRESSED
                    <div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">person_add</i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              // value={!bookingDetails ? "" : userInfo.nameFirst}
                              id="signup-full-name"
                              label="First Name"
                              name="firstName"
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
                              id="signup-full-name"
                              label="Last Name"
                              name="lastName"
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
                              label="Best Email"
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
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-address1"
                              label="Address 1"
                              name="addressStreet"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              id="signup-address2"
                              label="Address 2"
                              name="addressStreet2"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-city"
                              label="City"
                              name="addressCity"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-state"
                              label="State"
                              name="addressState"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-zip"
                              label="Zip"
                              name="addressZip"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              accessibility
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-specialrequirements"
                              label="Special Requirements?"
                              name="specialRequirements"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">face</i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-participants"
                              label="Participants? Ex: 2"
                              name="participants"
                              variant="outlined"
                              onChange={(e) => {
                                handleChange(e.target);
                                addParticipants(e.target);
                              }}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  ) : (
                    // THIS DUPLICATE RENDERS WHEN AUTOPOPULATE BUTTON IS PRESSED
                    <div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">person_add</i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              value={userInfo.namefirst}
                              id="signup-first-name"
                              label="First Name"
                              name="firstName"
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
                              value={userInfo.namelast}
                              id="signup-last-name"
                              label="Last Name"
                              name="lastName"
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
                              label="Best Email"
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
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-address1"
                              label="Address 1"
                              name="addressStreet"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              id="signup-address2"
                              label="Address 2"
                              name="addressStreet2"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-city"
                              label="City"
                              name="addressCity"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>
                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-state"
                              label="State"
                              name="addressState"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              location_city
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-zip"
                              label="Zip"
                              name="addressZip"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">
                              accessibility
                            </i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-specialrequirements"
                              label="Special Requirements?"
                              name="specialRequirements"
                              variant="outlined"
                              onChange={(e) => handleChange(e.target)}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <div className="input-field col s12">
                        <Grid container spacing={1} alignItems="flex-end">
                          <Grid item>
                            <i className="material-icons prefix">face</i>
                          </Grid>
                          <Grid item>
                            <TextField
                              required
                              id="signup-participants"
                              label="Participants? Ex: 2"
                              name="participants"
                              variant="outlined"
                              onChange={(e) => {
                                handleChange(e.target);
                                addParticipants(e.target);
                              }}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </div>
                  )}

                  {/* SUBMIT booking information  */}
                  <Button
                    variant="contained"
                    style={{ margin: "2%" }}
                    color="primary"
                    id="signup-btn"
                    type="submit"
                    name="action"
                    onClick={revealCalendar}
                  >
                    SUBMIT
                  </Button>
                </div>
              </Grid>
            </form>
          )}
        </div>
        {/* calendar for selected tour */}
        {!showCalendar ? null : (
          <>
                   <div>
              <Box>
                <ul className="no-bullet">
                  <li>
                    <Icon color="primary" >looks_two</Icon> Enter a Date and Time into the Calendar!
                  </li>
                </ul>
              </Box>
            </div>
        <div>
          {url ? (
            <InlineWidget url={tourData.calendar} />
          ) : (
            <h5 style={{ color: "blue" }}> Select tour type to see details</h5>
          )}
        </div>{" "}
        
        <Button
                    variant="contained"
                    style={{ margin: "2%" }}
                    color="primary"
                    id="signup-btn"
                    type="submit"
                    name="action"
                    onClick={showPayment}
                  >
                    PAY TO SAVE YOUR SPOT
                  </Button></>)}

        {/* Pricing Container */}
        <div>
          {/*If showPricing STATE is false then display NULL*/}
          {!showPricing ? null : (
            <div>
                                 <div>
              <Box>
                <ul className="no-bullet">
                  <li>
                    <Icon color="primary" >looks_3</Icon> Pay to save your spot!
                  </li>
                </ul>
              </Box>
            </div>
              <div>
                <h2 style={{ textDecoration: "underline" }}>
                  Payment information
                </h2>
                <Container maxWidth="md">
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      aria-label="spanning table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="center" colSpan={2}>
                            Details
                          </TableCell>
                          <TableCell align="right">Price</TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Desc</TableCell>
                          <TableCell align="right">Participants</TableCell>
                          <TableCell align="right">Sum</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody>
                        {rows.map((row) => (
                          <TableRow key={row.desc}>
                            <TableCell>{`${row.desc}`}</TableCell>
                            <TableCell align="right">{`${row.qty}`}</TableCell>
                            <TableCell align="right">
                              {ccyFormat(row.price)}
                            </TableCell>
                          </TableRow>
                        ))}

                        <TableRow>
                          <TableCell rowSpan={1} />
                          <TableCell colSpan={1} align="left">
                            Subtotal
                          </TableCell>
                          <TableCell align="right">
                            {ccyFormat(invoiceSubtotal)}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>Tax</TableCell>
                          <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
                            0
                          )} %`}</TableCell>
                          <TableCell align="right">
                            {ccyFormat(invoiceTaxes)}
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell colSpan={1}>Total</TableCell>
                          <TableCell align="right">
                            {ccyFormat(invoiceTotal)}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </div>
              <div>
                {checkout ? (
                  <Payment
                    bookingDetails={bookingDetails}
                    tourObject={tourData}
                    name={tourData.tourName}
                    total={invoiceTotal}
                    taxes={invoiceTaxes}
                    initalCost={invoiceSubtotal}
                  />
                ) : (
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ margin: "2%" }}
                    onClick={() => {
                      setCheckout(true);
                    }}
                  >
                    checkout
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
