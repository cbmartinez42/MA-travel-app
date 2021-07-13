import React, {useContext} from 'react';
import { UserContext } from '../utils/UserContext';

const Home = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
    return (
        <div>
          {/* <Header /> */}
          <h2>{userInfo.namefirst} {userInfo.namelast} your id is {userInfo._id}</h2>
          {/* <button onClick={() => setUserInfo("ADMIN")}>Set to Admin</button>
          <button onClick={() => setUserInfo("USER")}>Set to User</button> */}
        </div>
    )
}


export default Home