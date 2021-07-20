import React, { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import API from "../utils/API";

import { Link } from "react-router-dom";
import {Grid, Button, Box, Container} from '@material-ui/core'

import ImgCarousel from '../components/ImgCarousel'
import Categories from '../components/Categories'
import Search from '../components/Search'
import { UserContext } from "../utils/UserContext";

const Tour = ({searchData, setSearchData, searchBar, setSearchBar}) => {
  const [tourData, setTourData] = useState({});
  const { id } = useParams();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const history = useHistory();

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

  const renderDetail = (tourId) => {
    history.push("/book?" + tourId)
  };

  const tourId = tourData._id;
  const gotoLogin = () => history.push("/login");

  return (

      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <Categories 
            searchData={searchData} 
            setSearchData={setSearchData}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
        </Grid>
        <Grid item xs={12} md={8} className="detail-body">
          <Grid item xs={12} >
          <Search 
            searchData={searchData} 
            setSearchData={setSearchData}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
          </Grid>
          <Grid item xs={12}>
          <p className='tour-header tour-name'>{tourData.tourName}</p>
              <ImgCarousel 
                tourData={tourData}
              />
          </Grid>

          <Grid item xs={12}>

            <Box>
            <p>{tourData.operatorName}</p>
            <p>{tourData.description}</p>
            </Box>

            <Grid className="tour-details" container spacing={1}>
              <Grid item xs={12} className="tour-details-items">
                <h3>Know before you book:</h3>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
                <p>Available times: {tourData.startTimes}</p>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
                <p>Duration: {tourData.duration} hours</p>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
                <p>Tour Location: {tourData.tourLocation}</p>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
              <p>Cost per person: ${tourData.cost}</p>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
              <p>Min Capacity: {tourData.minCapacity}</p>
              </Grid>
              <Grid item xs={4} className="tour-details-items">
                <p>Max Capacity: {tourData.maxCapacity}</p>
              </Grid>
              <Grid item xs={12} className="tour-details-items">
              <p>Cancellation Policy: {tourData.cancellationPolicy}</p>
              </Grid>
            </Grid>

          </Grid>
          <Grid item xs={12}>
            <Button
                variant="contained"
                style={{ margin: "2%" }}
                color="primary"
                id="book-btn"
                name="action"
                onClick={() => {
                  if(userInfo==="NLI") {
                    gotoLogin();
                  } else {
                    renderDetail(tourId);
                  }
                }}
            >Book This
            </Button>
          </Grid>
        </Grid>
      </Grid>

  );
};

export default Tour;
