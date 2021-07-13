import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
import Button from "../components/Button"
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

const UserData = ({searchUsers, setSearchUsers}) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        API.browseAllUsers()
        .then((response) => {
            console.log('browseallusers response.data: ',response);
            // setSearchUsers(response.data || [])
            setUsers(response.data)
        });
      }, [])

    const renderDetail = (data) => {

        console.log('data >> ', data)
    }

    return (
        <>
        <Container maxWidth="md">
            {users.map(user => (
                
                <Box key={user._id} className="tour-abstract">
                    <Box className="abstract-header">
                        <h2>{user.name.first} {user.name.last}</h2>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item md>
                            <p>Location: {user.address.city} {user.address.state}</p>
                            <Link to={"/tour/" + user._id}>
                                <Button 
                                    onClick={() => renderDetail(user._id)}
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

export default UserData;