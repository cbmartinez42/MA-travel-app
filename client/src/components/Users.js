import react, {useState, useEffect} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
import Button from "../components/Button"
import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));




const UserData = ({searchUsers, setSearchUsers}) => {

    const [users, setUsers] = useState([])

    const classes = useStyles();
    const [role, setRole] = useState('');

    const handleChange = (event) => {
    setRole(event.target.value);
    };


    useEffect(() => {
        API.browseAllUsers()
        .then((response) => {
            console.log('browseallusers response.data: ',response);
            // setSearchUsers(response.data || [])
            setUsers(response.data)
        });
      }, [])

    const toggleRole = (data) => {

        console.log('data >> ', data)
    }

    return (
        <>
        <Container maxWidth="md">
            {users.map(user => (
                
                <Box key={user._id} className="tour-abstract">
                    {/* <Box>
                        <p>{user.name.first} {user.name.last}</p>
                    </Box> */}
                    <Grid container spacing={1}>
                        <Grid item md>
                            <p>{user.name.first} {user.name.last}    Location: {user.address.city} {user.address.state}    Role: {user.role}</p>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="user-role">Role</InputLabel>
                                <Select
                                labelId="user-role"
                                className="user-role"
                                value={user.role}
                                onChange={handleChange}
                                >
                                <MenuItem value={10}>USER</MenuItem>
                                <MenuItem value={20}>ADMIN</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Box>
            )) }
        </Container>
        </>
    )

}

export default UserData;