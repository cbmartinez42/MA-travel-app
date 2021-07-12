import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams, useLocation } from "react-router-dom";

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

  return <div>this is the thank you page! it will populate the order info</div>;
};

export default Thankyou;
