import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uri from "../../../../public/Uri.js";
import "./style.css";
import Footer from "../../Component/Footer/index.jsx";

function RegisterForm() {
    const [formData, setFormData] = useState({
        usrName: "",
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
            console.log(formData);
            
            const response = await fetch(uri + "/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                toast.success("Registration successful!", { autoClose: 3000 });
                setTimeout(() => navigate("/login"), 1500);
            } else {
                toast.error("Failed to register. Try again.", { autoClose: 1000 });
            }
        } catch (error) {
            toast.error("Error during registration. Please try again.", { autoClose: 3000 });
        }
    };

    return (
        <div>
            <div className="center-div">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username"><i className="fas fa-user"></i> User Name</label>
                            <input
                                type="text"
                                placeholder="User Name"
                                name="usrName"
                                value={formData.usrName}
                                onChange={handleChange}
                                required
                            />
                        </div>
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
                        <button type="submit" className="btn btn-primary">Register</button>
                    </form>
                </div>
            </div>
            <Footer />
            <ToastContainer position="top-center"/>
        </div>
    );
}

export default RegisterForm;
