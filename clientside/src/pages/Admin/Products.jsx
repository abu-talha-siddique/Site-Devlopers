import Layout from "../../components/layout/layout";
import Adminmenu from "../../components/layout/Adminmenu";
import axios from "axios";
import { useState,useEffect } from "react";
const Products=()=>{
    const [products,setProducts]=useState([]);
const getAllProducts=async ()=>{
        try{
        const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/product/get-product`);
        setProducts(data.products);
        } catch (error){
            console.log(error);
            toast.error("Something went wronng");
        }
    };

    useEffect(()=>{
        getAllProducts();
    },[]);

    return(
       <Layout>
         <div className="row">
            <div className="col-md-3">
            <Adminmenu/>
         </div>
         <div className="col-md-9 d-flex">
            <h1 className='text-center'>All Products List</h1>
        <div className="d-flex">
            {
                products.map((p)=>{
                    <Link key={p._id} to={`/dashboard/admin/product/${p.slug}`}>
                <div key={p._id} className="card m-2" style="width: 18rem;">
                    <img src={`${import.meta.env.REACT_APP_API}/api/v1/product-photo/${p._id}`} class="card-img-top" alt={p.name}/>
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p className="card-text">{p.description}</p>
                      <a href="#" className="btn btn-primary"></a>
                    </div>
                  </div>
                  </Link>
                })   
            }
        </div>
         </div>
         </div>
       </Layout> 
    );
}

export default Products;