import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Order from "./Pages/Component/Orders/index.jsx";
import "./index.css";
import HomePage from "./Pages/Home/index.jsx";
import Cart from "./Pages/Component/Cart/index.jsx";
import LoginForm from "./Pages/Component/Auth/Login.jsx";
import RegisterForm from "./Pages/Component/Auth/Register.jsx";
import Header from "./Pages/Component/Header/index.jsx";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [userName, setUserName] = useState("");
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedUserName = localStorage.getItem("username");
        if (storedUserName) {
            setIsLoggedIn(true);
            setUserName(storedUserName);
        }
    }, []);

    const handleLogin = (name) => {
        setIsLoggedIn(true);
        setUserName(name);
        localStorage.setItem("username", name);
        if (name === "Admin") {
            setIsAdmin(true);
        }
    };
    

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsAdmin(false);
        localStorage.removeItem("username");
        setUserName("");
        window.location.href = "/login"; 
    };

    const addToCart = (item) => {
            setCart((prevCart) => {
                const itemInCart = prevCart.find((cartItem) => cartItem.id === item.id);
                if (itemInCart) {
                    return prevCart.map((cartItem) =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                    );
                } else {
                    return [...prevCart, { ...item, quantity: 1 }];
                }
            });
    };
    

    const removeFromCart = (item) => {
        setCart((prevCart) => {
            const updatedCart = prevCart
                .map((cartItem) => {
                    if (cartItem.id === item.id) {
                        if (cartItem.quantity > 1) {
                            return { ...cartItem, quantity: cartItem.quantity - 1 };
                        } else {
                            return null;
                        }
                    }
                    return cartItem;
                })
                .filter((cartItem) => cartItem !== null);
            return updatedCart;
        });
    };
    
    
    

    return (
        <div>
        <Router>    
            <Header
                isLoggedIn={isLoggedIn}
                userName={userName}
                setAdmin={setIsAdmin}
                isAdmin={isAdmin}
                handleLogout={handleLogout}
            />
            <Routes>
                <Route path="/" element={<HomePage addToCart={addToCart} />} />
                <Route path="/orders" element={ <Order /> } />
                <Route
                    path="/cart"
                    element={<Cart cart={cart} removeFromCart={removeFromCart} setCart={setCart}/>}
                />
                <Route path="/login" element={<LoginForm onLoginSuccess={handleLogin} />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </Router>
        </div>
    );
}

export default App;
