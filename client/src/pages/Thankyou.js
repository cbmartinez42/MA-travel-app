import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useLocation } from "react-router-dom";
import turtle from "../assets/turtle.jpg";
import { Grid } from "@material-ui/core";

const Thankyou = () => {
  //states
  const [tourData, setTourData] = useState({});
  const [bookingInfo, setBookingInfo] = useState({});

  //getting info from URL
  const params = useLocation();
  const paramSubstring = params.search.split("?");
  const tourId = paramSubstring[1];
  const bookingEmail = paramSubstring[2];

  // const findActivity = () => {
  //   // fetch(infoUrl)
  //   API.findOneActivity(tourId)
  //     // .then(res => res.json())
  //     .then((response) => {
  //       setTourData(response.data || {});
  //     });
  // };

  const findBooking = () => {
    API.findOneBooking(bookingEmail).then((response) => {
      response.data
        ? setBookingInfo(response || {})
        : console.log("Oops!!");

    });
  };

  useEffect( () => {
    API.findOneActivity(tourId)
      // .then(res => res.json())
      .then((response) => {
        // console.log(response)
        // console.log(response.data)
        setTourData(response.data || {});
        console.log("tourData >>>", tourData);
      })
      .then(findBooking);
  }, []);

  // useEffect(() => {
  //   console.log('tourdata part deux ', tourData)
  // }, [tourData])

  const myStyle = {
    bold: {"font-weight": "bold"},
    bgColor: {"background-image": "linear-gradient(#FFFFFF, #84B2F7)"}
  };

  const imageStyle = {
    "width": 300,
    "height": "auto"
  };

const containerStyle={
  container: {
    "position": "relative",
    "text-align": "center",
    "color": "white",

  },
  text: {

      "position": "absolute",
      "top": "80%",
      "left": "50%",
      "font-weight": "bold",
      "font-size": "1.5rem",
      "transform": "translate(-50%, -400%)"
      
  }
}

  return (

    <div style={myStyle.bgColor}>
    <Grid container spacing={1}>
      
      <Grid item xs={12} className="thankyou-message-image">
        <Grid item xs={12} >
          <div style={containerStyle.container}>
          <img style={imageStyle}
            src={turtle}
            alt="Turtle"
            className=" turtle-thankyou responsive-img"
          ></img>
          <div style={containerStyle.text} className="thankyou-message">Thank You!</div>
          </div>
        </Grid>



        <Grid item xs={12}>
          <h2 className="center-align thank-you-header">
            Thank you for your booking your tour with {tourData.tourName}
          </h2>
          <p className="center-align thank-you-body">
            An email confirmation will be sent to your email address on file.
          </p>
          <p className="center-align thank-you-body">
            Please contact deepwildsouth@gmail.com if you do not receive it
            within one hour of booking.
          </p>
        </Grid>
        <Grid item xs={12} className="center-align thank-you-body">
          <p>
            <span style={myStyle.bold}>Tour Name:</span> {tourData.tourName}
          </p>
          <p>
            <span style={myStyle.bold}>Tour Location:</span> {tourData.tourLocation}
          </p>
          {/* {!bookingInfo.data.totalCost ? null :
          (<p><span style={myStyle.bold}>Total Cost:</span> ${bookingInfo.data.totalCost}</p>)} */}
          <p>
            <span style={myStyle.bold}>Tour Email Address:</span> {tourData.email}
          </p>
          <p>
            <span style={myStyle.bold}>Cancellation Policy:</span>{tourData.cancellationPolicy}
          </p>

      </Grid>

      </Grid>
    </Grid>

    </div>
  );
};

export default Thankyou;
