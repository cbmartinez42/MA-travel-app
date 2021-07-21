import React, { useContext } from "react";
import { UserContext } from "../utils/UserContext";
// import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../assets/logo-page001.jpeg";
import jungle from "../assets/jungleBackground.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const About = () => {
  const { value, setValue } = useContext(UserContext);

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Grid item md={3} />
          <Grid
            alignItems="center"
            spacing={0}
            justify="center"
            direction="column"
            item
            md={9}
            xs={12}
          >
            <Card className="card-about">
              <CardMedia
                className="card-image-about"
                component="img"
                height="auto"
                image={jungle}
              />
              <div className="aboutus-message">
                Deep Wild South is a boutique tour agency for Southern Belize.
                We promote sustainable and cultural immersions that are not only
                exceptional experiences for our guests, but also support the
                traditional lifestyles of our local indigenous communities,
                environmental conservation, and uplifting women and children.{" "}
              </div>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
