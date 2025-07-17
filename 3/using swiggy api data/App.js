import React from 'react'
import ReactDOM from 'react-dom/client'
import swiggyData from "./ApiData"

// console.log(swiggyData)
const Header = ()=>{
    return(
        <div className='headerContainer'>
            <div className='header'>
                <div className='logo'>
                    <img src='https://marketplace.canva.com/EAGKDhXEhoY/1/0/1600w/canva-brown-and-white-simple-modern-professional-catering-logo-Dvz9NG3gqk0.jpg'/>
                </div>
                <div className='listContainer'>
                    <ul className='navList'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

const CardContainer = ({swiggyData})=>{
    return(
        // swiggyData.data.cards.card.card.gridElements.infoWithStyle.restaurants.name
        <div className='content'>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[2].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[3].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[4].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[5].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[6].info.areaName}</p>
            </div>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.cloudinaryImageId}/>
                <h2>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.name}</h2>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.name)} */}
                <h3>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.avgRating}</h3>
                {/* <p>{console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.avgRating)}</p> */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.sla.slaString}</p>
                {/* {console.log(swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info.sla.slaString)} */}
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.cuisines[0]}</p>
                <p>{swiggyData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[7].info.areaName}</p>
            </div>
        </div>

        
    )
}

const Body = ()=>{
    return (
        <div className='bodyContainer'>
            <div className='search-container'>
                <input type='text'/>
                <button>Search</button>
            </div>
            <div className='cardContainer'>
                <CardContainer swiggyData={swiggyData}/>
                {/* <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/>
                <CardContainer swiggyData={swiggyData}/> */}
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout/>)