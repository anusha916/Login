import logo from './logo.svg';
import './App.css';
import {useAuth0} from '@auth0/auth0-react';
function App() {
  const{loginWithPopup,loginWithRedirect,logout,user,isAuthenticated}=useAuth0()
  return (
    <>
    <ul>
      <li><button onClick={loginWithPopup}>loginwithpopup</button></li>
      <li><button onCLick={loginWithRedirect}>loginwithredirect</button></li>
      <li><button onClick={logout}>logout</button></li>

    </ul>
    <h3>user is {isAuthenticated? "Logged in":"Not logged in"}</h3>
    </>
  );
}

export default App;
