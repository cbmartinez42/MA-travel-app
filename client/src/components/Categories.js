// import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem, ListItemText} from '@material-ui/core'

const Categories = ({searchData, setSearchData}) => {

    return (
        <>
        <div className="categories">Select a category:
            <List  className="categories-list">
                <ListItem>
                    <Link to="/browse/snorkeling">
                        <ListItemText 
                            primary="Snorkeling"
                        />
                    </Link>
                </ListItem>
                {/* <ListItem>
                    <Link to="/browse/cruise">
                        <ListItemText 
                            primary="Cruises"
                        />
                    </Link>
                </ListItem> */}
                <ListItem>
                    <Link to="/browse/food">
                        <ListItemText 
                            primary="Culinary"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/cultural">
                        <ListItemText 
                            primary="Cultural"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/fishing">
                        <ListItemText 
                            primary="Fishing"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/birding">
                        <ListItemText 
                            primary="Birding"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/farm">
                        <ListItemText 
                            primary="Farm Tour"
                        />
                    </Link>
                </ListItem>
            </List>
            
        </div>
        </>
    )
}

export default Categories