// import Adminmenu from "../../components/layout/Adminmenu";
// import Layout from "../../components/layout/layout";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState,useEffect, useRef } from "react";
// import SearchableSelect from "./SearchableSelect";
// import { useNavigate } from "react-router-dom";
// let CreateProduct=()=>{
//   let navigate=useNavigate();
//   const [categories,setcategories]=useState([]);
//   const [category,setcategory]=useState("");
//   const [photo,setphoto]=useState("");
//   const [name,setname]=useState("");
//   const [description,setdescription]=useState("");
//   const [price,setprice]=useState("");
//   const [quantity,setquantity]=useState("");
//   const [shipping,setshipping]=useState("");
//   const [id,setid]=useState("");

//   /*const photoelement=useRef();
//   console.log(photoelement.current);*/

//   let getAllcategory=async()=>{
//     try{
//     const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
//         if(data?.success){
//         setcategories(data?.category);
//     }
//     } catch (error){
//       console.log(error);
//       toast.error("Something went wrong in getting category");  
//     }
//   }

//   useEffect(()=>{
//     getAllcategory();
//   },[]); 

//   const handleProduct=async(e)=>{
//   e.preventDefault();
//   try{
//   const productData=new FormData();
//   productData.append("name",name);
//   productData.append("description",description);
//   productData.append("price",price);
//   productData.append("quantity",quantity);
//   photo&& productData.append("photo",photo);
//   productData.append("category", setcategory);
//  // productData.append("category",);
//   const {data}=await axios.post(`${import.meta.env.REACT_APP_API}/api/v1/product/create-product`,productData)
//   if(data?.success){
//     toast.error(data?.message);
//    // setid(data.product._id);
//     }else{
//     toast.success("Product Created Successfully");
//     navigate("/dashboard/admin/products");
//   }  
// }catch (error){
//     console.log(error);
//     toast.error("something went wron");
//   }
//   }

  

//     return(
//       <Layout>
//         <div className="row">
//           <div className="col-md-3">
//              <Adminmenu/>
//           </div>
//           <div className="col-md-9">
//             Create Product
//              <div className="m-1 w-75">
               
//             <SearchableSelect options={categories} setcategory={setcategory} />   
//              <div className="mb-3">
//                 <label className="btn btn-secondary ">
//                   {photo?photo.name : "Upload Photo"} 
//                   <input type="file"
//                          name="photo"
//                          accept="image/*"
//                          onChange={(e)=>setphoto(e.target.files[0])}
//                          hidden/>
//                 </label>
//               </div>

//            <div className="mb-3">
//                 {photo? (
//                   <div className="text-center">
//                     <img
//                       src={URL.createObjectURL(photo)}
//                       alt="product-photo"
//                       height={"200px"}
//                       className="img img-responsive"
//                     />
//                   </div>
//                   ):
//                 <div className="text-center">
//                   <img
//                     src={`${import.meta.env.REACT_APP_API}/api/v1/product-photo/${id}`}
//                     alt="product-photo"
//                     height={"200px"}
//                     className="img img-responsive"
//                   />
//                 </div>
//                   }
//            </div> 

//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     value={name}
//                     placeholder="write a name"
//                     className="form-control"
//                     onChange={(e)=>setname(e.target.value)}  
//                     />    
//                 </div>

//                 <div className="mb-3">
//                 <textarea
//                   type="text"
//                   value={description}
//                   placeholder="write a description"
//                   className="form-control"
//                   onChange={(e) => setdescription(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="number"
//                   value={price}
//                   placeholder="write a Price"
//                   className="form-control"
//                   onChange={(e) => setprice(e.target.value)}
//                 />
//               </div>

//               <div className="mb-3">
//                 <input
//                   type="number"
//                   value={quantity}
//                   placeholder="write a quantity"
//                   className="form-control"
//                   onChange={(e) => setquantity(e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <select
//                   placeholder="Select Shipping "
//                   size="large"
//                   className="form-select mb-3"
//                   onChange={(value) => {
//                     setshipping(value);
//                   }}
//                 >

//                 <option value="0">No</option>
//                   <option value="1">Yes</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <button className="btn btn-secondary col-md-3" onClick={handleProduct}>
//                   CREATE PRODUCT
//                 </button>
//                 </div>
//             </div>
//           </div>
//         </div>
        
//     </Layout>


//     );
// }

// export default CreateProduct;


import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout/layout";
import Adminmenu from './../../components/layout/Adminmenu';

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/category/get-category`);
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something wwent wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("photo", photo);
      productData.append("category", category);
      const { data } = axios.post(
        `${import.meta.env.REACT_APP_API}/api/v1/product/create-product`,
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <Adminmenu/>
          </div>
          <div className="col-md-8">
          <h1 className="mb-4">Create Product</h1>
          <div className="m-1">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="row g-3">
          <div className="col-md-6 mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Price"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="col-md-6 mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a quantity"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="0">No</Option>
                  <Option value="1">Yes</Option>
                </Select>
              </div>
              <div className="mb-4 ">
                <button className="btn btn-primary btn-lg col-4" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;





