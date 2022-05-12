import './Login.css'
import user from './images/user.png'
import React from 'react'
import Left from './left-side/left';
import Right from './right-side/right';

function Login() {
    return ( 
        <div className = "main-login" >
            <div className = "login-Contain" >
                  <Left /> 
                  <Right />
            </div>  
            <div className = "footer" >
                 <h4>@2022</h4>
            </div> 
        </div> 
    );
}

export default Login;