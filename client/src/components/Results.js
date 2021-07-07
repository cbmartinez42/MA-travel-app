import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';

const Results = ({searchData, setSearchData}) => {

    useEffect(() => {
        // fetch(infoUrl)
        API.browseAllActivities()
        // .then(res => res.json())
        .then((response) => {
          setSearchData(response.data || [])
        });
      }, [])


    return (
        <>
        <Container maxWidth="md">
            {searchData.map(search => (
                
                <Box key={search.tourName} className="tour-abstract">
                    <Box className="abstract-header">
                        <h6>{search.tourName}</h6>
                    </Box>
                {/* <p>{search.description}</p> */}
                <p>{search.tourLocation}</p>
                <p>${search.cost}</p>
                <p>{search.tourOperator}</p>

                </Box>
            )) }
        </Container>
        </>
    )

}

export default Results;