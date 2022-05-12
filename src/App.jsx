import React from 'react';
import './App.css' ;
import Login from './Component/Login/Login';
import Bar from './Component/Menu/bar';
import SideBar from './Component/side-bar/SideBar'
import Home from './Pages/home/home';
import Singup from './Component/singup'
import {BrowserRouter ,Route, Router ,Switch} from 'react-router-dom'
function App() {
    return (
      /*  <div className='App' >
            <Bar />
            <div className="Container">
                <SideBar />
                <Home />
              </div>  */     
        <div className="LOGIN">
            <Singup />
        </div>         
    );
}
    
export default App ;