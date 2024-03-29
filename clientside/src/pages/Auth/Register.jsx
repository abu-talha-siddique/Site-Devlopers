import React, { useState ,useContext} from 'react'
import Layout from '../../components/layout/layout'
import  './Register.css'
import { useNavigate } from 'react-router-dom'
import { Authcontext } from '../../components/contextAPI/Authcontext'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';  //for network request
//import { Link } from 'react-router-dom';

function Register  () {
  const [name ,setName]=useState("");

  const [email ,setemail]=useState("");
  const [password ,setPassword]=useState("");

  const [auth,setauth]=useContext(Authcontext);
  const navigate=useNavigate();
 
  const [phone ,setphone]=useState("");
  const [answer ,setanswer]=useState("");
  const [address,setaddress]=useState("");
  const handlenameChange=(event)=>{
    setName(event.target.value);
  };
  const handleemailChange=(event)=>{
    setemail(event.target.value);
  };
  const handlepasswordChange=(event)=>{
    setPassword(event.target.value);
  };
 
  const handlephoneChange=(event)=>{
    setphone(event.target.value);
  };
  const handleaddressChange=(event)=>{
    setaddress(event.target.value);
  };
  const handleanswerChange=(event)=>{
    setanswer(event.target.value);
  };
  const handleSubmit= async(event)=>{
  event.preventDefault();
  console.log(event);
 try{   //to handle the response and error
const res=await  axios.post(`${import.meta.env.REACT_APP_API}/api/v1/auth/register`,{name,email,password,phone,address,answer});

if(res.data.success){
  toast.success(res.data.message);
  //tauqeer work for navigation
  setauth({
    ...auth,
  user:res.data.user,
  token:res.data.token
  });
  localStorage.setItem('auth',JSON.stringify(res.data));
  navigate('/');
}
else{
  toast.error(res.data.message);
}

 }
 catch(error){ 
  console.log(error.response.data)
  toast.error(error.response.data.message);
 }
  };
  

  return (
    <>
 <div class="wrapper">
    <h2>Registration</h2>
    <form action="#" onSubmit={handleSubmit}>
      <div className="input-box">
        <input type="text"onChange={handlenameChange} placeholder="Enter your name" required value={name} ></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handleemailChange} placeholder="Enter your email" required value={email}></input>
      </div>
      <div className="input-box">
        <input type="password"onChange={handlepasswordChange} placeholder="Create password" required value={password}></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handleanswerChange} placeholder="What is Your Favourite Actor" required value={answer}></input>
      </div>
     
      <div className="input-box">
        <input type="text"onChange={handlephoneChange} placeholder="Phone Number" required value={phone}></input>
      </div>
      <div className="input-box">
        <input type="text"onChange={handleaddressChange} placeholder="Address" required  value={address}></input>
      </div>
      <div className="policy">
        <input type="checkbox"></input>
        <h3>I accept all terms & condition</h3>
      </div>
      <div className="input-box button">
        <input type="submit" className='reg-link'  value="Register Now"></input>
      </div>
      <div className="text">
        <h3>Already have an account? <a href="#">Login now</a></h3>
      </div>
    </form>
  </div>
  <ToastContainer />
  </>
    
  )
}
export default Register;