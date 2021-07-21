import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu2 from "./components/Menu2";
import Book from "./pages/Book";
import Browse from "./pages/Browse";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Mystuff from "./pages/Mystuff";
import Operatoradmin from "./pages/Operatoradmin";
import Terms from "./pages/Terms";
import Tour from "./pages/Tour";
import Touradmin from "./pages/Touradmin";
import Thankyou from "./pages/Thankyou.js";
import Admin from "./pages/Admin";

import { UserContext } from "./utils/UserContext";
import './App.css';
import Footer from './components/Footer';
import './index.css';
import Header from './components/Header'
import Devabout from "./pages/Devabout";

function App() {
  const [userInfo, setUserInfo] = useState('NLI');
  // const [userId, setUserId] = useState('');
  const [searchData, setSearchData] = useState([]);
  const [searchBar, setSearchBar] = useState('');

  return (
    <>
    <Router>
      <UserContext.Provider value={{userInfo, setUserInfo}}>
    
      <Header />
      
        <div className="App">
        <Switch>
            <Route exact path="/">
              <Home 
              searchData={searchData}
              setSearchData={setSearchData}
              searchBar={searchBar}
              setSearchBar={setSearchBar}
              />
            </Route> 
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/book" component={Book} />
            <Route exact path="/thankyou" component={Thankyou} />
            <Route exact path="/devabout" component={Devabout} />
            <Route exact path="/browse">
              <Browse 
                  searchData={searchData}
                  setSearchData={setSearchData}
                  searchBar={searchBar}
                  setSearchBar={setSearchBar}
                  />
            </Route>
            
            <Route exact path="/home" >
              <Home 
                searchData={searchData}
                setSearchData={setSearchData}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            </Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/mystuff" component={Mystuff} />
            <Route exact path="/Operatoradmin" component={Operatoradmin} />
            <Route exact path="/terms" component={Terms} />
            <Route path="/tour/:id" >
              <Tour 
                searchData={searchData}
                setSearchData={setSearchData}
                searchBar={searchBar}
                setSearchBar={setSearchBar}
              />
            </Route>
            <Route exact path="/touradmin" component={Touradmin} />
        </Switch>
        
        <Footer />
        </div>
      </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
