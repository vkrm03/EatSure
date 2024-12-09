import React from "react";
import Card from "./card";
import "./style.css"

export default function Dining() {
    return (
        <div className="card-container">
            <Card Src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            Name="Taj Hotel"
            Ratings="⭐⭐⭐⭐⭐"
            Location="Express Estate, Royapettah, Chennai."
            />
            <Card Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f4/e3/be/photo9jpg.jpg?w=900&h=500&s=1"
            Name="Avartana"
            Ratings="⭐⭐⭐⭐"
            Location="ITC Grand Chola Little Mount, Guindy, Chennai."
            />
            <Card Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/53/4f/18/r-g-community-table.jpg?w=300&h=200&s=1"
            Name="R&G GreenPark"
            Ratings="⭐⭐⭐⭐"
            Location="Vadapalani, Hotel Green Park, Chennai."
            />
            <Card Src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/81/73/8e/private-dining-room.jpg?w=900&h=500&s=1"
            Name="Southern Spice"
            Ratings="⭐⭐⭐⭐"
            Location="Mahatma Gandhi Road, Taj Coromandel, Chennai."
            />
            <Card 
    Src="https://b.zmtcdn.com/data/pictures/6/67196/ae7795a1a99f3455246390dfc59fb084.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" 
    Name="The Marina" 
    Ratings="⭐⭐⭐⭐⭐" 
    Location="Marina Beach Road, Chennai." 
/>

<Card 
    Src="https://www.clubmarriott.in/content/dam/tlc/en/marriott/club-marriott/club-marriott-india/city/pune/jw-marriott-hotel-pune/dining/side-spice.jpg" 
    Name="Spice Kitchen" 
    Ratings="⭐⭐⭐⭐" 
    Location="Phoenix MarketCity, Velachery, Chennai." 
/>

<Card 
    Src="https://www.andbeyond.com/wp-content/uploads/sites/5/Lobby-Lounge-at-Leela-Palace.jpg" 
    Name="Leela Palace" 
    Ratings="⭐⭐⭐⭐⭐" 
    Location="Adyar Seaface, MRC Nagar, Chennai." 
/>

<Card 
    Src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&h=500&auto=format&fit=crop" 
    Name="Golden Dragon" 
    Ratings="⭐⭐⭐⭐" 
    Location="Taj Coromandel, Nungambakkam, Chennai." 
/>

        </div>
    );
}