import React from 'react';

import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import Useauth from '../../context/Authcontext';


const Shipping = () => {
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data =>{
history.push('/placeorder')
        console.log(data);
    };
    const {user} = Useauth()
    return (
        <div>
            <h1>this is shipping page</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="login">
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("name")} />

      <input defaultValue={user.email} {...register("email", { required: true })} />
      <br />
   
      {errors.email && <span>This field is required</span>} <br />
      <input placeholder="address" {...register("adress")} />
      
      <input type="submit" className="btn-regular " />
    </form>
        </div>
    );
};

export default Shipping;