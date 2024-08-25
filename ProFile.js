import {usestate} from 'react'
function ProFile(){
    const [loggedIn,setLoggedIn]=usestate(true)
    return(
        <div>

        {
            loggedIn==1?<h1>hi megha</h1>:<h1>not loged</h1>
        }
        </div>
    )
}
export default ProFile;