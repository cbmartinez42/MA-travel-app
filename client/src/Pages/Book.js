import React, { useState } from "react";
import { InlineWidget } from "react-calendly";
import Signup from "../components/Signup";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Payment from "./../components/Payment"

import API from "../utils/API";

const Book = ({ searchData, setSearchData }) => {
  /*
 Company =>  tours  (3) Same Calendar Different times
 1) Company A (1) Calendar  3 events A,B,C
*/

  //STATES
  //State to show pricing after submit button clicked
  const [showPricing, setshowPricing] = useState(false);
  //state to show signUp form for new booking
  const [showForm, setShowForm] = useState(false);

  const [participants, setParticipants] = useState(1);

  const addParticipants = (e)=>{
    setParticipants(e.value)
  }
  

  //current URL
  const [url, setUrl] = useState();
  //capturing inputs for API call
  const [bookingDetails, setBookingDetails] = useState({});

  //on click, set the FORM reveal to whatever the opposite
  const revealForm = () => {
    setShowForm(!showForm);
  };

  //whenver something is typed into an input, change the state to reflect that change
  const handleChange = (e) => {
    setBookingDetails({ ...bookingDetails, [e.name]: e.value });
  };

  //on SUBMIT click, call the API, hide the booking form, reveal the Payment Info
  const handleBooking = (e) => {
    e.preventDefault();
    API.createNewBooking(bookingDetails)
      .then((response) => {
        console.log("response >>", response);
        // setSearchData(response.data || [])
      })
      .catch((error) => console.log(error));
    setShowForm(!showForm);
    setshowPricing(true);
  };

  let style = {
    btn: { padding: 15, margin: 10 },
  };

  //table variable information and functions

  const TAX_RATE = 0.07;

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

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

  const rows = [
    createRow("Activity Name", participants, 128342),
    createRow("Paper (Case)", 10, 45.99),
    createRow("Waste Basket", 2, 17.99),
  ];

  //creating variables to get the final prices and subtotals based on previous variables
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      <div>
        <div>
          <h3>
            Show Tour Details HERE! (Name, Image, Location, price, description)
          </h3>
          <h3>
            These buttons open a calendar to the correct tour, but we should
            populate this calendar based on the info passed from the previous
            page
          </h3>
          <div>
            <button
              style={style.btn}
              onClick={() => setUrl("https://calendly.com/kaimanimarine/30min")}
            >
              {" "}
              Tour 1{" "}
            </button>
            <button
              style={style.btn}
              onClick={() => setUrl("https://calendly.com/kaimanimarine/60min")}
            >
              {" "}
              Tour 2{" "}
            </button>
            <button
              style={style.btn}
              onClick={() =>
                setUrl(
                  "https://calendly.com/kaimanimarine/snorkel-and-beach-bbq"
                )
              }
            >
              {" "}
              Snorkel and BBQ{" "}
            </button>

            {url ? (
              <InlineWidget url={url} />
            ) : (
              <h5 style={{ color: "blue" }}>
                {" "}
                Select tour type to see details
              </h5>
            )}
          </div>
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
                  <div className="input-field col s12">
                    <Grid container spacing={1} alignItems="flex-end">
                      <Grid item>
                        <i className="material-icons prefix">person_add</i>
                      </Grid>
                      <Grid item>
                        <TextField
                          required
                          id="signup-full-name"
                          label="Full Name"
                          name="name.full"
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
                        <i className="material-icons prefix">accessibility</i>
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
                    onClick={handleBooking}
                  >
                    SUBMIT
                  </Button>
                </div>
              </Grid>
            </form>
          )}
        </div>
           {/* Pricing Container */}
        <div>
             {/*If showPricing STATE is false then display NULL*/}
          {showPricing ? null : (
            <div>
              <h2 style={{ textDecoration: "underline" }}>
                Payment information
              </h2>
              <Container maxWidth="md">
                <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="spanning table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center" colSpan={2}>
                          Details
                        </TableCell>
                        <TableCell align="right">Price</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>Desc</TableCell>
                        <TableCell align="right">Qty.</TableCell>
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
                        <TableCell colSpan={1} align="left">Subtotal</TableCell>
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
          )}
        </div>
      </div>
    </>
  );
};

export default Book;
