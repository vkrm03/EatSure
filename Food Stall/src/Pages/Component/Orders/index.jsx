import React, { useState, useEffect } from "react";
import uri from "../../../../public/Uri";
import "./style.css";
import axios from "axios";

export default function Order() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(uri + "/orders");
                setOrders(response.data);
            } catch (err) {
                console.error("Error fetching orders:", err);
            }
        };
        fetchOrders();
    }, []);

    const calculateTotal = (items) =>
        items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="order-page">
            <div className="order-header">
                <h1>User Orders</h1>
            </div>
            <div className="order-content">
                {orders.length === 0 ? (
                    <p style={{ textAlign: "center" }}>No orders found.</p>
                ) : (
                    orders.map((order) => (
                        <div key={order._id} className="order-item">
                            <div className="order-details">
                                <p className="order-date">user: {order.usr}</p>
                                <p className="order-date">Date: {order.date}</p>
                                <h3>Items:</h3>
                                <ul className="order-item-list">
                                    {order.items.map((item, index) => (
                                        <li key={index} className="order-item-entry">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                className="order-img"
                                            />
                                            <div className="order-item-info">
                                                <h4>{item.name}</h4>
                                                <p>Quantity: {item.quantity}</p>
                                                <p>Price: {item.prize}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="order-summary">
                                <h4>Total: Rs. {order.total}</h4>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
