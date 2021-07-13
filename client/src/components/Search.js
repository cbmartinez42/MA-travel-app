import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../components/Button'

// const useStyles = makeStyles((theme) => ({
//     root: {
//       '& .MuiTextField-root': {
//         margin: theme.spacing(1),
//         width: '35ch',
//       },
//     },
//   }));

const Search = () => {
    // const classes = useStyles();
    return (
        // <form className={classes.root} noValidate autoComplete="off" justifyContent="center" alignItems="flex-center">
            <Grid container spacing={3}>

                <Grid item xs={12} className="search-field" >
                    <TextField
                        id="search"
                        label="Search"
                        name="search"
                        variant="outlined"
                        // onChange={(e) => handleChange(e.target)}
                        />
                    <Button
                        className="search-button"
                        text={<SearchIcon />} 
                        color="#CCDCF5"
                        >  
                    </Button>
                </Grid>
            </Grid>
        // </form>
    )
}

export default Search;