import React from "react";
import './signin-signup.styles.scss';
import Signin from "../../Components/Sign-in/Sign-in.component";
import SignUp from "../../Components/Sign-up/Sign-up.component";

const SigninSignup = () =>(
    <div className="sign-in-up">
        <Signin/>
        <SignUp/>
    </div>
)

export default SigninSignup;