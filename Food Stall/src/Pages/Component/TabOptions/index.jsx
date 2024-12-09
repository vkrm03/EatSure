import React from "react";
import "./style.css"
import "../../Style/commonClass.css"


const Tabs = [{
    id: 1,
    name: "Delivery",
    activeImg : "https://w7.pngwing.com/pngs/981/312/png-transparent-pizza-delivery-pizza-delivery-scooter-courier-delivery-logo-computer-wallpaper-mode-of-transport.png",
    backdrop : "#fffff",
    inactiveImg : "https://w7.pngwing.com/pngs/981/312/png-transparent-pizza-delivery-pizza-delivery-scooter-courier-delivery-logo-computer-wallpaper-mode-of-transport.png",
},
{
    id: 2,
    name: "Dining Out",
    activeImg : "https://png.pngtree.com/png-vector/20200729/ourlarge/pngtree-small-restaurant-building-vector-with-flat-design-png-image_2316583.jpg",
    backdrop : "#fffff",
    inactiveImg : "https://png.pngtree.com/png-vector/20200729/ourlarge/pngtree-small-restaurant-building-vector-with-flat-design-png-image_2316583.jpg",
},
{
    id: 3,
    name: "Night Life",
    activeImg : "https://img.freepik.com/free-photo/black-meat-burger-tomato-lettuce-cheddar-cheese-side-view_141793-3073.jpg?t=st=1732677803~exp=1732681403~hmac=ebdeefeb212f3b927dd8da7f9b463147128aff1c8a5f4bbc39cb339a2aafd657&w=360",
    backdrop : "#fffff",
    inactiveImg : "https://img.freepik.com/free-photo/black-meat-burger-tomato-lettuce-cheddar-cheese-side-view_141793-3073.jpg?t=st=1732677803~exp=1732681403~hmac=ebdeefeb212f3b927dd8da7f9b463147128aff1c8a5f4bbc39cb339a2aafd657&w=360",
}
]

function TabOptions({activeTab , setActiveTab}) {
    return (
    <div className="tab-options">
        <div className="max-width options-wrapper">
            {Tabs.map((tab) => {
                return ( <div onClick={() => {setActiveTab(tab.name)}} className={`tab-option absolute-center ${activeTab === tab.name && "active-tab"}`}>
                    <div className="tab-img-container absolute-center" style={{backgroundColor : `${activeTab===tab.name? tab.backdrop : ""}`}}>
                        <img src={tab.activeImg} alt={tab.name} className="tab-img"/>
                    </div>
                    <div className={`tab-name absolute-center ${activeTab === tab.name && "active-tab-name"}`}>
                        {tab.name}
                    </div>
                </div> )
            })}
        </div>
        <hr />
    </div>
    );
}

export default TabOptions;