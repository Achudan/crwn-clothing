import React from "react";
import { useState } from "react/cjs/react.development";
import './Sign-in.styles.scss';
import FormInput from "../Form-Input/form-input.component";

const Signin = () =>{
    const [name, setName] = useState({email:'',password:''});
    const handleSubmit = (e) =>{
        e.preventDefault();
    }
    const handleChange = (e) =>{
        console.log([e.target.name],e.target.value)
        setName((values)=>({...values,[e.target.name]:e.target.value,}))
    }
    return(
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email id and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={name.email} handleChange={(e)=>handleChange(e)} label="email" required/>
                <FormInput name="password" type="password" value={name.password} handleChange={(e)=>handleChange(e)} label="password" required/>

                <input type="submit" value="Submit Form"/>
            </form>
        </div>
    );
}

export default Signin;