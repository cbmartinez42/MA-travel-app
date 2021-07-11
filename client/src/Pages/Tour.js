import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Tour = () => {
  const [tourData, setTourData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    // fetch(infoUrl)
    API.findOneActivity(id)
      // .then(res => res.json())
      .then((response) => {
        setTourData(response.data || {});
        console.log("tourData >>>", tourData);
      });
  }, []);

  const consoleTourData = (data) => {
    console.log("tourData >> ", tourData);
  };

  const renderDetail = (data) => {
    console.log("data >> ", data);
  };

  const tourId = tourData._id;

  return (
    <div>
      <h1 onClick={()=>consoleTourData}>This page will show details of an individual tour.</h1>
      <Link to={"/book?" + tourId}>
        <Button
          onClick={() => renderDetail(tourId)}
          text="Book This!"
        />
      </Link>
      <p>{tourData.tourName}</p>
    </div>
  );
};

export default Tour;
