import {List, ListItem, ListItemText, Select, Hidden, Grid} from '@material-ui/core'
import { useHistory } from "react-router-dom";

const Categories = ({searchData, setSearchData, searchBar, setSearchBar}) => {
    const history = useHistory()

    function setCategory(e) {
        setSearchBar(e.target.textContent || e.target.value)
        history.push('/browse')
    } 

    return (    
        <>
        <div className="categories">Select a category:
        <Hidden only={["sm", "xs"]}>
            <List className="categories-list">
                <ListItem alignItems='center'>
                        <ListItemText 
                            className="category-link"
                            primary="Snorkel"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Cruise"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Culinary"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Sustainable"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Fishing"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Cultural"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Hiking"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Caving"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Birding"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Adventure"
                            onClick={setCategory}
                        />
                </ListItem>
                <ListItem>
                        <ListItemText 
                            className="category-link"
                            primary="Farm"
                            onClick={setCategory}
                        />
                </ListItem>
            </List>
            </Hidden>
 
            <Hidden only={["md", "lg", "xl"]}>
            <Grid item xs={12}>
            <Select
                className='category-select'
                onChange={setCategory}
                >
                    <option value={'Snorkel'}>Snorkel</option>
                    <option value={'Cruise'}>Cruise</option>
                    <option value={'Culinary'}>Culinary</option>
                    <option value={'Sustainable'}>Sustainable</option>
                    <option value={'Fishing'}>Fishing</option>
                    <option value={'Hiking'}>Hiking</option>
                    <option value={'Caving'}>Caving</option>
                    <option value={'Birding'}>Birding</option>
                    <option value={'Adventure'}>Adventure</option>
                    <option value={'Farm'}>Farm</option>
                    
                </Select>
                </Grid>
                </Hidden>
        </div>
        </>
    )
}

export default Categories

