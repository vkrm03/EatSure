import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import "./Delivery.css";

const foodItems = [
    {
        id: 1,
        name: "Pizza",
        description: "Delicious pizza delivered straight to your doorstep.",
        prize: "Rs. 100",
        img: "https://imgmedia.lbb.in/media/2019/09/5d90b8a04a8cb2564d8bf978_1569765536648.jpg",
    },
    {
        id: 2,
        name: "Sandwich",
        description: "Order your favorite sandwich food now!",
        prize: "Rs. 100",
        img: "https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.123xw,0&resize=1200:*",
    },
    {
        id: 3,
        name: "Burger",
        description: "Get juicy burgers delivered quickly and hot.",
        prize: "Rs. 100",
        img: "https://img.freepik.com/free-photo/black-meat-burger-tomato-lettuce-cheddar-cheese-side-view_141793-3073.jpg",
    },
    {
        id: 4,
        name: "Pasta",
        description: "Creamy and delicious pasta to satisfy your cravings.",
        prize: "Rs. 120",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1AsHrLakxRJlqyK3zqx-kqMTxi7Fz6nL3w&s",
    },
    {
        id: 5,
        name: "Sushi",
        description: "Fresh and authentic sushi rolls delivered to you.",
        prize: "Rs. 250",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTd1lb7IgwAbBWcld8j0WM6yYmkjHQ-gctGg&s",
    },
    {
        id: 6,
        name: "Tacos",
        description: "Crispy tacos with your favorite fillings.",
        prize: "Rs. 80",
        img: "https://www.onceuponachef.com/images/2023/08/Beef-Tacos.jpg",
    },
    {
        id: 7,
        name: "Fries",
        description: "Golden crispy fries for a perfect snack.",
        prize: "Rs. 50",
        img: "https://static.vecteezy.com/system/resources/thumbnails/027/536/411/small/delicious-french-fries-on-a-white-background-photo.jpg",
    },
    {
        id: 8,
        name: "Dosa",
        description: "South Indian classic dosa served with chutney and sambar.",
        prize: "Rs. 70",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-glTW9VpM8O7nW1los6X5F9VkIOaj07rgw&s",
    },
    {
        id: 9,
        name: "Paneer Tikka",
        description: "Char-grilled paneer cubes with aromatic spices.",
        prize: "Rs. 150",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwneIfj-vwmTUer9xuR7tWP5nj96leLz06ng&s",
    },
    {
        id: 10,
        name: "Biryani",
        description: "Flavorful and aromatic biryani with a royal touch.",
        prize: "Rs. 200",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAeWRITf66R82FWfwKBYjhQtF01KTs-5oW_g&s",
    },
    {
        id: 11,
        name: "Ice Cream",
        description: "Delightful ice cream to sweeten your day.",
        prize: "Rs. 70",
        img: "https://media.istockphoto.com/id/1153411309/photo/treaded-ice-cream-with-3-scoops-of-sweet-ice-cream-insulated-on-a-white-background.jpg?s=612x612&w=0&k=20&c=Uf8LK4S7VCnnlWR68lRy7-ypcrYQhkzovolT48yc8dY=",
    },
    {
        id: 12,
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake for every occasion.",
        prize: "Rs. 150",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBnfTXs9DpaPffvPTpjsS2XrGmEqiS1PebKA&s",
    },
    {
        id: 13,
        name: "Salad",
        description: "Healthy and fresh salad with a variety of veggies.",
        prize: "Rs. 100",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsE8_SUC8DgFeqGGKmTrcMNNJPiFlem4h5Vg&s",
    },
    {
        id: 14,
        name: "Momos",
        description: "Steamed momos served with spicy chutney.",
        prize: "Rs. 90",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOpDppG_DaZXhxE9A6O0qkSlCKBC6Lr7K6A&s",
    },
    {
        id: 15,
        name: "Pav Bhaji",
        description: "Mumbai-style pav bhaji with buttery buns.",
        prize: "Rs. 120",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThT8xs4wQQxMcTSGAOJCrXlxQFTJ7-DpKNGA&s",
    },
    {
        id: 16,
        name: "Hot Noodles",
        description: "Chinese style spicy chicken hot noodles.",
        prize: "Rs. 120",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQujx5jb6WvhHb7XcW46Rmel1lts4KHWkuBfw&s",
    },
];


export default function Delivery( {addToCart}) {
    const handleAddToCart = (item) => {
        if (localStorage.getItem('username') != null) {
            addToCart(item);
            toast.success(item.name + ' added to cart!');
        } else {
            toast.error("Please login to add to cart");
        }
    };  
    return (
        <div className="delivery-page">
            <Toaster position="top-center" />
            <div className="delivery-header">   
                <h1>Welcome to EatSure</h1>
                <p>Find the best food delivery options near you!</p>
            </div>
            <div className="delivery-content">
                {foodItems.map((item) => (
                    <div key={item.id} className="delivery-card">
                        <img src={item.img} alt={item.name} className="delivery-img" />
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <p className="food-prize">{item.prize}</p>
                        <button
                            className="add-button"
                            onClick={() => handleAddToCart(item)}
                        >
                            Add to Cart 
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
