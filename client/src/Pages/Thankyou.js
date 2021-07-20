import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams, useLocation } from "react-router-dom";
import turtle from "../assets/turtle.jpg"
import {
  Grid,
  Button,
  Container,
  Box
} from "@material-ui/core";

const Thankyou = () => {
  //states
  const [tourData, setTourData] = useState({});
  const [bookingInfo, setBookingInfo] = useState({});

  //getting info from URL
  const params = useLocation();
  console.log("This is params>>>>>>", params);
  const paramSubstring = params.search.split("?")
  const tourId = paramSubstring[1]
  const bookingEmail = paramSubstring[2]
 
  const findActivity=()=>{    
    // fetch(infoUrl)
    API.findOneActivity(tourId)
      // .then(res => res.json())
      .then((response) => {
        setTourData(response.data || {});
        console.log("tourData >>>", tourData)
      })
  }

  const findBooking=()=>{    
    API.findOneBooking(bookingEmail)
    .then((response)=>{
      console.log(response.data)
      response.data ? setBookingInfo(response || {}) : console.log('APIs are worthless!!')
    console.log("bookingInfo >>>", bookingInfo);
    })}

  useEffect(async () =>  {
    API.findOneActivity(tourId)
    // .then(res => res.json())
    .then((response) => {
      // console.log(response)
      // console.log(response.data)
      setTourData(response.data || {});
      console.log("tourData >>>", tourData)
    }).then(findBooking)
      
  }, []);

  return (
    <div>
      {/* <h1 onClick={()=>{console.log("here is tour data>>>and here is bookingInfo")
    console.log(bookingInfo); console.log(tourData)}}>TOUR DATA</h1> */}
      <Container maxSize="sm">
        <figure className= "turtle-thankyou"> Thank you
      {/* <img
        src= {turtle}
        alt="Turtle"
        className=" turtle-thankyou responsive-img"
      ></img> */}
      </figure>
      </Container>
      <h2 className="center-align thankyou-booking">Thank you for your booking your tour with {tourData.tourName}</h2>
      {/* <p class="center-align">Thank you for your booking, {{ first_name }}!</p> */}
      <p className="center-align">
        An email confirmation will be sent to your email address on file. Please
        contact deepwildsouth@gmail.com if you do not receive it within one hour of booking.
      </p>
    </div>
  );
};

export default Thankyou;
