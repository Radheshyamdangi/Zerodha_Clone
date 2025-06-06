//  import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios, { all } from "axios";


const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8001/allOrders").then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

return (
  <>
    <h3 className="title">Orders({allOrders.length})</h3>

    <div className="order-table">
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Mode</th>
          
          
        </tr>
        </thead>
        <tbody>

        {allOrders.map((stock, index) => {
          const curValue = stock.price * stock.qty;
          const isProfit = curValue - stock.avg * stock.qty >= 0.0;
          const profClass = isProfit ? "profit" : "loss";
          const dayClass = stock.isLoss ? "loss" : "profit";

          return (
            <tr key={index}>
              
              <td>{stock.name}</td>
              <td>{stock.qty}</td>
              <td>{stock.price}</td>
             <td>{stock.mode}</td>
             
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
    
  </>
);
}




export default Orders ;
