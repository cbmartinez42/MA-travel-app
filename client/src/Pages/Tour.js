import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import {Grid, Container} from '@material-ui/core'
import ImgCarousel from '../components/ImgCarousel'
// import Image from 'material-ui-image'
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';

const Tour = () => {
  const [tourData, setTourData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.findOneActivity(id)
      .then((response) => {
        setTourData(response.data || {});
        console.log("tourData >>>", tourData);
      })
      .catch(err => console.log('this sucks >>> ', err)) 
  }, []);

  useEffect(() => {
    console.log('tourdata part deux ', tourData)
  }, [tourData])

  const renderDetail = (data) => {
    console.log("data >> ", data);
  };

  const tourId = tourData._id;

  return (
    <Container maxWidth="lg">
      {/* <h1 onClick={()=>consoleTourData}>This page will show details of an individual tour.</h1> */}
      <Grid container spacing={1}>
      
        <Grid item xs={12}>
        <p className='tour-header tour-name'>{tourData.tourName}</p>
          {/* <Grid item xs={12} className='carousel-container'> */}
            <ImgCarousel 
              tourData={tourData}
            />
          {/* </Grid> */}
        </Grid>
        <Grid item xs={12}>

          
          <p>{tourData.tourLocation}</p>
          <p>{tourData.description}</p>
          <Grid className="tour-details" container spacing={1}>
            <Grid item xs={12}>
              <h3>Know before you book!</h3>
            </Grid>
            <Grid item xs={4}>
              <p>Available times: {tourData.startTimes}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Duration: {tourData.duration}</p>
            </Grid>
            <Grid item xs={4}>
              <p>Cost per person: ${tourData.cost}</p>
            </Grid>
            <Grid item xs={12}>
            <p>Cancellations: {tourData.cancellationPolicy}</p>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          
        <Link to={"/book?" + tourId}>
          <Button
            onClick={() => renderDetail(tourId)}
            text="Book This!"
          />
        </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Tour;
