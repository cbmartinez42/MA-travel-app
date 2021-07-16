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
                <ListItem>
                    <Link to="/browse/cruise">
                        <ListItemText 
                            primary="Cruise"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/food">
                        <ListItemText 
                            primary="Cooking/Food"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse/sustainable">
                        <ListItemText 
                            primary="Sustainable Tours"
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
            </List>
            
        </div>
        </>
    )
}

export default Categories