import React from 'react'
import ReactDOM from 'react-dom/client'
import resList from './Data'

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


const CardContainer = ({card})=>{
    const 
    {
        name,
        cuisines,
        cloudinaryImageId,
        avgRating,
        slaString,
        area
    } = card.data

    return(
        // swiggyData.data.cards.card.card.gridElements.infoWithStyle.restaurants.name
        <div className='content'>
            <div className='card'>
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{avgRating}</h3>
                <p>{slaString}</p>
                <p>{cuisines.join(", ")}</p>
                <p>{area}</p>
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
                {
                    resList.map((card)=>{
                        return <CardContainer key={card.data.id} card={card}/>
                    })
                }
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