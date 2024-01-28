import {GoogleLogin} from 'react-google-login'
const clientId = "292060742455-vr86dsqntspb8derafn4kkujsptmmeb1.apps.googleusercontent.com"

function Login(){

    const onSuccess =(res)=>{
        console.log("LOGIN SUCCESS! current user: ",res.profileObj);
    }
    const onFailure =(res)=>{
        console.log("LOGIN FAILED! res: " ,res)
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Ingresar con Google'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;