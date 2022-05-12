import React from 'react';
import './bar.css'
import user from './img/user.png'
import {Notifications ,Language , Brightness4  } from '@material-ui/icons';
const Bar = () => {
    return (
        <div className="ToBar">
           <div className="tobarWrapper">
               <div className="tolefet">
               <span className="logo">Admin</span>              
               </div>
               <div className="toright">
               <div className="barIcon">
                   <Notifications />
                   </div>   
                   <div className="barIcon">
                    <Language />
                   </div>   
                   <div className="barIcon">
                   <Brightness4 />
                   </div>
                   <img className='avatar' src = { user } alt = "avatar" />
                </div>
            </div> 
        </div>
    );
}

export default Bar;
