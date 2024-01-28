import { useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { gapi } from 'gapi-script';
import './App.css';

function App() {
  const clientID = "292060742455-vr86dsqntspb8derafn4kkujsptmmeb1.apps.googleusercontent.com";
  const [user,setUser] = useState({});
  useEffect(() => {
    const start = () => {
      gapi.load('auth2', () => {
        gapi.auth2.init({
          clientId: clientID
        });
      });
    };

    gapi.load('client:auth2', start);
  }, []); // Con esto habilitamos los servicios de Google

  const onSuccess = (response) => {
    setUser(response.profileObj)
  };

  const onFailure = () => {
    console.log("Algo salió mal");
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div className='btn'>
        <GoogleLogin
          clientId={clientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_policy"}
        />
      </div>
      <div className={user? "profile":"hidden"}>
        <img src={user.imageUrl} alt ="" />
        <h3>{user.name}</h3>
      </div>
    </div>
  );
}

export default App;

