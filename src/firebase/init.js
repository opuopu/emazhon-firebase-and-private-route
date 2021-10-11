import { initializeApp } from "firebase/app";
import firebaseConfig from "./config";

const initalize = () =>{
    return initializeApp(firebaseConfig)
}
export default initalize