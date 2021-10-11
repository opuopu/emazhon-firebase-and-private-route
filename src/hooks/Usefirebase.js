import { GoogleAuthProvider ,getAuth,signInWithPopup,onAuthStateChanged,signOut} from "firebase/auth";
import initalize from "../firebase/init";
initalize()
const { useState, useEffect } = require("react")

const Usefirebase = () =>{
    const [user,setuser] = useState({})
    const[error,seterror] = useState('')
    const provider = new GoogleAuthProvider()
    const auth = getAuth()

    const handlegoogle = () =>{
     return  signInWithPopup(auth, provider)
        
        .catch(error=>{
            seterror("sorry there is a problem")
        })
       
    }
    // signout
    const signout = () =>{
        signOut(auth)
        .then(()=>{
        // done
        setuser({})
        })
    }

    useEffect(()=>{
       onAuthStateChanged((auth),user=>{
           if(user){
               setuser(user)
               console.log(user);
           }
       })
    },[])
    return{handlegoogle,user,error,signout}
}

export default Usefirebase