import React from 'react'
import Results from '../components/Results'
import {Container} from '@material-ui/core/';

const Browse = ({searchData, setSearchData}) => {


    return (
        <Container maxWidth="lg">
        <div>
            <h3>Results:</h3>
        </div>
        
        <Results 
            searchData={searchData}
            setSearchData={setSearchData}
        />
        </Container>
    )
}

export default Browse
