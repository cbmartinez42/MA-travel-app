import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Container} from '@material-ui/core/';

const Results = ({searchData, setSearchData}) => {

    useEffect(() => {
        // fetch(infoUrl)
        API.browseAllActivities()
        // .then(res => res.json())
        .then((response) => {
            console.log('searchData 1', searchData)
            console.log('results >> ', response)
          setSearchData(response.results || [])
        
        });
      }, [])


    return (
        <Container maxWidth="lg">
            <h4>sample search results</h4>
            {searchData.map(results => (
                <>
                <h5>{results.tourName}</h5>
                
                <h6> here's a sample name </h6>
                </>
            )) }
        </Container>
    )

}

export default Results;