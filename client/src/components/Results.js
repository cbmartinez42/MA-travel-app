import {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
import Button from "../components/Button"
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
                
                <Box key={search._id} className="tour-abstract">
                    <Box className="abstract-header">
                        <h2>{search.tourName}</h2>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <img alt="Tour" className="tour-thumbnail" src={search.image}></img>
                        </Grid>
                        <Grid item md>
                            <p>Location: {search.tourLocation}</p>
                            <p>Cost: ${search.cost}</p>
                            <p>Operated by: {search.tourOperator}</p>
                            <Link to={"/tour/" + search._id}>
                                <Button 
                                    onClick={() => renderDetail(search._id)}
                                    text='Learn More!'
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            )) }
        </Container>
        </>
    )

}

export default Results;