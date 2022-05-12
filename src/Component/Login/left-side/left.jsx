import React from 'react';
import './left.css' ;
import user from '../images/user.png' ;
import axios from 'axios';
import { RestoreOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
function Left () {
    let navigate = useNavigate();

    const [user ,setUser] = useState({email:'',password:''})

    const handleChange =(e)=> {
        setUser(({...user , [e.target.name]: e.target.value})); 
    }

    const handleSubmit =(e) => {
        e.preventDefault();
    const sendData ={
    email:data.email,
    password:data.password   

}   
console.log(sendData);
axios.post('http://localhost/Test/MY-APP/login.php',sendData)
.then({result} =>{
    if(result.data.Status == 'Invalid'){
        alert('Invalid User'); 
    }else{
        history(`/Dashboard`);
    }
}


}
    return (
    
        <div className = "left-side" >
        <div className = "img" >
        <img src = { user }alt = "img-logo" />
        </div>
        <form onSubmit={handleSubmit}>
        <label forhtml = "Email" > Email </label>    
        <input type = "email" placeholder = "Enter your Email..." onChange = {handleChange} value={user.email} className = "form-control" />
        <label forhtml = "psw1" > Password </label>     
        <input type = "password" placeholder = "Enter your Password..." onChange = {handleChange}  value={user.password} className = "form-control" />
        <button id = "bttn"/*onClick={login}*/> Submit </button>  
        </form>   
        </div>  
    );
}

export default Left;
