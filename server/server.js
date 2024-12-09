const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./User");
const Order = require("./Order");

const app = express();
const PORT = 5000;

mongoose.connect("mongodb+srv://vkrm:vkrm@eatsure.vvwth.mongodb.net/?retryWrites=true&w=majority&appName=EatSure")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

const corsOptions = {
    origin: "https://eat-sure.vercel.app", // Frontend domain
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Include credentials if necessary
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

const JWT_SECRET = "vikram123";
const TOKEN_EXPIRATION = "1h";

app.post("/register", async (req, res) => {
    const { usrName, Email, PassWord } = req.body;
    console.log(usrName);
    

    if (!usrName || !Email || !PassWord) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ Email });
        if (existingUser) {
            return res.status(409).json({ message: "Email already registered" });
        }
        const newUser = new User({ usrName, Email, PassWord });
        await newUser.save();

        console.log("User Registered:", { usrName, Email });
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.post("/login", async (req, res) => {
    const { Email, PassWord } = req.body;

    if (!Email || !PassWord) {
        return res.status(400).json({ message: "Both email and password are required" });
    }

    try {
        const user = await User.findOne({ Email, PassWord });
        if (user) {
            const token = jwt.sign(
                { id: user._id, Email: user.Email },
                JWT_SECRET,
                { expiresIn: TOKEN_EXPIRATION }
            );
            console.log("User Logged In:", { Email });
            res.status(200).json({ 
                message: "Login successful", 
                token, 
                usrName: user.usrName
            });
        } else {
            res.status(401).json({ message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

function Date_and_time() {
    let date = new Date();
    let options = {
      timeZone: 'Asia/Kolkata',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    };
  
    let currentDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    let istTime = date.toLocaleTimeString('en-IN', options);
    let date_and_time = currentDate + " " + istTime;
  
    return ("Date and Time:", date_and_time);
  }

app.post("/checkout", async (req, res) => {
    const { items, total, usr } = req.body;
    console.log(usr);
    if (!items || items.length === 0 || !total) {
        return res.status(400).json({ message: "Invalid order data" });
    }
    

    try {
        const order = new Order({
            usr,
            items,
            total,
            date: Date_and_time(),
        });

        await order.save();
        console.log("Order saved");

        res.status(200).json({ message: "Order placed successfully", orderId: order._id });
    } catch (error) {
        console.error("Error during checkout:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});

app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching orders', error: err });
    }
}); 

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
