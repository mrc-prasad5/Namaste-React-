import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Menu Items
 * Body
 *  - Search
 *  - Restaurant Container
 *    - Restuarant Card
 *      - Image
 *      - Name of Restaurant, Star Rating, Cuisine, Delivery Time
 * Footer
 *   - Copyright
 *   - Social Media Links
 *   - Contact Information 
 */

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://png.pngtree.com/template/20191014/ourmid/pngtree-pin-food-delivery-map-location-delivery-logo-concept-image_318151.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor:'#f0f0f0'
}

const RestoCard = (props) => {
    const {resData} = props;
    // const {name,cuisines,averageRating,deliveryTime,costForTwo} = props.resData;

                            // OR
    const {name,cuisines,averageRating,deliveryTime,costForTwo} = resData;                        
    return (
        <div className='resto-card' style={styleCard}>
            <img className='reslogo' alt="Aha Restaurant" src="https://files.yappe.in/place/full/aaha-food-village-1766660.webp"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{averageRating} stars</h5>
            <h6>{deliveryTime} mins</h6>
            <h6>Cost: &#8377;{costForTwo/100} FOR TWO </h6>
        </div>
    )
}

const resObj = [{    
    type:"restaurant",
    data:{
        name:"KFC",
        cuisines:["Burgers","Biryani","American","Snacks","Fast Food"],
        costForTwo:40000,
        costForTwoString:"400 FOR TWO",
        deliveryTime:36,
        averageRating:3.8,
        id:'337335'
    }   
}];

const Body = () => {
    return (
        <div className="body">
            <div className='search'>
                Search
            </div>
            <div className='restoContainer' style={{display:'flex',flexWrap:'wrap'}}>
                {
                    resObj.map(restaurant => (<RestoCard key={restaurant.data.id} resData = {restaurant.data}/>))
                }
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app"> 
         <Header/>
         <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('episode4'));
root.render(<AppLayout/>);