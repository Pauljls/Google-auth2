import {GoogleLogout} from 'react-google-login'
const clientId = "292060742455-vr86dsqntspb8derafn4kkujsptmmeb1.apps.googleusercontent.com"

function Logout (){
    const onSuccess =()=>{
        console.log("Sesion cerrada exitosamente")
    }
    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Cerrar Sesion"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout