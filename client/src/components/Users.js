import {useState, useEffect, useRef} from 'react';
import API from '../utils/API'
import {Box, Container} from '@material-ui/core/';
// import Button from "../components/Button"
// import {Link} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
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

    // const inputEl = useRef(null);

    const handleChange = async (event) => {
        console.log("EVENT= ",event);
        // setRole(event.target.value);
        if(event.target.value === "ADMIN" || event.target.value === "USER") {
            console.log("etv: ",event.target.value);
            event.target.id = "role"
        }
        console.log("SENDING this to API.updateUser: ",event.target.name,event.target.id,event.target.value);
        const result = await API.updateUser(event.target.name, event.target.id, event.target.value)
     }

    useEffect(() => {
        API.browseAllUsers()
        .then((response) => {
            // console.log('browseallusers response.data: ',response);
            // setSearchUsers(response.data || [])
            setUsers(response.data)
        });
      }, [])

    useEffect(() => {
        console.log("ROLE: ",role);
    }, [role]);

    // const toggleRole = (data) => {

    //     console.log('data >> ', data)
    // }

    return (
        <>
        <Container maxWidth="md">
            {users.map(user => (
                
                <Box key={user._id} className="tour-abstract">
                    <Grid container spacing={1}>
                        <Grid item md>
                            <p>{user.name.first.toUpperCase()} {user.name.last.toUpperCase()}      Location: {user.address.city} {user.address.state}</p>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="user-first"></InputLabel>
                                <TextField
                                id="name.first"
                                label="First Name"
                                defaultValue={user.name.first}
                                name={user._id}
                                onChange={handleChange}
                                helperText="Edit name if necessary"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="user-last"></InputLabel>
                                <TextField
                                id="name.last"
                                label="Last Name"
                                defaultValue={user.name.last}
                                name={user._id}
                                onChange={handleChange}
                                helperText="Your Last Name is Funny"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="user-email"></InputLabel>
                                <TextField
                                id="email"
                                label="Email Address"
                                style = {{width: 500}}
                                defaultValue={user.email}
                                name={user._id}
                                onChange={handleChange}
                                helperText="Your email is wrong. Fix it!"
                                variant="outlined"
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <InputLabel id="user-role">Role</InputLabel>
                                <Select
                                data-id="role"
                                id="role"
                                labelId="user-role"
                                className="user-role"
                                defaultValue={user.role}
                                name={user._id}
                                onChange={handleChange}
                                >
                                <MenuItem value={"USER"}>USER</MenuItem>
                                <MenuItem value={"ADMIN"}>ADMIN</MenuItem>
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