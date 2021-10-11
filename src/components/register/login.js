import React from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import Useauth from '../../context/Authcontext';
import initalize from '../../firebase/init';
import Usefirebase from '../../hooks/Usefirebase';
import './login.css'

const Login = () => {
    const {handlegoogle} = Useauth()
    const history = useHistory()
    const location = useLocation()
    const redirect_url = location.state?.from ||'/shop'
// এইটার কাজ হলো ঝদি আমরা directly কোনো component  এ ঝাই তাহলে আমাকে shop  এ পাঠিয়ে দিবে। আর ঝদি indirectly  login  করে ঝেতে চাই তাহলে jei page  এর লাঘি আসছি সেখানে পাঠাবে।
    const signingoogle = () =>{
     
        handlegoogle()
        
        .then(result=>{
            // const user = result.user
            history.push(redirect_url)
            // setuser(user)
        })
    }
    return (
        <div className="login">
            <h2>log in here</h2>
            <form action="ok" onSubmit="">
<input type="email" placeholder="enter your mail" />
<br />
<input type="password" placeholder="enter your password" />
<br /><br />

<input type="submit" value="Log in now" className="btn-regular btns" />

            </form>
            <br />
            <button onClick={signingoogle}>google sign in</button>
            <p>------------------or------------------</p>
            <p>new here? <Link to="/register">register</Link></p>
        </div>
    );
};

export default Login;