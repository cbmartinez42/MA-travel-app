import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
import Button from "../components/Button"
// import Tour from "../pages/Tour";
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const Users = ({searchUsers, setSearchUsers}) => {

    // setSearchUsers = [{"name.first": "Mark"}]

    useEffect(() => {
        API.browseAllUsers()
        .then((response) => {
            console.log('browseallusers response.data: ',response.data)
            // setSearchUsers(response.data || [])
            setSearchUsers(response.data)
        });
      }, [])

    const renderDetail = (data) => {

        console.log('data >> ', data)
    }

    return (
        <>
        <Container maxWidth="md">
            {/* {searchUsers.map(search => (
                
                <Box key={search._id} className="tour-abstract">
                    <Box className="abstract-header">
                        <h2>{search.tourName}</h2>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item md>
                            <p>Location: {search.name.first}</p>
                            <Link to={"/tour/" + search._id}>
                                <Button 
                                    onClick={() => renderDetail(search._id)}
                                    text='Learn More!'
                                />
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            )) } */}
        </Container>
        </>
    )

}

export default Users;