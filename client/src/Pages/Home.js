import React, {useContext} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories'
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";
import ImgCarousel from '../components/ImgCarousel'


import Grid from '@material-ui/core/Grid'

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2} >
            <Categories />
          </Grid>
          <Grid item xs={12} md={8} lg={8}>
          <Grid container spacing={1}>
            <Grid item xs={12}  >
            <h2>{userInfo.namefirst} {userInfo.namelast} your id is {userInfo._id}</h2>
            </Grid>
          </Grid>
          <Search />
          <h2 className="carousel-header">Do This. Because you've earned it.</h2>
          <ImgCarousel />
          </Grid>
          <Grid item xs={12} md={2}>
            <div>Additional content </div>
          </Grid>
        </Grid>
      </>
    )
}


export default Home