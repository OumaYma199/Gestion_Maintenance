 import React from 'react';
 import "./template.css"
 const Template = () => {
     return (
         <div className='template'>
             <div className="templateItem">
                 <span className="templateTitle">Radionavigation</span>
              <div className="templateContainer">
                 <span className="templateEquipemenyt"></span></div>       
             </div>

             <div className="templateItem">
                 <span className="templateTitle">Radiocommunication</span>
              <div className="templateContainer">
                 <span className="templateEquipemenyt"></span></div>       
             </div>

             <div className="templateItem">
                <a href="./Component/Login/login.jsx" className="href">
                    <span className="templateTitle">Informatique et Télécommunication</span>
            </a>  <div className="templateContainer">
                 <span className="templateEquipemenyt"></span></div>       
             </div>

             <div className="templateItem">
                 <span className="templateTitle">Electricité
                 Balisage
                 Electromecanique
                 </span>
              <div className="templateContainer">
                 <span className="templateEquipemenyt"></span></div>       
             </div>
         </div>
     );
 }
 
 export default Template;
 