// import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {TextField, Button} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";


const Search = ({searchBar, setSearchBar}) => {
    const history = useHistory();

    return (
        // <form className={classes.root} noValidate autoComplete="off" justifyContent="center" alignItems="flex-center">
            <Grid container spacing={3}>

                <Grid item xs={12} className="search-field" >
                    <TextField
                        id="search"
                        label="Search"
                        name="search"
                        variant="outlined"
                        value={searchBar}
                        onChange={(e) => (
                            setSearchBar(e.target.value)
                        )}    
                        />
                    <Button
                        // className="search-button"
                        variant="contained"
                        color="primary"
                        id="search-btn"
                        style={{ margin: ".5%", padding: ".75%" }}
                        onClick={() => history.push('/browse')}
                        // text={<SearchIcon />} 
                        // color="#CCDCF5"
                        > <SearchIcon /> 
                    </Button>
                </Grid>
            </Grid>
        // </form>
    )
}

export default Search;