// import {useState, useEffect} from 'react';
// import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
// import Button from "../components/Button"
// import Tour from "../pages/Tour";
import {Link, useLocation} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Results = ({searchData, setSearchData}) => {

    const params = useLocation();
    const paramsArray = params.pathname.split('/')
    const category = paramsArray[paramsArray.length -1]
    // const category = params.search.substring(1);
    console.log('category', category);
    

    // useEffect(() => {
    //     API.browseAllActivities()
    //     .then((response) => {
    //     setSearchData(response.data || [])
    //     });
    // }, [])

    // const renderDetail = (data) => {

    //     console.log('data >> ', data)
    // }

    return (
        <>
            <Container maxWidth="md">
                {searchData.map(search => (
                   
                    <Link className="abstract-link" to={"/tour/" + search._id}>
                        <Box key={search._id} className="tour-abstract">
                            <Box key={search.tourOperator} className="abstract-header">
                                <h2>{search.tourName}</h2>
                            </Box>
                            <Grid container key={search.createdAt} spacing={1}>
                                <Grid item key={search.category} xs={12} md={4}>
                                    <img alt="Tour" className="tour-thumbnail" src={search.image[0]}></img>
                                </Grid>
                                <Grid item xs={12} key={search.tourName}  md={8}>
                                    <p>Location: {search.tourLocation}</p>
                                    <p>Cost: ${search.cost}</p>
                                    <p>Operated by: {search.tourOperator}</p>
                                    
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