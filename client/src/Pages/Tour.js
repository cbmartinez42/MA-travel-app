import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../utils/API";
import { Link } from "react-router-dom";
import {Grid, Container, Button, Box} from '@material-ui/core'
import ImgCarousel from '../components/ImgCarousel'
import Categories from '../components/Categories'
import Search from '../components/Search'

const Tour = () => {
  const [tourData, setTourData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    API.findOneActivity(id)
      .then((response) => {
        setTourData(response.data || {});
      })
      .catch(err => console.log('Bummer >>> ', err)) 
  }, []);

  useEffect(() => {
    console.log('tourdata part deux ', tourData)
  }, [tourData])

  const renderDetail = (data) => {
    console.log("data >> ", data);
  };

  const tourId = tourData._id;

  return (

      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Categories />
        </Grid>
        <Grid item xs={8}>
          <Grid item xs={12}>
          <Search />
          </Grid>
          <Grid item xs={12}>
          <p className='tour-header tour-name'>{tourData.tourName}</p>
              <ImgCarousel 
                tourData={tourData}
              />
          </Grid>
          <Grid item xs={12}>
            {/* <Container  maxWidth="md"> */}
            <Box>
              {/* tour operator here: */}
            <p>{tourData.operatorName}</p>
            <p>{tourData.description}</p>
            </Box>
            {/* </Container> */}
            {/* <Container maxWidth="lg"> */}
            <Grid className="tour-details" container spacing={1}>
              <Grid item xs={12}>
                <h3>Know before you book!</h3>
              </Grid>
              <Grid item xs={4}>
                <p>Available times: {tourData.startTimes}</p>
              </Grid>
              <Grid item xs={4}>
                <p>Duration: {tourData.duration} hours</p>
              </Grid>
              <Grid item xs={4}>
                <p>Cost per person: ${tourData.cost}</p>
              </Grid>
              <Grid item xs={12}>
              <p>Cancellation Policy: {tourData.cancellationPolicy}</p>
              </Grid>
            </Grid>
            {/* </Container> */}
          </Grid>
          <Grid item xs={12}>
            
          <Link to={"/book?" + tourId}>


            <Button
                variant="contained"
                style={{ margin: "2%" }}
                color="primary"
                id="book-btn"
                name="action"
                onClick={() => renderDetail(tourId)}
            >Book This
            </Button>
          </Link>
          </Grid>
        </Grid>
        {/* <Grid item xs={12} md={2}>
          <div>Additional content </div>
        </Grid> */}
      </Grid>

  );
};

export default Tour;
