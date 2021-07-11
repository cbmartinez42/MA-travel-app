// import {useEffect} from 'react'
import {Link} from 'react-router-dom'
import {List, ListItem, ListItemText} from '@material-ui/core'

const Categories = () => {

    return (
        <>
        <div className="categories">Select a category:
            <List>
                <ListItem>
                    <Link to="/browse/snorkeling">
                        <ListItemText 
                            primary="Snorkeling"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse">
                        <ListItemText 
                            primary="Cruise"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse">
                        <ListItemText 
                            primary="Cooking/Food"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse">
                        <ListItemText 
                            primary="Sustainable Tours"
                        />
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/browse">
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