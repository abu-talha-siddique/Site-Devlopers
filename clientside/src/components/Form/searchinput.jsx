 import React from 'react'
 import { useSearch } from '../contextAPI/search'
// import { set } from 'mongoose';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './searchinput.css'
const Searchinput = () => {
  
     const [values,setvalues]=useSearch();
     const navigate=useNavigate();



     const handleonsubmit=async (e)=>{
      e.preventDefault();
      console.log('i am here')
  // e.preventdefault();
    console.log(e);
   
     try{
     const {data}= await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`);
     console.log(data);
     setvalues({...values,results:data});
    navigate('/search');
    
     }
     
     catch(error){
        console.log(error);
     }

   };

     return(
      <div>
  <form class="search-form" role="search" onSubmit={handleonsubmit}>
  <input className="form-control search-container me-2" type="search"  placeholder="Search" aria-label="Search" value={values.keyword} onChange={(e)=>setvalues({...values, keyword:e.target.value})} />
  <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
 </div>
   );
   
 };
 export default Searchinput;
 