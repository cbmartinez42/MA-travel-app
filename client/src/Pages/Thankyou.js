import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams, useLocation } from "react-router-dom";
// import turtle from "../assets/turtle"

const Thankyou = () => {
  //states
  const [tourData, setTourData] = useState({});
  const [orderData, setOrderData] = useState({});

  //getting info from URL
  const params = useLocation();
  console.log("This is params>>>>>>", params);

  const tourId = params.search.substring(1);
  console.log("this is tour id>>>>>", tourId);

  // const orderID = params.search2.substring(1);

  // useEffect(() => {
  //   // fetch(infoUrl)
  //   API.findOneActivity(tourId)
  //     // .then(res => res.json())
  //     .then((response) => {
  //       setTourData(response.data || {});
  //       console.log("tourData >>>", tourData);
  //     });
  // }, []);

  return (
    <div>
      <img
        src= "../assets/turtle"
        alt="Turtle"
        class=" turtle-thankyou responsive-img"
      ></img>
      <p class="center-align">Thank you for your booking!</p>
      {/* <p class="center-align">Thank you for your booking, {{ first_name }}!</p> */}
      <p class="center-align">
        An email confirmation will be sent to your email address on file. Please
        contact deepwildsouth@gmail.com if you do not receive it within one hour of booking.
      </p>
    </div>
  );
};

export default Thankyou;
