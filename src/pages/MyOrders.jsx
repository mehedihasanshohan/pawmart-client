import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';


const MyOrders = () => {
  const {user} = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    if(user?.email){
      fetch(`http://localhost:3000/myorders?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setOrders(data)
      })
    }
  }, [user?.email])

    const handleDownload = () => {
    const doc = new jsPDF();

    // Table columns
    const columns = [
      "Product Name",
      "Buyer Name",
      "Price",
      "Quantity",
      "Address",
      "Date",
      "Phone"
    ];

    // Table rows
    const rows = orders.map(order => [
      order.productName,
      order.buyerName,
      order.price,
      order.quantity,
      order.address,
      order.date,
      order.phone
    ]);

    // Add AutoTable
    autoTable(doc, {
    head: [columns],
    body: rows,
  });

    // Save PDF
    doc.save("my-orders.pdf");
    };


  return (
    <div className=''>
      <h2 className='text-center text-2xl font-bold mt-6 mb-4'>My Orders</h2>
      <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Product Name</th>
        <th>Buyer Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Address</th>
        <th>Date</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>

      {
        orders.map((order, index) => <tr key={order._id}>
        <th>{index+1}</th>
        <td>{order.productName}</td>
        <td>{order.buyerName}</td>
        <td>{order.price}</td>
        <td>{order.quantity}</td>
        <td>{order.address}</td>
        <td>{order.date}</td>
        <td>{order.phone}</td>
      </tr>)
      }
    </tbody>
  </table>
</div>

<div className="flex justify-center mt-6 mb-4">
  <button
    onClick={handleDownload}
    className="btn btn-primary"
  >
    Download Report
  </button>
</div>

    </div>
  )
}

export default MyOrders