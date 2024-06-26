
import { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/layout";
import Usermenu from "../../components/layout/Usermenu";
import axios from "axios";
import { Authcontext } from "../../components/contextAPI/Authcontext";
import moment from 'moment'
const Order=()=>{
  const [orders,setOrders]=useState([]);
  const [auth]=useContext(Authcontext);

  const getOrders=async ()=>{
    try{
    const {data}=await axios.get(`${import.meta.env.REACT_APP_API}/api/v1/auth/orders`);
    setOrders(data.orders);
    console.log(data);
    }
    catch (error){
      console.log(error);
    }
  }
  useEffect(()=>{
    if(auth?.token)
    getOrders();
  },[auth?.token]);
    return(
      <Layout>
        <div className="row">
          <div className="col-md-3">
             <Usermenu/>
          </div>
          <div className="col-md-9">
            <h1 className="text-center">Your Orders</h1>
              {orders.length > 0 ? (
            <div className="border shadow">
              {orders?.map((o, i) => (
                <div key={i}>
                  <table className="table" style={{marginBottom:"0px"}}>
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row">{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createAt).format("DD-MM-YYYY")}</td>
                        <td>{o?.payment?.success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                   {o.products.map((p) => (
                    <div
                      key={p._id}
                      className="d-flex"
                      style={{
                        width: "100%",
                        gap: "3rem",
                        border: "solid 1px gray",
                        borderRadius: "4px",
                        padding: "16px",
                        backgroundColor: "white",
                      }}
                    >
                      <img
                        src={`${import.meta.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                        alt={p.name}
                        style={{ width: "200px", height: "200px" }}
                      />
                      <div style={{ width: "60%" }}>
                        <h6 style={{ fontSize: "20px" }}>{p.name}</h6>
                        <p>{p.description}</p>
                        <p>
                          Cost: <span style={{ color: "#48C11B" }}>${p.price}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <p>No orders Found!</p>
          )}
          </div>
        </div>
        
    </Layout>
    );
}

export default Order;