import React from "react";
import { Link } from "react-router-dom";
export default function Signup() {
    return(
        <div id="wd-signup-screen">
            <h3>Signup</h3>
            <input placeholder="username" /><br/>
            <input placeholder="password" type="password" /><br/>
            <input placeholder="verify password" /><br/>
            <Link to="/Kanbas/Account/Profile">Sign up</Link><br/>
            <Link to="/Kanbas/Account/Signin">Sign in</Link><br/>
        </div>
    );
}