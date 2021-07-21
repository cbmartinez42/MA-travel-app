import {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
// import Button from "../components/Button"
// import Tour from "../pages/Tour";
import {Link, useLocation} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Results = ({searchData, setSearchData, searchBar, setSearchBar}) => {

    const params = useLocation();
    const paramsArray = params.pathname.split('/')
    const category = paramsArray[paramsArray.length -1]
    // const category = params.search.substring(1);
    console.log('category', category);
    console.log('searchdata', searchData)
    

    return (
        <>
            <Container maxWidth="md">
                {searchData.filter(tours => tours?.keywords.join(' ').toUpperCase().includes(searchBar.toUpperCase())).map(search => (
                   
                    <Link 
                        className="abstract-link" 
                        to={"/tour/" + search._id}
                        searchData={searchData} 
                        setSearchData={setSearchData}
                        searchBar={searchBar}
                        setSearchBar={setSearchBar}
                        >
                        <Box key={search._id} className="tour-abstract">
                            {/* <Box className="abstract-header"></Box> */}
                            <Grid container spacing={1} className='results-container'>
                                <Grid item xs={12} md={4} className='thumbnail-container'>
                                    <img alt="Tour" className="tour-thumbnail" src={search.image[0]}></img>
                                </Grid>
                                <Grid item xs={12} md={8} className='abstract-text'>
                                <h2 className = "tour-results-header">{search.tourName}</h2>
                                    <p className = "tour-results-content">${search.cost}</p>
                                    <p className = "tour-results-content">Located at {search.tourLocation}</p>
                                    <p className = "tour-results-content description-short">{search.descriptionShort}</p>
                                    
                                        {/* <Button 
                                            onClick={() => renderDetail(search._id)}
                                            text='Learn More!'
                                        /> */}
                                    
                                </Grid>
                            </Grid>
                        </Box>
                    </Link>
             
                ))}
            </Container>
        </>
    )

}

export default Results;