import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uri from "../../../../public/Uri.js";
import "./style.css";
import Footer from "../../Component/Footer/index.jsx";

function LoginForm({ onLoginSuccess }) {
    const [formData, setFormData] = useState({
        Email: "",
        PassWord: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(uri + "/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (response.ok) {
                toast.success("Login successful!", {
                    autoClose: 1000,
                    onClose: () => {
                        localStorage.setItem("username", data.usrName);
                        onLoginSuccess(data.usrName);
                        navigate("/");
                    },
                });
            } else {
                toast.error(data.message || "Invalid credentials. Try again.", { autoClose: 2000 });
            }
        } catch (error) {
            toast.error("Error during login. Please try again.", { autoClose: 2000 });
        }
    };

    return (
        <div>
            <div className="center-div">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email"><i className="fas fa-envelope"></i> Email</label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="Email"
                                value={formData.Email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password"><i className="fas fa-lock"></i> Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="PassWord"
                                value={formData.PassWord}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <br />
                    Don't have an account? <a href="/register">Register here!</a>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-center" />
        </div>
    );
}

export default LoginForm;
