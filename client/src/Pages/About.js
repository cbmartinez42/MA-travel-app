import React, {useContext} from 'react';
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";

const About = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <div>
            <h1> Deep Wild South is a boutique tour agency for Southern Belize.  We promote sustainable and cultural immersions that are not only exceptional experiences for our guests, but also support the traditional lifestyles of our local indigenous communities, environmental conservation, and uplifting women and children. </h1>
            <h2>{value}</h2>
            <br></br>
          <Link to="/home">Go Home!</Link>
        </div>
    )
}

export default About
