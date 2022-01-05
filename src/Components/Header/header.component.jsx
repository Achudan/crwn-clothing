import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from './crown.svg';
import './header.styles.scss';
import { auth } from "../../firebase/firebase.utils";

const Header =  ({currentUser}) =>(
    <div className='header'>
        <Link className='logo-container' to="/" >
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser?
                (<div className="option" onClick={()=>auth.signOut()}>{currentUser.displayName.toUpperCase()}</div>):
                (<Link className="option" to="/signinsignup">SIGN IN</Link>)
            }
            {console.log('user',currentUser)}
            
        </div>
    </div>
)

export default Header;

 