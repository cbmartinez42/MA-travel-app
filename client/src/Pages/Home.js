import React, {useContext} from 'react';
import Header from '../components/Header';
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";

const Home = () => {
  const { value, setValue } = useContext(UserContext);
    return (
        <div>
          <Header />
          <h2>{value}</h2>
          <button onClick={() => setValue("I'm an Admin")}>Set to Admin</button>
          <button onClick={() => setValue("I'm a User.")}>Set to User</button>
        </div>
    )
}


export default Home