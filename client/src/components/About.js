
import Grid from "@material-ui/core/Grid";
import Logo from "../assets/logo-page001.jpeg";
import jungle from "../assets/jungleBackground.jpg";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";

const About = () => {
 
  return (
      <Grid className="about-container" container spacing={1}>
        {/* <Grid item xs={12}> */}
          {/* <Grid item md={3} /> */}
          <Grid item xs={12} lg={2}></Grid>
          <Grid item xs={12} lg={8} className="about-us-body">
                <h3 className="about-us-text">Deep Wild South is a boutique tour agency for Southern Belize.
                We promote sustainable and cultural immersions that are not only exceptional experiences for our guests, but also support the
                traditional lifestyles of our local indigenous communities,
                environmental conservation, and uplifting women and children.</h3>
              </Grid>

        </Grid>
  );
};

export default About;
