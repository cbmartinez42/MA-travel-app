import React from 'react'
import Results from '../components/Results'
import {Container} from '@material-ui/core/';

const Browse = ({searchData, setSearchData}) => {


    return (
        <Container maxWidth="lg">
        <div>
            <h1>This page will show search results from home screen as well as allow user to search by category of enter new search and show results.</h1>
        </div>
        
        <Results 
            searchData={searchData}
            setSearchData={setSearchData}
        />
        </Container>
    )
}

export default Browse
