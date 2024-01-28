import './App.css';
import LoginButton from "./components/login"
import LogoutButton from "./components/logout"
import {gapi} from "gapi-script"//google api script, nos da acceso a google api client
import { useEffect } from 'react';//Hook de react

const clientId = "292060742455-vr86dsqntspb8derafn4kkujsptmmeb1.apps.googleusercontent.com"

function App() {

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope : ""
      })
    };
    //cargamos el cliente
    gapi.load('client:auth2',start) 
  })

  return(
    <div className='App'>

      <h1>Login</h1>
      <LoginButton/>
      <br/>
      <LogoutButton/>
    </div>
  )
}

export default App;

