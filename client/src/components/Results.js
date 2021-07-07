import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Container} from '@material-ui/core/';

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
        <Container>
            {searchData.map(search => (
                
                <>

                <h5>{search.tourName}</h5>
                
                <p>{search.description}</p>
                <p>{search.tourLocation}</p>
                <p>${search.cost}</p>
                <p>{search.tourOperator}</p>

                </>
            )) }
        </Container>
        </>
    )

}

export default Results;