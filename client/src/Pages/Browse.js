import React, { useState } from "react";
import Results from "../components/Results";
import { Container } from "@material-ui/core/";
import API from "../utils/API";
import Button from "../components/Button";
import { InlineWidget } from "react-calendly";

const Browse = ({ searchData, setSearchData }) => {
  /*

 Company =>  tours  (3) Same Calendar Different times


 1) Company A (1) Calendar  3 events A,B,C

*/

  //   const [url, setUrl] = useState();

  //   let style = {
  //     btn: { padding: 15, margin: 10 }
  //   };

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

      {/* <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/30min")}>
        {" "}
        Tour 1{" "}
      </button>
      <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/60min")}>
        {" "}
        Tour 2{" "}
      </button>
      <button style={style.btn} onClick={() => setUrl("https://calendly.com/kaimanimarine/snorkel-and-beach-bbq")}>
        {" "}
        Snorkel and BBQ{" "}
      </button>
      
      {url ? (
        <InlineWidget url={url} />
      ) : (
        <h5 style={{ color: "blue" }}> Select tour type to see details</h5>
      )} */}

      <Results searchData={searchData} setSearchData={setSearchData} />
    </Container>
  );
};

export default Browse;
