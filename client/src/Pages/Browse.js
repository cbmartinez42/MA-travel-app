import React, { useState } from "react";
import Results from "../components/Results";
import { Container } from "@material-ui/core/";
import API from "../utils/API";
import Button from "../components/Button";
import { InlineWidget } from "react-calendly";

const Browse = ({ searchData, setSearchData }) => {


  const openWeatherTest = (cityName) => {
    API.openWeather(cityName).then((response) => {
      console.log("openWeatherCall >>>", response);
    });
  };


  return (
    <Container maxWidth="lg">
      <div>
        <h4>
          This page will show search results from home screen as well as allow
          user to search by category of enter new search and show results.
        </h4>
        <Button onClick={() => openWeatherTest("Topeka")} text="Test OpenWeather in your Console!" />
      </div>

      <Results searchData={searchData} setSearchData={setSearchData} />
    </Container>
  );
};

export default Browse;
