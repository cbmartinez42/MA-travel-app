import React, {useContext} from 'react';
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";

const Devabout = () => {
    const { value, setValue } = useContext(UserContext);
    return (
        <div>
            <h1> Do This site info and developer info</h1>
            <h2>{value}</h2>
            <br></br>
          <Link to="/home">Go Home!</Link>
        </div>
    )
}

export default Devabout
