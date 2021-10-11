import { useContext } from "react"
import { Authcontext } from "./Authprovider"

const Useauth = () =>{
    return useContext(Authcontext)
}
export default Useauth