import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login">
            <h2>new here? register now</h2>
            <form action="" onSubmit="">

                <input type="email" placeholder="enter your email" />
                <br /><br />
                <input type="password" placeholder="password" />
                <br /><br />
                <input type="submit" value="register" className="btn-regular btns" />
            </form>
            <br />
            <button>google sign in</button>
            <p>already register? <Link to="/login">go to login</Link></p>
        </div>
    );
};

export default Register;