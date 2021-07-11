import {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
// import Button from "../components/Button"
// import Tour from "../pages/Tour";
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Results = ({searchData, setSearchData}) => {


    useEffect(() => {
        API.browseAllActivities()
        .then((response) => {
          setSearchData(response.data || [])
        });
      }, [])

    const renderDetail = (data) => {

        console.log('data >> ', data)
    }

    return (
        <>
            <Container maxWidth="md">
                {searchData.map(search => (
                   
                    <Link className="abstract-link" to={"/tour/" + search._id}>
                        <Box key={search._id} className="tour-abstract">
                            <Box className="abstract-header">
                                <h2>{search.tourName}</h2>
                            </Box>
                            <Grid container spacing={1}>
                                <Grid item xs={12} md={4}>
                                    <img alt="Tour" className="tour-thumbnail" src={search.image}></img>
                                </Grid>
                                <Grid item xs={12} md={8}>
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