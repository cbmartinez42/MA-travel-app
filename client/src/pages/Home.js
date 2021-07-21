import React, {useContext, useEffect} from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories'
import { UserContext } from '../utils/UserContext';
import ImgCarousel from '../components/ImgCarousel';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import About from '../components/About';


const Home = ({ searchData, setSearchData, searchBar, setSearchBar }) => {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    API.browseAllActivities().then((response) => {
      setSearchData(response.data || []);
    });
  }, []);

  const userWelcome = () => {
    if (userInfo === "NLI") {
      return;
    } else {
      return (
        <Grid item xs={12}>
          <h2 className = "log-in-create-account">
            Welcome {userInfo.namefirst} {userInfo.namelast}!
          </h2>
        </Grid>
      );
    }
  };

  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} md={2}>
          <Categories
            searchData={searchData}
            setSearchData={setSearchData}
            searchBar={searchBar}
            setSearchBar={setSearchBar}
          />
        </Grid>
        <Grid item xs={12} md={10}>
          <Grid container spacing={1}>
            {userWelcome()}
          </Grid>

          <Grid className="searchHeaderContainer" container>
            <Grid xs={12} md={12} item>
              {/* <h2 className="lead-question">How will you adventure?</h2> */}
            </Grid>
            <Grid xs={12} md={12}>
              <Search
                container
                item
                searchData={searchData}
                setSearchData={setSearchData}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            </Grid>
          </Grid>
          <h2 className="lead-question">How will you adventure?</h2>
          <Grid container justifyContent="center">
            <ImgCarousel />
            <About />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
