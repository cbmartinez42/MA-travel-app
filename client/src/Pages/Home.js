import React, {useContext, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories'
import { UserContext } from '../utils/UserContext';
import { Link } from "react-router-dom";
import ImgCarousel from '../components/ImgCarousel'
import Grid from '@material-ui/core/Grid'
import API from '../utils/API'
import About from '../components/About'

const Home = ({searchData, setSearchData, searchBar, setSearchBar}) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    API.browseAllActivities()
    .then((response) => {
    setSearchData(response.data || [])
    });
}, [])

  const userWelcome = () =>{
    if (userInfo === 'NLI') {
      return
    } else {
      return <Grid item xs={12}  >
      <h2>Welcome {userInfo.namefirst} {userInfo.namelast}!</h2>
      </Grid>
    }
  }

    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} md={2} >
            <Categories 
              searchData={searchData} 
              setSearchData={setSearchData}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
            />
          </Grid>
          <Grid item xs={12} md={10}>
          <Grid container spacing={1}>
            
            {/* <Grid item xs={12}  > */}
            {userWelcome()}
            {/* <h2>Welcome {userInfo.namefirst} {userInfo.namelast}!</h2> */}
            {/* </Grid> */}
          </Grid>
          <Search 
            searchData={searchData}
            setSearchData={setSearchData}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
          <About />
          <h2 className="carousel-header">Do This. Because you've earned it.</h2>
          <ImgCarousel />
          </Grid>
          {/* <Grid item xs={12} md={2}>
            <div>Additional content </div>
          </Grid> */}
        </Grid>
      </>
    )
}


export default Home