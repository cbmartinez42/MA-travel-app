// import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem, ListItemText} from '@material-ui/core'
import { useHistory } from "react-router-dom";

const Categories = ({searchData, setSearchData, searchBar, setSearchBar}) => {
    const history = useHistory()

    function setCategory(e) {
        setSearchBar(e.target.textContent)
        history.push('/browse')
    } 

    return (
        <>
        <div className="categories">Select a category:
            <List  className="categories-list">
                <ListItem>
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
                            primary="Cooking"
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
                            primary="Culture"
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
            </List>
            
        </div>
        </>
    )
}

export default Categories