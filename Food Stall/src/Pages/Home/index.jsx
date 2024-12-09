import React, { act, useState } from "react";
import TabOptions from "../Component/TabOptions/index.jsx";
import Footer from "../Component/Footer/index.jsx";
import Delivery from "../Component/Delivery/index.jsx";
import Dining from "../Component/Dining/index.jsx";
import NightLife from "../Component/NightLife/index.jsx";

const HomePage = ({addToCart}) => {
    const [activeTab , setActiveTab] = useState("Delivery");
    
    return (
        <div>
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {get_current_screen(activeTab)}
            <Footer />
        </div>
    );

    function get_current_screen(tab) {
        switch(tab) {
            case "Delivery":
                return <Delivery addToCart={addToCart}/>;
            case "Dining Out":
                return <Dining />;
            case "Night Life":
                return <NightLife />;
            default:
                return <Delivery />
        }
    }
}

export default HomePage;