import React, {useContext} from 'react';
import { UserContext } from '../utils/UserContext';
// import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid'
import Logo from '../assets/logo-page001.jpeg'

const About = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <Grid container spacing={2}  className='about-container'>
            <Grid item xs={12} className='about-section'>
                <img src={Logo} alt="Deep Wild South Logo" className='logo'></img>
                <h2>About Us</h2>
                <p> Deep Wild South is a boutique tour agency for Southern Belize.  We promote sustainable and cultural immersions that are not only exceptional experiences for our guests, but also support the traditional lifestyles of our local indigenous communities, environmental conservation, and uplifting women and children. </p>
                {/* <h2>{value}</h2>
                <br></br>
            <Link to="/home">Go Home!</Link> */}
            </Grid>
        </Grid>
    )
}

export default About
