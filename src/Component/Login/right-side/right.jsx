import React from 'react';
import ONDA from '../images/logo.png'
import './right.css'
const Right = () => {
    return (
              <div className = "right-side" >
        <div className = "text" >
        <h3><b> Aéaroport Essaouira Mogador </b> </h3>
        </div> 
        <div className = "img" >     
        <img src = { ONDA } id = "icon" alt = "img-logo" />
        </div>         
        </div> 
    );
}

export default Right;
